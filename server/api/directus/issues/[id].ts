import { readItems } from "@directus/sdk"
import type { Issue } from "@/types/issue"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'

  const res = await useDirectus().request(
    readItems("pte_issues", {
      limit: -1,
      fields: ["*", "translations.*"],
      deep: { translations: { _filter: { languages_code: { _eq: lang } } } },
      sort: ["sort"]
    })
  )

  let issues = res.map(e => transform(e))
  issues = issues.filter(e => e.title.trim() !== "")
  return issues as Issue[]
})

const transform = (response: any): Issue => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "",
    url: "",
    solutions: response.translations[0]?.solutions || [],
    testimonies: response.translations[0]?.testimonies || []
  }
}