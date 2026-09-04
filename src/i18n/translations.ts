export type Lang = "es" | "en";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

const es = {
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    skills: "Certificaciones",
    contact: "Contacto",
    cta: "Trabajemos juntos",
  },
  hero: {
    role: "Frontend Developer · React & React Native",
    bio: "Desarrollo aplicaciones web y móviles enfocadas en rendimiento, escalabilidad y experiencia de usuario.",
    location: "Cali, Colombia",
    viewProjects: "Ver proyectos",
    contact: "Contacto",
    highlights: [
      "App web y móvil con un mismo stack",
      "UX como prioridad",
      "Rendimiento y escalabilidad",
    ],
  },
  about: {
    title: "Sobre mí",
    subtitle: "Desarrollador frontend apasionado por crear productos digitales",
    p1: "Soy desarrollador frontend enfocado en la creación de aplicaciones modernas con React y React Native.",
    p2: "Me especializo en construir interfaces escalables, mantenibles y orientadas al rendimiento. Trabajo con un mismo stack tecnológico para desarrollo web y móvil, lo que permite entregar productos consistentes y de alta calidad.",
    p3: "He trabajado en proyectos donde la arquitectura, la experiencia de usuario y la integración con servicios como Supabase generan valor real.",
    p4: "Actualmente busco crecer en arquitectura frontend y desarrollo de productos digitales con impacto real.",
    stackTitle: "Algunas habilidades",
  },
  experience: {
    title: "Trayectoria profesional",
    subtitle: "Mi recorrido construyendo productos digitales",
    items: [
      {
        role: "Junior Developer",
        company: "ST&T LTDA",
        period: "mar. 2026 — actualidad",
        location: "Colombia · En remoto",
        points: [
          "Desarrollo componentes web modulares y reutilizables con Vue.js y TypeScript, asegurando coherencia visual y funcional con los diseños UX/UI definidos por el equipo de producto.",
          "Implemento funciones serverless en AWS Lambda para procesamiento de datos en tiempo real, automatización de pipelines ETL y reducción de costos operativos de infraestructura.",
          "Implemento pruebas automatizadas con frameworks como Jest y Vitest, integrándolas al pipeline de CI/CD para detección temprana de regresiones en cada pull request.",
        ],
      },
      {
        role: "Ingeniero de software",
        company: "Proyecto personal",
        period: "jun. 2025 — mar. 2026",
        location: "Colombia · En remoto",
        points: [
          "Implementé microservicios serverless en AWS Lambda integrados con API Gateway, reduciendo costos de infraestructura y tiempos de respuesta de las APIs.",
          "Configuré y gestioné recursos AWS (IAM, EC2, S3), aplicando buenas prácticas de seguridad: roles mínimos necesarios, políticas IAM específicas y cifrado en S3.",
          "Automaticé flujos de despliegue continuo (CI/CD) usando pipelines para pruebas, build y deployment, disminuyendo errores en producción y acelerando entregas.",
        ],
      },
      {
        role: "Desarrollador SIG/Python",
        company: "Electroingeniería S.A.S.",
        period: "ene. 2025 — feb. 2026",
        location: "Tuluá, Valle del Cauca, Colombia · Presencial",
        points: [
          "Lideré equipo de 5 personas en recolección de datos de campo, desarrollando herramientas Python/ArcPy y pipelines ETL que automatizaron geoprocesos, optimizando la eficiencia operativa en 40%.",
          "Coordiné el desarrollo de dashboards geoespaciales en ArcGIS/QGIS, habilitando la toma de decisiones estratégicas mediante análisis automatizado de datos de campo.",
          "Implementé soluciones ETL para extracción/transformación/carga de datos geoespaciales, reduciendo el tiempo de procesamiento manual de 3 días a 4 horas.",
        ],
      },
      {
        role: "Desarrollador Front-end & UI/UX Designer",
        company: "GLV services sas",
        period: "nov. 2023 — abr. 2024",
        location: "Colombia · Presencial",
        points: [
          "Diseñé wireframes y prototipos en Figma para procesos colaborativos, agilizando la transferencia diseño-desarrollo en 30% y la coherencia visual.",
          "Optimicé el SEO de WordPress optimizando contenido, metadatos y estructura, aumentando la visibilidad y el tráfico orgánico en 25%.",
          "Lideré el desarrollo de interfaces intuitivas UX/UI, equilibrando estética y funcionalidad para mejorar la experiencia de usuario en productos digitales.",
          "Implementé patrones de diseño de software, mejorando la escalabilidad y mantenibilidad de las aplicaciones web.",
        ],
      },
      {
        role: "Desarrollador de software",
        company: "Binary House",
        period: "nov. 2021 — jun. 2022",
        location: "Colombia · En remoto",
        points: [
          "Desarrollé aplicaciones web escalables con React + Tailwind, acelerando la implementación y creando interfaces dinámicas y responsivas.",
          "Creé prototipos en Figma para las fases de diseño y desarrollo, alineando las necesidades del usuario con los objetivos del proyecto.",
          "Optimicé el rendimiento con lazy loading y minificación, reduciendo los tiempos de carga y mejorando la experiencia de usuario.",
          "Gestioné Git para el control de versiones, asegurando código limpio y entregas continuas en equipo.",
        ],
      },
    ],
  },
  education: {
    title: "Formación académica",
    subtitle: "Educación y certificaciones que respaldan mi perfil",
    items: [
      {
        degree: "Ingeniería de Software",
        institution: "UNIMINUTO Colombia",
        period: "ago. 2024 — ago. 2030",
        type: "Pregrado · En curso",
      },
      {
        degree: "Especialización en Flutter",
        institution: "San Ignacio University - Miami",
        period: "abr. 2025",
        type: "Especialización",
      },
      {
        degree: "Tecnología en Sistemas de la Información",
        institution: "Universidad del Valle (CO)",
        period: "feb. 2019 — dic. 2024",
        type: "Tecnólogo",
      },
      {
        degree: "Tecnología en Sistemas de Gestión Ambiental",
        institution: "Servicio Nacional de Aprendizaje (SENA)",
        period: "2017 — 2020",
        type: "Tecnólogo",
      },
    ],
  },
  tech: {
    title: "Tech Stack",
    subtitle: "Tecnologías con las que trabajo día a día",
    categories: [
      { name: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript"] },
      { name: "UI y Animaciones", items: ["Material UI", "Framer Motion", "Expo"] },
      { name: "Backend y Bases de datos", items: ["Supabase", "Node.js", "REST APIs"] },
      { name: "Herramientas", items: ["Git", "Vercel", "Expo CLI", "VS Code"] },
      { name: "Metodologías", items: ["Scrum", "Kanban", "Mobile-first"] },
    ],
  },
  languages: {
    title: "Idiomas",
    subtitle: "Idiomas que manejo",
    items: [
      { name: "Español", level: "Nativo", levelKey: "native" },
      { name: "Inglés", level: "Intermedio (B1)", levelKey: "intermediate" },
    ],
  },
  certifications: {
    title: "Certificaciones",
    subtitle: "Credenciales que respaldan mis habilidades",
    all: "Todas",
  },
  projectsPage: {
    title: "Proyectos",
    subtitle: "Proyectos clave y arquitecturas",
    github: "GitHub",
    demo: "Demo",
  },
  projects: {
    barberrank: {
      description:
        "Plataforma móvil para la gestión de citas y fidelización de clientes en barberías: reservas, agenda del barbero, perfiles de cliente y recordatorios automáticos para mejorar la retención.",
      impact:
        "Centraliza las reservas diarias de la barbería y mejora la retención con recordatorios y seguimiento de clientes.",
    },
    gymops: {
      description:
        "SaaS web para la gestión integral de academias de artes marciales y gimnasios: estudiantes, membresías, pagos y recibos, finanzas, inventario, consentimientos con firma digital y comunicaciones por WhatsApp.",
      impact: "Automatiza la operación diaria y el control financiero de la academia, desde el registro del estudiante hasta el recibo de pago.",
    },
    mealprep: {
      description:
        "App móvil de planificación de comidas que registra los ingredientes de tu nevera, gestiona recetas y sugiere qué preparar con lo que tienes, incluyendo lista de compras y plantillas para IA.",
      impact: "Reduce el desperdicio de alimentos y el tiempo de decisión convirtiendo tu nevera en recomendaciones.",
    },
    planify: {
      description:
        "Gestor financiero personal con cuentas, transacciones, presupuestos, deudas y metas. Funciona offline con SQLite, sincroniza con la nube y exporta reportes en CSV y PDF.",
      impact: "Centraliza tus finanzas personales en un solo lugar, incluso sin conexión.",
    },
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto o una oportunidad? Estoy disponible para colaborar.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar mensaje",
    sending: "Enviando...",
    success: "Mensaje enviado correctamente",
    error: "Error al enviar el mensaje",
    emailLine: "También puedes escribirme a:",
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
};

export type Dict = Widen<typeof es>;
const en: Dict = {
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Certifications",
    contact: "Contact",
    cta: "Let's work together",
  },
  hero: {
    role: "Frontend Developer · React & React Native",
    bio: "I build web and mobile applications focused on performance, scalability and user experience.",
    location: "Cali, Colombia",
    viewProjects: "View projects",
    contact: "Contact",
    highlights: [
      "Web & mobile with one stack",
      "UX first",
      "Performance & scalability",
    ],
  },
  about: {
    title: "About me",
    subtitle: "Frontend developer passionate about building digital products",
    p1: "I'm a frontend developer focused on building modern applications with React and React Native.",
    p2: "I specialize in building scalable, maintainable and performance-driven interfaces. I work with a single tech stack for web and mobile, delivering consistent, high-quality products.",
    p3: "I've worked on projects where architecture, user experience and integration with services like Supabase create real value.",
    p4: "I'm currently looking to grow in frontend architecture and build digital products with real impact.",
    stackTitle: "Some skills",
  },
  experience: {
    title: "Professional experience",
    subtitle: "My journey building digital products",
    items: [
      {
        role: "Junior Developer",
        company: "ST&T LTDA",
        period: "Mar 2026 — Present",
        location: "Colombia · Remote",
        points: [
          "Building modular, reusable web components with Vue.js and TypeScript, ensuring visual and functional consistency with the UX/UI designs defined by the product team.",
          "Implementing serverless functions on AWS Lambda for real-time data processing, ETL pipeline automation and lower infrastructure operating costs.",
          "Implementing automated tests with frameworks like Jest and Vitest, integrating them into the CI/CD pipeline for early regression detection on every pull request.",
        ],
      },
      {
        role: "Software Engineer",
        company: "Personal project",
        period: "Jun 2025 — Mar 2026",
        location: "Colombia · Remote",
        points: [
          "Implemented serverless microservices on AWS Lambda integrated with API Gateway, reducing infrastructure costs and API response times.",
          "Configured and managed AWS resources (IAM, EC2, S3) applying security best practices: least-privilege roles, specific IAM policies and S3 encryption.",
          "Automated continuous deployment (CI/CD) using pipelines for testing, build and deployment, reducing production errors and speeding up releases.",
        ],
      },
      {
        role: "GIS/Python Developer",
        company: "Electroingeniería S.A.S.",
        period: "Jan 2025 — Feb 2026",
        location: "Tuluá, Valle del Cauca, Colombia · On-site",
        points: [
          "Led a 5-person team in field data collection, building Python/ArcPy tools and ETL pipelines that automated geoprocessing, optimizing operational efficiency by 40%.",
          "Coordinated the development of geospatial dashboards in ArcGIS/QGIS, enabling strategic decision-making through automated field data analysis.",
          "Implemented ETL solutions for extraction/transformation/loading of geospatial data, reducing manual processing time from 3 days to 4 hours.",
        ],
      },
      {
        role: "Front-end Developer & UI/UX Designer",
        company: "GLV services sas",
        period: "Nov 2023 — Apr 2024",
        location: "Colombia · On-site",
        points: [
          "Designed wireframes and Figma prototypes for collaborative processes, speeding up the design-development handoff by 30% and improving visual consistency.",
          "Optimized WordPress SEO by improving content, metadata and structure, increasing visibility and organic traffic by 25%.",
          "Led the development of intuitive UX/UI interfaces, balancing aesthetics and functionality to improve the user experience of digital products.",
          "Implemented software design patterns, improving the scalability and maintainability of web applications.",
        ],
      },
      {
        role: "Software Developer",
        company: "Binary House",
        period: "Nov 2021 — Jun 2022",
        location: "Colombia · Remote",
        points: [
          "Built scalable web applications with React + Tailwind, speeding up implementation and creating dynamic, responsive interfaces.",
          "Created Figma prototypes for the design and development phases, aligning user needs with project goals.",
          "Optimized performance with lazy loading and minification, reducing load times and improving the user experience.",
          "Managed Git for version control, ensuring clean code and continuous team deliveries.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    subtitle: "Education and certifications behind my profile",
    items: [
      {
        degree: "Software Engineering",
        institution: "UNIMINUTO Colombia",
        period: "Aug 2024 — Aug 2030",
        type: "Undergraduate · In progress",
      },
      {
        degree: "Specialization in Flutter",
        institution: "San Ignacio University - Miami",
        period: "Apr 2025",
        type: "Specialization",
      },
      {
        degree: "Information Systems Technology",
        institution: "Universidad del Valle (CO)",
        period: "Feb 2019 — Dec 2024",
        type: "Technologist",
      },
      {
        degree: "Environmental Management Systems Technology",
        institution: "Servicio Nacional de Aprendizaje (SENA)",
        period: "2017 — 2020",
        type: "Technologist",
      },
    ],
  },
  tech: {
    title: "Tech Stack",
    subtitle: "Technologies I work with every day",
    categories: [
      { name: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript"] },
      { name: "UI & Animations", items: ["Material UI", "Framer Motion", "Expo"] },
      { name: "Backend & Databases", items: ["Supabase", "Node.js", "REST APIs"] },
      { name: "Tools", items: ["Git", "Vercel", "Expo CLI", "VS Code"] },
      { name: "Methodologies", items: ["Scrum", "Kanban", "Mobile-first"] },
    ],
  },
  languages: {
    title: "Languages",
    subtitle: "Languages I speak",
    items: [
      { name: "Spanish", level: "Native", levelKey: "native" },
      { name: "English", level: "Intermediate (B1)", levelKey: "intermediate" },
    ],
  },
  certifications: {
    title: "Certifications",
    subtitle: "Credentials that back my skills",
    all: "All",
  },
  projectsPage: {
    title: "Projects",
    subtitle: "Key projects and architectures",
    github: "GitHub",
    demo: "Demo",
  },
  projects: {
    barberrank: {
      description:
        "Mobile platform for appointment management and customer loyalty in barbershops: online bookings, barber schedules, customer profiles and automatic reminders to boost retention.",
      impact:
        "Centralizes the barbershop's daily bookings and improves retention with reminders and customer follow-up.",
    },
    gymops: {
      description:
        "Web SaaS for the end-to-end management of martial arts academies and gyms: students, memberships, payments and receipts, finances, inventory, consent forms with digital signatures and WhatsApp communications.",
      impact: "Automates daily operations and financial control, from student registration to the payment receipt.",
    },
    mealprep: {
      description:
        "Meal-planning mobile app that tracks the ingredients in your fridge, manages recipes and suggests what to cook with what you have, including a shopping list and AI templates.",
      impact: "Reduces food waste and decision time by turning your fridge into recipe recommendations.",
    },
    planify: {
      description:
        "Personal finance manager with accounts, transactions, budgets, debts and goals. Works offline with SQLite, syncs to the cloud and exports CSV and PDF reports.",
      impact: "Keeps your personal finances in one place, even offline.",
    },
  },
  contact: {
    title: "Contact",
    subtitle: "Have a project or an opportunity? I'm available to collaborate.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    sending: "Sending...",
    success: "Message sent successfully",
    error: "Error sending the message",
    emailLine: "You can also contact me at:",
  },
  footer: {
    rights: "All rights reserved.",
  },
};

export const translations: Record<Lang, Dict> = { es, en };