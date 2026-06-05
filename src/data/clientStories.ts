/**
 * Client story image contract
 * ----------------------------
 * SINGLE SOURCE OF TRUTH for the public URLs of every client-story photo.
 *
 * HOW TO ACTIVATE REAL PHOTOS
 *   Drop the files into:  public/media/client-stories/
 *   using EXACTLY these filenames. As soon as a file exists it is shown
 *   automatically — no code changes needed. Until then, each <img> falls
 *   back to the bundled placeholder asset (see each page's import), so the
 *   site never shows a broken image.
 *
 * IMAGE ROLES (per client)
 *   cover  → grid card on /resultados  +  hero banner of the case-study page
 *   before → "Antes" photo in the Before/After section
 *   after  → "Después" photo in the Before/After section
 *
 * Recommended specs
 *   cover : portrait, ~1200×1500 (4:5), .jpg, focus on the person
 *   before: portrait, ~1200×1600 (3:4), .jpg
 *   after : portrait, ~1200×1600 (3:4), .jpg
 */
import { mediaPath } from "../utils/paths";

export const clientStoryImages = {
  carlos: {
    cover: mediaPath("client-stories/carlos-cover.png"),
    before: mediaPath("client-stories/carlos-before.png"),
    after: mediaPath("client-stories/carlos-after.png"),
  },
  maria: {
    cover: mediaPath("client-stories/maria-cover.png"),
    before: mediaPath("client-stories/maria-before.png"),
    after: mediaPath("client-stories/maria-after.png"),
  },
  javier: {
    cover: mediaPath("client-stories/javier-cover.png"),
    before: mediaPath("client-stories/javier-before.png"),
    after: mediaPath("client-stories/javier-after.png"),
  },
} as const;

export type ClientKey = keyof typeof clientStoryImages;
