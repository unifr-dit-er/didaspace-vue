import { readItem } from "@directus/sdk"
import { transformYoutubeUrl } from "@/server/utils/youtube"
import { directusAssetUrl } from "~/server/utils/directus"
import type { Issue } from "@/types/issue"

interface DirectusIssue {
  id: string
  translations: Array<{
    title?: string
    description?: string
    content?: string
    video_url?: string
    solutions?: Array<{
      title?: string
      video_url?: string
    }>
    testimonies?: Array<{
      title?: string
      video_url?: string
    }>
    resources_description?: string
  }>
  appendix: Array<{
    directus_files_id: {
      id: string
      title?: string
    }
  }>
  links?: Array<{
    title?: string
    url?: string
  }>
}

interface VideoItem {
  title: string
  url: string
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  const query = getQuery(event)
  const lang = (query.lang as string) || 'fr-FR'

  try {
    const res = await useDirectus().request(
      readItem("pte_issues", id, {
        fields: ["*", "translations.*", "appendix.directus_files_id.*"],
        deep: { translations: { _filter: { languages_code: { _eq: lang } } } }
      })
    ) as DirectusIssue

    return transform(res)
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'issue ${id}:`, error)
    throw createError({
      statusCode: 500,
      message: `Impossible de récupérer les données pour l'issue ${id}`
    })
  }
})

const transformVideoItems = (items?: Array<{ title?: string, video_url?: string }> | null): VideoItem[] => {
  return (items || []).map(item => ({
    title: item.title || "",
    url: transformYoutubeUrl(item.video_url)
  }))
}

/**
 * Transform API response into Issue object
 */
const transform = (response: DirectusIssue): Issue => {
  const translation = response.translations[0] || {}
  
  return {
    id: Number(response.id),
    title: translation.title || "",
    description: translation.description || "",
    content: translation.content || "",
    url: transformYoutubeUrl(translation.video_url),
    solutions: transformVideoItems(translation.solutions),
    testimonies: transformVideoItems(translation.testimonies),
    resourcesDescription: translation.resources_description || "",
    appendix: (response.appendix || []).map((appendix) => ({
      title: appendix?.directus_files_id?.title || "",
      url: directusAssetUrl(appendix?.directus_files_id?.id || "")
    })),
    links: (response.links || []).map(link => ({
      title: link.title || "",
      url: link.url || ""
    }))
  }
}