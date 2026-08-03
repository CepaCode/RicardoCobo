export type KnowledgeVideoCategory =
  | "habitos"
  | "salud"
  | "nutricion"
  | "entrenamiento"
  | "tecnica"
  | "metodo";

export type KnowledgePrinciple = "habitos" | "salud" | "ciencia" | "tecnica";

export type VideoPlacement = "homepage" | "principle" | "library";

export interface KnowledgeVideo {
  id: string;
  originalFile: string;
  file: string;
  title: string;
  description: string;
  category: KnowledgeVideoCategory;
  principle: KnowledgePrinciple | null;
  placement: VideoPlacement;
  poster: string;
}

export const knowledgeCategoryLabels: Record<KnowledgeVideoCategory, string> = {
  habitos: "Hábitos",
  salud: "Salud y longevidad",
  nutricion: "Nutrición",
  entrenamiento: "Entrenamiento",
  tecnica: "Técnica",
  metodo: "Método Ricardo Cobo",
};

// Ordered list of library categories (only shown if they have content)
export const libraryCategoryOrder: KnowledgeVideoCategory[] = [
  "habitos",
  "salud",
  "nutricion",
  "entrenamiento",
  "tecnica",
  "metodo",
];

export const knowledgeVideos: KnowledgeVideo[] = [
  // ═══════════════════════════════════════════════════════════════
  // HOMEPAGE EXCLUSIVE — Inspire, generate curiosity, build trust.
  // These 3 videos NEVER appear elsewhere on the website.
  // Order: space → offer → philosophy.
  // ═══════════════════════════════════════════════════════════════
  {
    id: "tour-gimnasio",
    originalFile: "Pack 1/Ricardo Nº7.mp4",
    file: "tour-gimnasio.mp4",
    poster: "tour-gimnasio.jpg",
    title: "Tour del gimnasio",
    description: "El espacio donde cada sesión se adapta a la persona.",
    category: "metodo",
    principle: null,
    placement: "homepage",
  },
  {
    id: "que-ofrecemos",
    originalFile: "Pack 2/Ricardo Cobo Nº29.mp4",
    file: "que-ofrecemos.mp4",
    poster: "que-ofrecemos.webp",
    title: "Qué ofrecemos",
    description: "Entrenamiento personal en Santander con atención individual.",
    category: "metodo",
    principle: null,
    placement: "homepage",
  },
  {
    id: "motivacion-real",
    originalFile: "Pack 2/Ricardo Cobo Nº22.mp4",
    file: "motivacion-real.mp4",
    poster: "motivacion-real.webp",
    title: "Motivación real",
    description: "Cómo empezar sin depender del entusiasmo de enero.",
    category: "habitos",
    principle: null,
    placement: "homepage",
  },

  // ═══════════════════════════════════════════════════════════════
  // MÉTODO PRINCIPLES — Exclusive to each principle section.
  // 2 videos per principle. Never on homepage or library.
  // ═══════════════════════════════════════════════════════════════

  // 01 Hábitos
  {
    id: "constancia-diaria",
    originalFile: "Pack 1/Ricardo Nº4.mp4",
    file: "constancia-diaria.mp4",
    poster: "constancia-diaria.webp",
    title: "Constancia diaria",
    description: "La frecuencia útil es la que puedes sostener cada semana.",
    category: "habitos",
    principle: "habitos",
    placement: "principle",
  },
  {
    id: "entrena-cerca",
    originalFile: "Pack 1/Ricardo Nº17.mp4",
    file: "entrena-cerca.mp4",
    poster: "entrena-cerca.webp",
    title: "Entrena cerca",
    description: "Reducir fricción también forma parte de un buen plan.",
    category: "habitos",
    principle: "habitos",
    placement: "principle",
  },

  // 02 Salud
  {
    id: "entrenar-con-edad",
    originalFile: "Pack 2/Ricardo Cobo Nº34.mp4",
    file: "entrenar-con-edad.mp4",
    poster: "entrenar-con-edad.webp",
    title: "Entrenar con edad",
    description: "La fuerza se adapta a tu momento vital, no desaparece de él.",
    category: "salud",
    principle: "salud",
    placement: "principle",
  },
  {
    id: "movimiento-para-cuidarte",
    originalFile: "Pack 2/Ricardo Cobo Nº24.mp4",
    file: "movimiento-para-cuidarte.mp4",
    poster: "movimiento-para-cuidarte.webp",
    title: "Muévete para cuidarte",
    description: "Ejercicio elegido con criterio para un cuerpo que dura.",
    category: "salud",
    principle: "salud",
    placement: "principle",
  },

  // 03 Ciencia
  {
    id: "suplementacion-inteligente",
    originalFile: "Pack 1/Ricardo Nº2.mp4",
    file: "suplementacion-inteligente.mp4",
    poster: "suplementacion-inteligente.webp",
    title: "Suplementación inteligente",
    description: "Qué valorar antes de añadir productos a tu rutina.",
    category: "nutricion",
    principle: "ciencia",
    placement: "principle",
  },
  {
    id: "criterio-ante-las-modas",
    originalFile: "Pack 2/Ricardo Cobo Nº33.mp4",
    file: "criterio-ante-las-modas.mp4",
    poster: "criterio-ante-las-modas.webp",
    title: "Criterio ante las modas",
    description: "Internet informa, pero el contexto decide qué te conviene.",
    category: "nutricion",
    principle: "ciencia",
    placement: "principle",
  },

  // 04 Técnica
  {
    id: "sentadilla-con-criterio",
    originalFile: "Pack 2/Ricardo Cobo Nº20.mp4",
    file: "sentadilla-con-criterio.mp4",
    poster: "sentadilla-con-criterio.webp",
    title: "Sentadilla con criterio",
    description: "Una ejecución sólida empieza por controlar el movimiento.",
    category: "tecnica",
    principle: "tecnica",
    placement: "principle",
  },
  {
    id: "remo-correcto",
    originalFile: "Pack 2/Ricardo Cobo Nº35.mp4",
    file: "remo-correcto.mp4",
    poster: "remo-correcto.webp",
    title: "Remo correcto",
    description: "Posición, recorrido y control antes de aumentar la carga.",
    category: "tecnica",
    principle: "tecnica",
    placement: "principle",
  },

  // ═══════════════════════════════════════════════════════════════
  // KNOWLEDGE LIBRARY — The archive. Curated exploration.
  // Only appears in the library. Never on homepage or principles.
  // Within each category: broad/approachable → practical → technical.
  // ═══════════════════════════════════════════════════════════════

  // — Hábitos —
  // Mindset about measurement: approachable topic anyone can relate to.
  {
    id: "no-obsesionarse-bascula",
    originalFile: "Pack 2/Ricardo Cobo Nº23.mp4",
    file: "no-obsesionarse-bascula.mp4",
    poster: "no-obsesionarse-bascula.webp",
    title: "Más que la báscula",
    description: "El progreso no puede reducirse a un único número.",
    category: "habitos",
    principle: null,
    placement: "library",
  },

  // — Nutrición —
  // Broad strategy first (the real role of cardio in fat loss),
  // then practical daily routine (simple food decisions).
  {
    id: "cardio-y-perdida-grasa",
    originalFile: "Pack 2/Ricardo Nº40.mp4",
    file: "cardio-y-perdida-grasa.mp4",
    poster: "cardio-y-perdida-grasa.webp",
    title: "Cardio y pérdida de grasa",
    description: "El papel real del cardio dentro de una estrategia completa.",
    category: "nutricion",
    principle: null,
    placement: "library",
  },
  {
    id: "rutina-nutricional",
    originalFile: "Pack 2/Ricardo Cobo Nº28.mp4",
    file: "rutina-nutricional.mp4",
    poster: "rutina-nutricional.webp",
    title: "Rutina nutricional",
    description: "Decisiones sencillas para una alimentación que encaje en tu día.",
    category: "nutricion",
    principle: null,
    placement: "library",
  },

  // — Entrenamiento —
  // Progression approach first (how to build up to pull-ups),
  // then variant selection (choosing the right incline press).
  {
    id: "dominadas-asistidas",
    originalFile: "Pack 1/Ricardo Nº13.mp4",
    file: "dominadas-asistidas.mp4",
    poster: "dominadas-asistidas.webp",
    title: "Dominadas asistidas",
    description: "Progresar el tirón vertical sin sacrificar el control.",
    category: "entrenamiento",
    principle: null,
    placement: "library",
  },
  {
    id: "press-inclinado",
    originalFile: "Pack 1/Ricardo Nº16.mp4",
    file: "press-inclinado.mp4",
    poster: "press-inclinado.webp",
    title: "Press inclinado",
    description: "La variante adecuada depende de tu objetivo y ejecución.",
    category: "entrenamiento",
    principle: null,
    placement: "library",
  },

  // — Técnica —
  // Pure form adjustment (single-joint, accessible).
  {
    id: "extension-cuadriceps",
    originalFile: "Pack 1/Ricardo Nº5.mp4",
    file: "extension-cuadriceps.mp4",
    poster: "extension-cuadriceps.webp",
    title: "Extensión de cuádriceps",
    description: "Ajustes sencillos para aprovechar mejor cada repetición.",
    category: "tecnica",
    principle: null,
    placement: "library",
  },

  // — Método Ricardo Cobo —
  // Ricardo's distinctive equipment and training philosophy.
  {
    id: "maquina-inercial",
    originalFile: "Pack 1/Ricardo Nº1.mp4",
    file: "maquina-inercial.mp4",
    poster: "maquina-inercial.webp",
    title: "Máquina inercial",
    description: "Una herramienta distinta al servicio de una intención concreta.",
    category: "metodo",
    principle: null,
    placement: "library",
  },
];

