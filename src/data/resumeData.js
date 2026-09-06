import urlResume from "../assets/Santiago-salcedo-cv.pdf";

export const personalInfo = {
  fullName: "Santiago Dalmiro Salcedo",
  title: "Full Stack Developer | Desarrollador WordPress & AI Tooling",
  github: "github.com/SalcedoSantiago",
  githubUrl: "https://github.com/SalcedoSantiago",
  email: "santiagosalcedod@gmail.com",
  portfolio: "https://salcedosantiago.github.io/portfolio/",
  resumePdf: urlResume,
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Elevation",
    periodEn: "October 2022 — Present",
    periodEs: "Octubre 2022 — Presente",
    period: "October 2022 — Present",
    pointsEs: [
      "Utilicé Claude integrado con MCP para agilizar el desarrollo de WordPress, generando y modificando bloques Gutenberg, temas y plugins personalizados directamente sobre el entorno de desarrollo.",
      "Utilicé herramientas de desarrollo asistido por IA para la generación de código, debugging, documentación y prototipado rápido, mejorando la eficiencia del desarrollo y reduciendo los tiempos de entrega.",
      "Desarrollé soluciones escalables de gestión de contenido utilizando ACF (Advanced Custom Fields) y Nectar Theme. Extendí la funcionalidad de WordPress mediante integraciones de plugins personalizados y desarrollo de nuevas funcionalidades.",
      "Mejoré el rendimiento de los sitios web, los Core Web Vitals y la experiencia general del usuario mediante optimizaciones tanto de frontend como de backend.",
      "Mejoré el cumplimiento de estándares de accesibilidad mediante la implementación de buenas prácticas en múltiples proyectos.",
      "Trabajé en estrecha colaboración con diseñadores, transformando diseños de Figma en soluciones de WordPress escalables, mantenibles y fieles al diseño original.",
    ],
    points: [
      "Built scalable content-management solutions with ACF (Advanced Custom Fields) and the Nectar theme, extending WordPress through custom plugins and new features.",
      "Used Claude integrated with MCP to speed up WordPress development, generating and modifying Gutenberg blocks, custom themes and plugins directly in the dev environment.",
      "Improved site performance, Core Web Vitals and overall UX through frontend and backend optimizations.",
      "Turned Figma designs into scalable, maintainable and design-faithful WordPress solutions, while raising accessibility standards across projects.",
    ],
    stack: ["WordPress", "PHP", "Gutenberg", "ACF", "JavaScript", "Claude + MCP"],
  },
  {
    role: "Full Stack Developer",
    company: "QuadLayers",
    periodEn: "November 2020 — October 2022",
    periodEs: "Noviembre 2020 — Octubre 2022",
    period: "November 2020 — October 2022",
    pointsEs: [
      "Desarrollo de plugins de WordPress basados en Gutenberg para crear una plataforma avanzada de construcción de sitios web que sea más fácil de usar para usuarios no profesionales.",
      "Uso constante de JavaScript, ReactJs, jQuery, CSS, Sass y PHP.",
      "Personalización de temas Premium para que tengan el aspecto deseado por el cliente y el diseñador.",
      "Soporte y creación de múltiples plugins para WordPress.",
      "Personalizaciones de sitios WordPress para múltiples clientes y creaciones de sitios WordPress.",
      "Uso de múltiples librerías JavaScript y CSS (Chakra UI, Bootstrap, Tailwind, MUI).",
    ],
    points: [
      "Developed Gutenberg-based WordPress plugins to power an advanced, user-friendly website builder for non-technical users.",
      "Worked daily with JavaScript, React, jQuery, CSS, Sass and PHP, and customized premium themes to match client and designer requirements.",
      "Supported and built multiple WordPress plugins and delivered custom sites for a wide range of clients.",
      "Leveraged multiple JavaScript and CSS libraries such as Chakra UI, Bootstrap, Tailwind and MUI.",
    ],
    stack: ["WordPress", "React", "JavaScript", "jQuery", "Sass", "PHP"],
  },
];

export const education = [
  {
    degree: "Bachelor of Information Systems",
    institution: "Universidad Nacional de La Plata",
    period: "2019 — 2021 (unfinished)",
  },
  {
    degree: "Full Stack Career (MERN)",
    institution: "",
    period: "2021 — 2022",
  },
];

export const skillCategories = [
  {
    title: "AI Assisted Development",
    items: ["Cursor", "Claude Code", "ChatGPT", "GitHub Copilot"],
  },
  {
    title: "Programming Languages",
    items: [
      "HTML",
      "CSS/Scss",
      "PHP",
      "JavaScript",
      "Next.js",
      "Styled Components",
      "Node",
      "jQuery",
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: ["React"],
  },
  {
    title: "Tools & Platforms",
    items: ["WordPress", "Github", "Webpack", "Linux & Windows", "Figma"],
  },
];

export const skillIcons = {
  languages: [
    { title: "HTML", image: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { title: "CSS", image: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    {
      title: "SCSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    },
    { title: "JavaScript", image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { title: "PHP", image: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png" },
  ],
  libraries: [
    {
      title: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      title: "Nextjs",
      image: "https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png",
    },
    { title: "Node", image: "https://midu.dev/images/tags/node.png" },
    { title: "Chakra", image: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4" },
    {
      title: "Styled Components",
      image: "https://www.vectorlogo.zone/logos/styled-components/styled-components-icon.svg",
    },
    {
      title: "Tailwind",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    { title: "MUI", image: "https://mui.com/static/logo.png" },
    {
      title: "Bootstrap",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
    },
    {
      title: "Jquery",
      image: "https://blog.kakaocdn.net/dn/cP4qHo/btqCDkoCask/KeloVPIlvZQxDoOHw2x2r0/img.png",
    },
  ],
  aiTools: [
    {
      title: "Cursor",
      image: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cursor.png",
    },
    {
      title: "Claude Code",
      image: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png",
    },
    {
      title: "ChatGPT",
      image: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/openai.png",
    },
    {
      title: "GitHub Copilot",
      image: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/githubcopilot.png",
    },
    {
      title: "MCP",
      image: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/mcp.png",
    },
  ],
  tools: [
    { title: "Wordpress", image: "https://cdn-icons-png.flaticon.com/512/174/174881.png" },
    { title: "Github", image: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
    {
      title: "Figma",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      title: "Webpack",
      image: "https://seeklogo.com/images/W/webpack-logo-9E66EE203A-seeklogo.com.png",
    },
    {
      title: "NPM",
      image: "https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png",
    },
  ],
};
