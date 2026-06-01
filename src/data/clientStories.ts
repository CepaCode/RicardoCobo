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
export const clientStoryImages = {
  carlos: {
    cover: "/media/client-stories/carlos-cover.jpg",
    before: "/media/client-stories/carlos-before.jpg",
    after: "/media/client-stories/carlos-after.jpg",
  },
  maria: {
    cover: "/media/client-stories/maria-cover.jpg",
    before: "/media/client-stories/maria-before.jpg",
    after: "/media/client-stories/maria-after.jpg",
  },
  javier: {
    cover: "/media/client-stories/javier-cover.jpg",
    before: "/media/client-stories/javier-before.jpg",
    after: "/media/client-stories/javier-after.jpg",
  },
} as const;

export type ClientKey = keyof typeof clientStoryImages;
