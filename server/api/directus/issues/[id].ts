import { readItem } from "@directus/sdk"
import type { Issue } from "@/types/issue"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'

  const res = await useDirectus().request(
    readItem("pte_issues", id, {
      fields: ["*", "translations.*"],
      deep: { translations: { _filter: { languages_code: { _eq: lang } } } }
    })
  )

  return transform(res) as Issue
})

const transformYoutubeUrl = (url: string): string => {
  if (!url) return ""
  const videoId = url.split('/').pop()?.split('?')[0]
  const params = url.includes('?') ? '?' + url.split('?')[1] : ''
  return `https://www.youtube-nocookie.com/embed/${videoId}${params}`
}

const transform = (response: any): Issue => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "",
    description: response.translations[0]?.description || "",
    url: transformYoutubeUrl(response.translations[0]?.video_url),
    solutions: (response.translations[0]?.solutions || []).map((video: any) => ({
      title: video.title || "",
      url: transformYoutubeUrl(video.video_url)
    })),
    testimonies: (response.translations[0]?.testimonies || []).map((video: any) => ({
      title: video.title || "",
      url: transformYoutubeUrl(video.video_url)
    }))
  }
}