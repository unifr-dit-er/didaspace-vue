import type { Video } from "./video"
import type { File } from "./file"

export interface Issue {
  id: number;
  title: string;
  vignette?: string;
  description?: string;
  url?: string;
  solutions?: Video[];
  testimonies?: Video[];
  appendix?: File[];
}