// ═══════════════════════════════════════════════════════════════════════
// EXCLUDED VIDEOS — Not yet processed (no web derivative or poster).
// These 22 source files exist only as raw recordings in src/assets/.
// They require: content review, title/description assignment, ffmpeg
// encoding to public/media/knowledge/, and poster generation.
//
// Pack 1:
//   Ricardo Nº3 (R).mp4    — unreviewed, content unknown
//   Ricardo Nº6.mp4        — unreviewed, content unknown
//   Ricardo Nº7.mp4        — unreviewed, content unknown
//   Ricardo Nº8..mp4       — unreviewed, content unknown
//   Ricardo Nº9.mp4        — unreviewed, content unknown
//   Ricardo Nº10.mp4       — unreviewed, content unknown
//   Ricardo Nº11.mp4       — unreviewed, content unknown
//   Ricardo Nº12.mp4       — unreviewed, content unknown
//   Ricardo Nº14.mp4       — unreviewed, content unknown
//   Ricardo Nº15.mp4       — unreviewed, content unknown
//   Ricardo Nº18.mp4       — unreviewed, content unknown
//   Ricardo Nº19.mp4       — unreviewed, content unknown
//
// Pack 2:
//   Ricardo Cobo Nº21.mp4  — unreviewed, content unknown
//   Ricardo Cobo Nº25.mp4  — unreviewed, content unknown
//   Ricardo Cobo Nº26.mp4  — unreviewed, content unknown
//   Ricardo Cobo Nº27.mp4  — unreviewed, content unknown
//   Ricardo Nº30 (lut modificado)_1.mp4 — unreviewed, possible color-grade variant
//   Ricardo Nº31 (lut modificado)_2.mp4 — unreviewed, possible color-grade variant
//   Ricardo Nº36_1.mp4     — unreviewed, content unknown
//   Ricardo Nº37.mp4       — unreviewed, content unknown
//   Ricardo Nº38.mp4       — unreviewed, content unknown
//   Ricardo Nº39......mp4  — unreviewed, content unknown
// ═══════════════════════════════════════════════════════════════════════

// Homepage exclusive videos
export const homepageVideos = knowledgeVideos.filter((v) => v.placement === "homepage");

// Videos for a specific método principle (exactly 2 each)
export const videosForPrinciple = (principle: KnowledgePrinciple) =>
  knowledgeVideos.filter((v) => v.placement === "principle" && v.principle === principle);

// Library videos grouped by category in editorial order
export const libraryVideos = knowledgeVideos.filter((v) => v.placement === "library");

export const libraryCategories = libraryCategoryOrder.filter((cat) =>
  libraryVideos.some((v) => v.category === cat)
);

export const libraryVideosByCategory = (category: KnowledgeVideoCategory) =>
  libraryVideos.filter((v) => v.category === category);