import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Armador de Muebles a Domicilio en Montevideo | Desde $350",
  DESCRIPTION: "Armamos roperos, camas, racks y escritorios en tu casa, en el día. Precios desde $350, con herramientas y garantía de 30 días. Cotizá gratis por WhatsApp.",
  EMAIL: "contacto@armadoresmontevideo.uy",
  NUM_POSTS_ON_HOMEPAGE: 6,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

// Perfiles externos para el campo sameAs del schema (señales de autoridad/local).
// Pegá aquí las URLs reales. Las vacías se ignoran automáticamente.
export const PROFILES = {
  // URL del Google Business Profile (ficha en Google Maps).
  GOOGLE_BUSINESS: "https://share.google/5kAdlXEvrlfl0ZhIP",
  INSTAGRAM: "",
  FACEBOOK: "",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Armado profesional de muebles a domicilio en Montevideo. Ahorra tiempo y evita errores en tus nuevos muebles. Garantía incluida.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Guias para armar tus nuevos muebles. Tips para su cuidado.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

// Reseñas reales de clientes en Google Business Profile.
// Se muestran como prueba social (sin marcado de rating: las reseñas en el
// propio sitio son "self-serving" y no califican para estrellas en Google).
export const reviews = [
  { name: "Silvana", text: "Excelente servicio y muy buenos precios. Totalmente recomendable!!" },
  { name: "Felix Machado", text: "Súper barato y excelente el servicio." },
  { name: "Luar P.", text: "Excelente servicio y muy amable, son buenos en el armado." },
];

// Barrios con landing local propia en /armador-de-muebles-en-{slug}/.
// Solo los de mayor demanda/diferenciación, cada uno con contenido único
// (intro + context + highlights + faqs) para evitar thin/doorway pages.
export interface Neighborhood {
  name: string;
  slug: string;
  // Ciudad/departamento para zonas fuera de Montevideo (default: "Montevideo").
  city?: string;
  // true si el traslado puede tener cargo adicional (zonas fuera de Montevideo).
  extraTravelCharge?: boolean;
  intro: string;
  context: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
  nearby: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    name: "Pocitos",
    slug: "pocitos",
    intro:
      "Pocitos es uno de los barrios con más mudanzas de Montevideo. Entre las torres sobre la rambla, los monoambientes y los apartamentos que cambian de inquilino seguido, armar muebles nuevos es algo de todas las semanas. Vamos a tu edificio, armamos dentro de tu unidad y te dejamos el ropero, la cama o el escritorio listos para usar.",
    context:
      "La mayoría de los trabajos en Pocitos son en altura: edificios con ascensor, a veces con coordinación de portería para subir las cajas. Estamos acostumbrados a ese ritmo, así que no necesitás bajar nada ni hacer lugar: subimos las piezas, armamos arriba y nos llevamos el cartón. Si recién te mudaste, podemos armar el dormitorio completo —cama, ropero y mesas de luz— en una sola visita.",
    highlights: [
      "Armado dentro de tu apartamento, sin que bajes las cajas",
      "Coordinamos con la portería del edificio cuando hace falta",
      "Roperos y camas armados en el día",
      "Ideal para mudanzas: dejamos el dormitorio listo en una visita",
    ],
    faqs: [
      {
        q: "¿Coordinan con la portería del edificio en Pocitos?",
        a: "Sí. Si tu edificio pide aviso previo o usar el ascensor de servicio, lo coordinamos al agendar para entrar sin trabas.",
      },
      {
        q: "¿Arman el mismo día que recibo el mueble?",
        a: "En la mayoría de los casos sí. Mandanos la foto y la fecha de entrega por WhatsApp y buscamos el día más cercano que te quede cómodo.",
      },
    ],
    nearby: ["punta-carretas", "cordon", "buceo"],
  },
  {
    name: "Punta Carretas",
    slug: "punta-carretas",
    intro:
      "Punta Carretas combina torres modernas cerca de la rambla y del shopping con apartamentos premium recién estrenados. Armamos roperos, camas, racks de TV, escritorios y muebles de living a domicilio, coordinando con el edificio cuando hace falta.",
    context:
      "En la zona vemos mucho apartamento a estrenar y reformas, donde llega todo el mobiliario junto. Por eso solemos hacer amueblados completos: dormitorio, living con rack y TV, y un rincón de home-office en una misma visita. Trabajamos prolijo, nivelamos cada pieza y dejamos los cables del living ordenados.",
    highlights: [
      "Amueblado completo de un apartamento en una sola visita",
      "Armado de racks y montaje de TV en el living",
      "Escritorios y rincones de home-office",
      "Trabajo prolijo en torres y apartamentos premium",
    ],
    faqs: [
      {
        q: "¿Pueden amueblar un apartamento completo en Punta Carretas?",
        a: "Sí. Si estrenás o reformaste, coordinamos una visita para armar dormitorio, living y escritorio de una vez. Pasanos la lista de muebles y te damos precio y tiempo estimado.",
      },
      {
        q: "¿Montan también la TV en la pared del living?",
        a: "Sí, instalamos el soporte de la TV en la pared además de armar el rack. Mirá el servicio de instalación de soporte de TV para más detalle.",
      },
    ],
    nearby: ["pocitos", "cordon", "centro"],
  },
  {
    name: "Cordón",
    slug: "cordon",
    intro:
      "El Cordón, entre el Centro y Tres Cruces, es un barrio universitario lleno de apartamentos en alquiler. Estrenar muebles al mudarse es lo más común, y nosotros vamos y los armamos el mismo día que los recibís, con horarios que se adaptan a tu cursada o tu trabajo.",
    context:
      "Acá la mayoría son monoambientes y apartamentos de uno o dos dormitorios donde se aprovecha cada metro. Armamos camas, escritorios, estanterías y roperos pensados para espacios chicos, y damos prioridad a los muebles que necesitás usar primero: la cama y el ropero el mismo día de la mudanza.",
    highlights: [
      "Armado el mismo día de la mudanza",
      "Cama, ropero y escritorio en una visita",
      "Soluciones para monoambientes y espacios chicos",
      "Horarios flexibles, también después de hora y sábados",
    ],
    faqs: [
      {
        q: "¿Arman muebles de un alquiler recién mudado en el Cordón?",
        a: "Sí, es lo que más hacemos en la zona. Coordinamos para el día de la mudanza y dejamos cama, ropero y escritorio listos para que puedas instalarte enseguida.",
      },
      {
        q: "¿Tienen horarios fuera del horario laboral?",
        a: "Atendemos de lunes a sábado y coordinamos horarios que te queden cómodos si estudiás o trabajás de día.",
      },
    ],
    nearby: ["centro", "pocitos", "punta-carretas"],
  },
  {
    name: "Centro",
    slug: "centro",
    intro:
      "El Centro de Montevideo concentra edificios y apartamentos con mucho recambio de inquilinos, así que armar muebles nuevos es algo frecuente. Vamos a tu edificio sobre 18 de Julio y alrededores y armamos lo que necesites sin que pierdas tiempo.",
    context:
      "Muchos edificios del Centro son antiguos, con ascensores chicos y pasillos angostos. Tenemos experiencia subiendo y armando muebles grandes pieza por pieza dentro del apartamento, así que un ropero o un placard que no entra armado en el ascensor lo montamos arriba sin problema.",
    highlights: [
      "Experiencia en edificios antiguos y ascensores chicos",
      "Armamos muebles grandes pieza por pieza dentro de la unidad",
      "Cobertura en microcentro y todo el eje de 18 de Julio",
      "Atención de lunes a sábado",
    ],
    faqs: [
      {
        q: "¿Suben muebles grandes por ascensores chicos en el Centro?",
        a: "Sí. Cuando el mueble no entra armado, subimos las piezas y lo armamos dentro del apartamento. Es habitual en los edificios antiguos de la zona.",
      },
      {
        q: "¿Atienden en el microcentro y sobre 18 de Julio?",
        a: "Sí, cubrimos todo el Centro y el eje de 18 de Julio. El traslado está incluido en el precio.",
      },
    ],
    nearby: ["cordon", "pocitos", "punta-carretas"],
  },
  {
    name: "Carrasco",
    slug: "carrasco",
    intro:
      "En Carrasco trabajamos sobre todo con casas amplias y muebles grandes: placares de varias puertas, comedores completos, bibliotecas y muebles de jardín. Llegamos con todas las herramientas y dejamos cada pieza nivelada y firme.",
    context:
      "Al ser una zona de casas, los trabajos suelen ser de mayor porte que en un apartamento: placares de 6 u 8 puertas, comedores de 6 a 8 sillas, bibliotecas de living y muebles de exterior. Por eso coordinamos el tiempo de trabajo por adelantado, así sabés con precisión cuánto va a demorar y organizás tu día.",
    highlights: [
      "Placares de 6 y 8 puertas",
      "Comedores de 6 a 8 sillas y bibliotecas de living",
      "Muebles de jardín y exterior",
      "Tiempo de trabajo coordinado por adelantado",
    ],
    faqs: [
      {
        q: "¿Arman placares de muchas puertas y comedores grandes en Carrasco?",
        a: "Sí, es lo más frecuente en la zona. Para placares de 6 u 8 puertas y comedores de 8 sillas te pasamos precio y tiempo estimado antes de empezar.",
      },
      {
        q: "¿Llegan a Carrasco y Carrasco Norte?",
        a: "Sí, cubrimos Carrasco con traslado incluido. Confirmanos la dirección al pedir el presupuesto.",
      },
    ],
    nearby: ["buceo", "pocitos", "ciudad-de-la-costa"],
  },
  {
    name: "Buceo",
    slug: "buceo",
    intro:
      "El Buceo creció con las torres nuevas cerca del World Trade Center y del puerto. Armamos muebles tanto en apartamentos a estrenar como en oficinas de la zona: escritorios, estanterías, racks, placares y mobiliario de home-office.",
    context:
      "Es un barrio con mucha actividad de oficinas y home-office además de vivienda. Armamos escritorios operativos, estanterías y muebles de oficina con la misma rapidez que en el hogar, y coordinamos con los edificios corporativos cuando hace falta acceso o aviso previo.",
    highlights: [
      "Muebles de oficina y home-office: escritorios operativos y estanterías",
      "Apartamentos a estrenar en las torres del WTC",
      "Racks de TV y placares para vivienda",
      "Coordinación con edificios corporativos",
    ],
    faqs: [
      {
        q: "¿Arman muebles de oficina en el Buceo?",
        a: "Sí. Montamos escritorios operativos, estaciones de trabajo y estanterías, tanto para oficinas como para home-office. Pedinos presupuesto con la cantidad de puestos.",
      },
      {
        q: "¿Trabajan en las torres nuevas cerca del World Trade Center?",
        a: "Sí, atendemos los apartamentos a estrenar de la zona y coordinamos con la administración del edificio el acceso si es necesario.",
      },
    ],
    nearby: ["pocitos", "carrasco", "punta-carretas"],
  },
  {
    name: "Ciudad de la Costa",
    slug: "ciudad-de-la-costa",
    city: "Canelones",
    extraTravelCharge: true,
    intro:
      "Ciudad de la Costa —Solymar, Lagomar, El Pinar, Shangrilá y alrededores— es una de las zonas que más crece del área metropolitana, con casas nuevas y familias que se mudan desde Montevideo. Vamos hasta tu casa, armamos roperos, camas, comedores y racks, y te dejamos todo nivelado y funcionando.",
    context:
      "En la zona predominan las casas, así que los trabajos suelen ser de mayor porte: dormitorios completos, placares grandes, comedores y muebles de jardín. Coordinamos la visita por adelantado para aprovechar el viaje y armar todo lo que necesites de una sola vez; si tenés varios muebles, te conviene juntarlos en una misma visita.",
    highlights: [
      "Cobertura en Solymar, Lagomar, El Pinar, Shangrilá y zonas cercanas",
      "Dormitorios completos y placares grandes en una visita",
      "Comedores, racks de TV y muebles de jardín",
      "Coordinación previa de día y hora para aprovechar el viaje",
    ],
    faqs: [
      {
        q: "¿A qué balnearios de Ciudad de la Costa llegan?",
        a: "Cubrimos Solymar, Lagomar, El Pinar, Shangrilá, San José de Carrasco y zonas cercanas de la Costa de Oro. Confirmanos tu dirección por WhatsApp y te decimos en el momento si llegamos.",
      },
      {
        q: "¿Conviene juntar varios muebles en una sola visita?",
        a: "Sí. Como el traslado es más largo que dentro de Montevideo, si juntás varios muebles en una misma visita el costo por mueble te queda más conveniente. Pasanos la lista y te cotizamos todo junto.",
      },
    ],
    nearby: ["carrasco"],
  },
];

