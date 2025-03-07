export const transformYoutubeUrl = (url?: string): string => {
  if (!url) return ""
  
  // Gestion de différents formats d'URL YouTube
  let videoId = ""
  
  // Format: https://www.youtube.com/watch?v=VIDEO_ID
  if (url.includes('watch?v=')) {
    videoId = new URL(url).searchParams.get('v') || ""
  } 
  // Format: https://youtu.be/VIDEO_ID
  else if (url.includes('youtu.be/')) {
    videoId = url.split('/').pop()?.split('?')[0] || ""
  }
  // Format: https://www.youtube.com/embed/VIDEO_ID
  else if (url.includes('/embed/')) {
    videoId = url.split('/embed/')[1]?.split('?')[0] || ""
  }
  // Autres formats possibles
  else {
    videoId = url.split('/').pop()?.split('?')[0] || ""
  }
  
  if (!videoId) return ""
  
  // Préservation des paramètres de l'URL originale
  const urlObj = new URL(url)
  urlObj.searchParams.delete('v') // Supprimer le paramètre 'v' s'il existe
  const params = urlObj.search || ''
  
  return `https://www.youtube-nocookie.com/embed/${videoId}${params}`
}