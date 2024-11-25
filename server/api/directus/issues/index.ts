import { readItems } from "@directus/sdk"
import type { Issue } from "@/types/issue"

interface QueryOptions {
  limit: number;
  fields: string[];
  deep: { translations: { _filter: { languages_code: { _eq: string } } } };
  sort: string[];
  filter?: {
    translations: {
      title: {
        _contains: string
      }
    }
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'
  const search = query.search as string || ''

  const queryOptions: QueryOptions = {
    limit: -1,
    fields: ["*", "translations.title", "translations.description"],
    deep: { translations: { _filter: { languages_code: { _eq: lang } } } },
    sort: ["sort"]
  }

  if (search.trim() !== '') {
    queryOptions.filter = {
      translations: {
        title: {
          _contains: search
        }
      }
    }
  }

  const res = await useDirectus().request(
    readItems("pte_issues", queryOptions)
  )

  let issues = res.map(e => transform(e))
  issues = issues.filter(e => e.title.trim() !== "")
  return issues as Issue[]
})

const transform = (response: any): Issue => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "",
    vignette: response.vignette ? `https://eddb.unifr.ch/didanum-admin/assets/${response.vignette}?fit=cover&width=490&height=300` : "",
    description: response.translations[0]?.description || ""
  }
}