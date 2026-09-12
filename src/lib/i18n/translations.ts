export type Locale = "en" | "es";

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Hero
    "hero.init": "Initializing ...",
    "hero.ideas": "Compiling ideas...",
    "hero.problems": "Solving problems...",
    "hero.music": "Playing good music...",
    "hero.ready": "Ready to create.",
    "hero.initialized": "Developer initialized.",
    "hero.title": "PORT[[folio]]",

    // Introducing
    "intro.title": "I'm [[Karla!]]",
    "intro.bio":
      "Passionate about programming and design, with a perfectionist focus on details and an analytical, problem-solving mindset.",

    // Experiencia
    "exp.title": "[[My]] Experience",

    // FeaturedWork
    "featured.title": "Featured [[Work]]",
    "featured.websites": "Websites",
    "featured.webapps": "Web Apps",
    "featured.personal": "Personal",
    "featured.comingSoon": "Personal projects coming soon.",
    "featured.loading": "Loading preview\u2026",
    "featured.cta": "Let's talk",
    "featured.ctaSub": "Go to contact",

    // Estudies
    "estudies.title": "My [[estudies]]",
    "estudies.certificate": "Certificate",

    // TechStack
    "tech.title": "My [[tech stack]]",

    // Contact
    "contact.title": "Get in [[Touch]]",
    "contact.desc":
      "I'd love to hear from you. Whether you have a question, a project idea, or just want to say hello \u2014 feel free to reach out!",

    // Menu
    "menu.home": "home",
    "menu.about": "about",
    "menu.techstack": "tech stack",
    "menu.projects": "projects",
    "menu.experience": "experience",
    "menu.estudies": "estudies",
    "menu.contact": "contact",

    // Aria
    "aria.home": "Home",
    "aria.about": "About",
    "aria.techstack": "Tech Stack",
    "aria.projects": "Projects",
    "aria.experience": "Experience",
    "aria.estudies": "Estudies",
    "aria.contact": "Contact",
    "aria.toggleNav": "Toggle navigation",
    "aria.mainNav": "Main navigation",
    "aria.logo": "Logo",
    "aria.themeLight": "Switch to light mode",
    "aria.themeDark": "Switch to dark mode",
    "aria.langToggle": "Toggle language",

    // Experience data
    "exp.rubidex.title": "Frontend & Mobile Developer",
    "exp.rubidex.desc":
      "Develop web and mobile products across multiple projects within the company.",
    "exp.rubidex.b0":
      "Build corporate websites with Next.js + Strapi, using SSR, SSG, dynamic routes, and optimized images.",
    "exp.rubidex.b1":
      "Develop the RubiVault web app with React + TypeScript, reusable components, and global state with Zustand.",
    "exp.rubidex.b2":
      "Integrate REST APIs and handle asynchronous application states.",
    "exp.rubidex.b3":
      "Develop the RubiVault iOS app in SwiftUI: navigation, state management, and Codable data models.",
    "exp.rubidex.b4": "Ship features end-to-end across web and mobile.",

    "exp.kachi.title": "Co-Founder & Product Lead",
    "exp.kachi.desc":
      "Co-founded an educational platform focused on teaching and preserving indigenous Mexican languages through interactive experiences.",
    "exp.kachi.b0": "Defined product strategy and roadmap.",
    "exp.kachi.b1":
      "Coordinated the development team and tracked tasks in Jira.",
    "exp.kachi.b2":
      "Built the initial product in SwiftUI and supported the migration to Unity.",
    "exp.kachi.b3": "Defined product features and user flows.",
    "exp.kachi.b4": "Collaborated across development, design, and product.",

    "exp.leap.title": "Full Stack Developer",
    "exp.leap.desc":
      "Contributed to the development and modernization of enterprise web platforms.",
    "exp.leap.b0":
      "Migrated monolithic applications to a React-based architecture.",
    "exp.leap.b1": "Developed reusable and scalable UI components.",
    "exp.leap.b2": "Built internal web platforms and tools.",
    "exp.leap.b3":
      "Implemented dynamic interfaces and state management across frontend and backend.",
    "exp.leap.b4": "Collaborated with design and product teams.",

    "exp.competitions.title": "Innovation Competitions",
    "exp.competitions.desc":
      "Participated in technology and entrepreneurship competitions focused on developing solutions for real-world challenges.",
    "exp.competitions.b0": "1st Place \u2014 FES Acatl\u00e1n Local Hackathon",
    "exp.competitions.b1": "Changemakers Social Challenge CDMX \u2014 Kachi",
    "exp.competitions.b2":
      "Led multidisciplinary teams through ideation, prototyping, and product development.",

    "exp.education.title": "Mathematics and Applied Computing",
    "exp.education.desc":
      "Built a strong foundation in programming, algorithms, mathematical modeling, and computational problem-solving.",

    // Certification data
    "cert.diplomado-web.title":
      "Diploma Program in Website Development and Optimization",
    "cert.diplomado-web.desc":
      "Intensive training in full stack web development: frontend, backend, deployment, and best practices.",
    "cert.diplomado-web.status": "In Progress",
    "cert.diplomado-web.badge": "Diploma Program",

    "cert.licenciatura.title": "Mathematics and Applied Computing",
    "cert.licenciatura.desc":
      "Strong foundation in mathematics, algorithms, computational modeling, and problem solving.",
    "cert.licenciatura.status": "Certificated",
    "cert.licenciatura.badge": "Degree",

    "cert.mujer-digital.title": "Program Mujer Digital",
    "cert.mujer-digital.desc":
      "Technology training program for women: building digital skills and mentorship.",
    "cert.mujer-digital.status": "Certificated",
    "cert.mujer-digital.badge": "Program Mujer Digital",

    "cert.cursos-ios.title": "iOS Development Courses",
    "cert.cursos-ios.desc":
      "Specialized iOS development courses with SwiftUI: navigation, state management, data, and Apple frameworks.",
    "cert.cursos-ios.status": "Certificated",
    "cert.cursos-ios.badge": "iOS Courses",
  },

  es: {
    // Hero
    "hero.init": "Inicializando ...",
    "hero.ideas": "Compilando ideas...",
    "hero.problems": "Resolviendo problemas...",
    "hero.music": "Escuchando buena m\u00fasica...",
    "hero.ready": "Lista para crear.",
    "hero.initialized": "Desarrolladora inicializada.",
    "hero.title": "PORTA[[folio]]",

    // Introducing
    "intro.title": "\u00a1Soy [[Karla!]]",
    "intro.bio":
      "Apasionada por la programaci\u00f3n y el dise\u00f1o, con enfoque perfeccionista en los detalles y una mentalidad anal\u00edtica para resolver problemas.",

    // Experiencia
    "exp.title": "[[Mi]] Experiencia",

    // FeaturedWork
    "featured.title": "Proyectos [[Destacados]]",
    "featured.websites": "Sitios Web",
    "featured.webapps": "Apps Web",
    "featured.personal": "Personal",
    "featured.comingSoon": "Proyectos personales pr\u00f3ximamente.",
    "featured.loading": "Cargando vista previa\u2026",
    "featured.cta": "Hablemos",
    "featured.ctaSub": "Ir a contacto",

    // Estudies
    "estudies.title": "Mis [[estudios]]",
    "estudies.certificate": "Certificado",

    // TechStack
    "tech.title": "Mi [[stack tecnol\u00f3gico]]",

    // Contact
    "contact.title": "Ponte en [[Contacto]]",
    "contact.desc":
      "\u00a1Me encantar\u00eda saber de ti! Ya sea que tengas una pregunta, una idea de proyecto, o simplemente quieras saludar \u2014 \u00a1no dudes en escribirme!",

    // Menu
    "menu.home": "inicio",
    "menu.about": "sobre m\u00ed",
    "menu.techstack": "stack tecnol\u00f3gico",
    "menu.projects": "proyectos",
    "menu.experience": "experiencia",
    "menu.estudies": "estudios",
    "menu.contact": "contacto",

    // Aria
    "aria.home": "Inicio",
    "aria.about": "Sobre m\u00ed",
    "aria.techstack": "Stack Tecnol\u00f3gico",
    "aria.projects": "Proyectos",
    "aria.experience": "Experiencia",
    "aria.estudies": "Estudios",
    "aria.contact": "Contacto",
    "aria.toggleNav": "Alternar navegaci\u00f3n",
    "aria.mainNav": "Navegaci\u00f3n principal",
    "aria.logo": "Logo",
    "aria.themeLight": "Cambiar a modo claro",
    "aria.themeDark": "Cambiar a modo oscuro",
    "aria.langToggle": "Cambiar idioma",

    // Experience data
    "exp.rubidex.title": "Desarrolladora Frontend & M\u00f3vil",
    "exp.rubidex.desc":
      "Desarrollo de productos web y m\u00f3viles en m\u00fAltiples proyectos de la empresa.",
    "exp.rubidex.b0":
      "Construcci\u00f3n de sitios web corporativos con Next.js + Strapi, usando SSR, SSG, rutas din\u00e1micas e im\u00e1genes optimizadas.",
    "exp.rubidex.b1":
      "Desarrollo de la app web RubiVault con React + TypeScript, componentes reutilizables y estado global con Zustand.",
    "exp.rubidex.b2":
      "Integraci\u00f3n de APIs REST y manejo de estados as\u00edncronos en aplicaciones.",
    "exp.rubidex.b3":
      "Desarrollo de la app iOS RubiVault en SwiftUI: navegaci\u00f3n, gesti\u00f3n de estado y modelos de datos con Codable.",
    "exp.rubidex.b4":
      "Entrega de funcionalidades de extremo a extremo en web y m\u00f3vil.",

    "exp.kachi.title": "Cofundadora & Líder de Producto",
    "exp.kachi.desc":
      "Cofund\u00e9 una plataforma educativa enfocada en ense\u00f1ar y preservar las lenguas ind\u00edgenas mexicanas a trav\u00e9s de experiencias interactivas.",
    "exp.kachi.b0":
      "Definici\u00f3n de estrategia y hoja de ruta del producto.",
    "exp.kachi.b1":
      "Coordinaci\u00f3n del equipo de desarrollo y seguimiento de tareas en Jira.",
    "exp.kachi.b2":
      "Construcci\u00f3n del producto inicial en SwiftUI y soporte de la migraci\u00f3n a Unity.",
    "exp.kachi.b3": "Definici\u00f3n de funcionalidades y flujos de usuario.",
    "exp.kachi.b4":
      "Colaboraci\u00f3n entre desarrollo, dise\u00f1o y producto.",

    "exp.leap.title": "Desarrolladora Full Stack",
    "exp.leap.desc":
      "Contribuci\u00f3n al desarrollo y modernizaci\u00f3n de plataformas web empresariales.",
    "exp.leap.b0":
      "Migraci\u00f3n de aplicaciones monol\u00edticas a una arquitectura basada en React.",
    "exp.leap.b1": "Desarrollo de componentes UI reutilizables y escalables.",
    "exp.leap.b2":
      "Construcci\u00f3n de plataformas y herramientas web internas.",
    "exp.leap.b3":
      "Implementaci\u00f3n de interfaces din\u00e1micas y gesti\u00f3n de estado en frontend y backend.",
    "exp.leap.b4": "Colaboraci\u00f3n con equipos de dise\u00f1o y producto.",

    "exp.competitions.title": "Competencias de Innovaci\u00f3n",
    "exp.competitions.desc":
      "Participaci\u00f3n en competencias de tecnolog\u00eda y emprendimiento enfocadas en desarrollar soluciones para desaf\u00edos del mundo real.",
    "exp.competitions.b0": "1er Lugar \u2014 Hackathon Local FES Acatl\u00e1n",
    "exp.competitions.b1": "Changemakers Social Challenge CDMX \u2014 Kachi",
    "exp.competitions.b2":
      "Liderazgo de equipos multidisciplinarios en ideaci\u00f3n, prototipado y desarrollo de producto.",

    "exp.education.title": "Matem\u00e1ticas y Computaci\u00f3n Aplicada",
    "exp.education.desc":
      "Formaci\u00f3n s\u00f3lida en programaci\u00f3n, algoritmos, modelado matem\u00e1tico y resoluci\u00f3n de problemas computacionales.",

    // Certification data
    "cert.diplomado-web.title":
      "Diplomado en Desarrollo y Optimizaci\u00f3n de Sitios Web",
    "cert.diplomado-web.desc":
      "Capacitaci\u00f3n intensiva en desarrollo web full stack: frontend, backend, despliegue y mejores pr\u00e1cticas.",
    "cert.diplomado-web.status": "En progreso",
    "cert.diplomado-web.badge": "Diplomado Web",

    "cert.licenciatura.title": "Matem\u00e1ticas Aplicadas y Computaci\u00f3n",
    "cert.licenciatura.desc":
      "Base s\u00f3lida en matem\u00e1ticas, algoritmos, modelado computacional y resoluci\u00f3n de problemas.",
    "cert.licenciatura.status": "Certificada",
    "cert.licenciatura.badge": "Licenciatura",

    "cert.mujer-digital.title": "Programa Mujer Digital",
    "cert.mujer-digital.desc":
      "Programa de capacitaci\u00f3n tecnol\u00f3gica para mujeres: construcci\u00f3n de habilidades digitales y mentor\u00eda.",
    "cert.mujer-digital.status": "Certificada",
    "cert.mujer-digital.badge": "Mujer Digital",

    "cert.cursos-ios.title": "Cursos de Desarrollo iOS",
    "cert.cursos-ios.desc":
      "Cursos especializados en desarrollo iOS con SwiftUI: navegaci\u00f3n, gesti\u00f3n de estado, datos y frameworks de Apple.",
    "cert.cursos-ios.status": "Certificada",
    "cert.cursos-ios.badge": "Cursos iOS",
  },
};
