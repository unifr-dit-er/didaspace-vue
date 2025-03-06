import { readItem } from "@directus/sdk"
import type { Issue } from "@/types/issue"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'

  const res = await useDirectus().request(
    readItem("pte_issues", id, {
      fields: ["*", "translations.*", "appendix.directus_files_id.*"],
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

const transformAppendixUrl = (id: string): string => {
  return `https://eddb.unifr.ch/didanum-admin/assets/${id}`
}

const transform = (response: any): Issue => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "",
    description: response.translations[0]?.description || "",
    content: response.translations[0]?.content || "",
    url: transformYoutubeUrl(response.translations[0]?.video_url),
    solutions: (response.translations[0]?.solutions || []).map((video: any) => ({
      title: video.title || "",
      url: transformYoutubeUrl(video.video_url)
    })),
    testimonies: (response.translations[0]?.testimonies || []).map((video: any) => ({
      title: video.title || "",
      url: transformYoutubeUrl(video.video_url)
    })),
    appendix: response.appendix.map((appendix: any) => ({
      title: appendix.directus_files_id.title || "",
      url: transformAppendixUrl(appendix.directus_files_id.id)
    }))
  }
}