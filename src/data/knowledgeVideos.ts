export type KnowledgeVideoCategory =
  | "habitos"
  | "salud"
  | "nutricion"
  | "entrenamiento"
  | "tecnica"
  | "metodo";

export type KnowledgePrinciple = "habitos" | "salud" | "ciencia" | "tecnica";

export interface KnowledgeVideo {
  id: string;
  originalFile: string;
  file: string;
  title: string;
  description: string;
  category: KnowledgeVideoCategory;
  principle: KnowledgePrinciple | null;
  featured: boolean;
  poster: string;
}

export const knowledgeCategoryLabels: Record<KnowledgeVideoCategory, string> = {
  habitos: "Hábitos",
  salud: "Salud",
  nutricion: "Nutrición",
  entrenamiento: "Entrenamiento",
  tecnica: "Técnica",
  metodo: "Método Ricardo Cobo",
};

export const knowledgeVideos: KnowledgeVideo[] = [
  {
    id: "motivacion-real",
    originalFile: "Pack 2/Ricardo Cobo Nº22.mp4",
    file: "motivacion-real.mp4",
    poster: "motivacion-real.webp",
    title: "Motivación real",
    description: "Cómo empezar sin depender del entusiasmo de enero.",
    category: "habitos",
    principle: "habitos",
    featured: true,
  },
  {
    id: "constancia-diaria",
    originalFile: "Pack 1/Ricardo Nº4.mp4",
    file: "constancia-diaria.mp4",
    poster: "constancia-diaria.webp",
    title: "Constancia diaria",
    description: "La frecuencia útil es la que puedes sostener cada semana.",
    category: "habitos",
    principle: "habitos",
    featured: true,
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
    featured: true,
  },
  {
    id: "entrenar-con-edad",
    originalFile: "Pack 2/Ricardo Cobo Nº34.mp4",
    file: "entrenar-con-edad.mp4",
    poster: "entrenar-con-edad.webp",
    title: "Entrenar con edad",
    description: "La fuerza se adapta a tu momento vital, no desaparece de él.",
    category: "salud",
    principle: "salud",
    featured: true,
  },
  {
    id: "no-obsesionarse-bascula",
    originalFile: "Pack 2/Ricardo Cobo Nº23.mp4",
    file: "no-obsesionarse-bascula.mp4",
    poster: "no-obsesionarse-bascula.webp",
    title: "Más que la báscula",
    description: "El progreso no puede reducirse a un único número.",
    category: "salud",
    principle: "salud",
    featured: true,
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
    featured: true,
  },
  {
    id: "suplementacion-inteligente",
    originalFile: "Pack 1/Ricardo Nº2.mp4",
    file: "suplementacion-inteligente.mp4",
    poster: "suplementacion-inteligente.webp",
    title: "Suplementación inteligente",
    description: "Qué valorar antes de añadir productos a tu rutina.",
    category: "nutricion",
    principle: "ciencia",
    featured: true,
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
    featured: true,
  },
  {
    id: "cardio-y-perdida-grasa",
    originalFile: "Pack 2/Ricardo Nº40.mp4",
    file: "cardio-y-perdida-grasa.mp4",
    poster: "cardio-y-perdida-grasa.webp",
    title: "Cardio y pérdida de grasa",
    description: "El papel real del cardio dentro de una estrategia completa.",
    category: "nutricion",
    principle: "ciencia",
    featured: true,
  },
  {
    id: "sentadilla-con-criterio",
    originalFile: "Pack 2/Ricardo Cobo Nº20.mp4",
    file: "sentadilla-con-criterio.mp4",
    poster: "sentadilla-con-criterio.webp",
    title: "Sentadilla con criterio",
    description: "Una ejecución sólida empieza por controlar el movimiento.",
    category: "tecnica",
    principle: "tecnica",
    featured: true,
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
    featured: true,
  },
  {
    id: "extension-cuadriceps",
    originalFile: "Pack 1/Ricardo Nº5.mp4",
    file: "extension-cuadriceps.mp4",
    poster: "extension-cuadriceps.webp",
    title: "Extensión de cuádriceps",
    description: "Ajustes sencillos para aprovechar mejor cada repetición.",
    category: "tecnica",
    principle: "tecnica",
    featured: true,
  },
  {
    id: "maquina-inercial",
    originalFile: "Pack 1/Ricardo Nº1.mp4",
    file: "maquina-inercial.mp4",
    poster: "maquina-inercial.webp",
    title: "Máquina inercial",
    description: "Una herramienta distinta al servicio de una intención concreta.",
    category: "entrenamiento",
    principle: null,
    featured: false,
  },
  {
    id: "dominadas-asistidas",
    originalFile: "Pack 1/Ricardo Nº13.mp4",
    file: "dominadas-asistidas.mp4",
    poster: "dominadas-asistidas.webp",
    title: "Dominadas asistidas",
    description: "Progresar el tirón vertical sin sacrificar el control.",
    category: "tecnica",
    principle: null,
    featured: false,
  },
  {
    id: "press-inclinado",
    originalFile: "Pack 1/Ricardo Nº16.mp4",
    file: "press-inclinado.mp4",
    poster: "press-inclinado.webp",
    title: "Press inclinado",
    description: "La variante adecuada depende de tu objetivo y ejecución.",
    category: "tecnica",
    principle: null,
    featured: false,
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
    featured: false,
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
    featured: false,
  },
  {
    id: "tour-gimnasio",
    originalFile: "Pack 1/Ricardo Tour.mp4",
    file: "tour-gimnasio.mp4",
    poster: "tour-gimnasio.webp",
    title: "Tour del gimnasio",
    description: "El espacio donde cada sesión se adapta a la persona.",
    category: "metodo",
    principle: null,
    featured: false,
  },
];

export const featuredKnowledgeVideos = knowledgeVideos.filter((video) => video.featured);

export const videosForPrinciple = (principle: KnowledgePrinciple) =>
  featuredKnowledgeVideos.filter((video) => video.principle === principle);