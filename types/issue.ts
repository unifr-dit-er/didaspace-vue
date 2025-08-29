import type { Video } from "./video"
import type { File } from "./file"

export interface Issue {
  id: number;
  title: string;
  vignette?: string;
  description?: string;
  content?: string;
  url?: string;
  solutions?: Video[];
  testimonies?: Video[];
  resourcesDescription?: string;
  appendix?: File[];
  links?: {
    title: string;
    url: string;
  }[];
}