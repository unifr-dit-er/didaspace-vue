import type { Video } from "./video";

export interface Issue {
  id: number;
  title: string;
  vignette?: string;
  description?: string;
  url?: string;
  solutions?: Video[];
  testimonies?: Video[];
}