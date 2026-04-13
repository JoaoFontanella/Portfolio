export const portfolioContent = {
  "pt-BR": {
    navbar: {
      links: {
        home: "Início",
        about: "Sobre",
        skills: "Skills",
        projects: "Projetos",
        contact: "Contato",
        experience: "Experiência",
      },
      themeLabel: "Tema",
      languageLabel: "Idioma",
      languageOptions: {
        ptBR: "PT-BR",
        enUS: "EN-US",
      },
      themeToggle: {
        light: "Ativar modo claro",
        dark: "Ativar modo escuro",
        lightTitle: "Modo claro",
        darkTitle: "Modo escuro",
      },
      menuLabel: "Abrir menu de navegação",
    },
    hero: {
      eyebrow: "Portfólio / front-end",
      title: "João Fontanella",
      subtitle: "Desenvolvedor focado em aplicações web",
      description:
        "Utilizando React como principal framework tenho experiência acadêmica criando sistemas com integração de APIs e bancos de dados relacionais como PostgreSQL e MySQL.",
      primaryAction: "Ver projetos",
      secondaryAction: "Experiência",
    },
    about: {
      eyebrow: "Sobre",
      title: "Sobre mim",
      paragraphs: [
        "Sou estudante de Engenharia de Software na UNISATC e desenvolvedor em início de carreira. Tenho experiência com JavaScript, React, Node.js, HTML e CSS, além de trabalhar com APIs REST e integração com bancos de dados como PostgreSQL e MySQL.",
        "Ao longo dos meus projetos acadêmicos e pessoais, venho desenvolvendo aplicações completas com foco em boas práticas de código, interfaces responsivas e organização de arquitetura. Também possuo experiência com ferramentas como Git, GitHub, Docker e plataformas de deploy como Vercel, Railway e Render.",
        "Atualmente busco minha primeira oportunidade profissional como desenvolvedor, onde eu possa evoluir tecnicamente, contribuir em projetos reais e crescer em um ambiente colaborativo.",
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Tecnologias",
    },
    projects: {
      eyebrow: "Portfólio",
      title: "Projetos",
      privateRepo: "Repositório privado",
      publicRepo: "Repositório público",
      team: "Em equipe",
      solo: "Individual",
      code: "Código",
      deploy: "Deploy",
      items: [
        {
          name: "D'Oliva E-commerce",
          desc: "Plataforma de e-commerce desenvolvida em equipe para venda de cosméticos, com autenticação de usuários, catálogo de produtos e chatbot com IA.",
          tech: ["React", "PHP", "PostgreSQL", "Figma", "Git"],
          github: "#projects",
          deploy: null,
          team: true,
          repoPrivate: true,
        },
        {
          name: "Plataforma de Assinaturas",
          desc: "Aplicação web com sistema de assinaturas mensal e anual para liberação de conteúdo exclusivo. Desenvolvido com integração de API do Mercado Pago para processamento de pagamentos.",
          tech: ["React", "Node.js", "PostgreSQL"],
          github: null,
          deploy: null,
          team: false,
          repoPrivate: true,
        },
        {
          name: "Projeto Banco de Dados II",
          desc: "Projeto acadêmico de modelagem e consultas SQL em banco de dados relacional, com um pequeno CRUD em Python para realização de operações básicas.",
          tech: ["Python", "PostgreSQL", "Git"],
          github: "https://github.com/JoaoFontanella/ABP_Banco_de_dados_II",
          deploy: null,
          team: false,
          repoPrivate: false,
        },
        {
          name: "Portfólio",
          desc: "Aplicação web desenvolvida em React para apresentação profissional de projetos, habilidades e contatos. Atualmente um dos únicos projetos com deploy, hospedado no Vercel.",
          tech: ["React", "Vercel", "Git"],
          github: "https://github.com/JoaoFontanella/Portfolio",
          deploy: "https://fontanella-portfolio.vercel.app",
          team: false,
          repoPrivate: false,
        },
        {
          name: "ContaComigo",
          desc: "Aplicação mobile desenvolvida em equipe com foco em organização financeira pessoal, permitindo o controle de contas, despesas e gestão de informações do usuário de forma prática e intuitiva.",
          tech: ["React", "Git"],
          github: "https://github.com/weslainesantana/ContaComigo",
          deploy: null,
          team: true,
          repoPrivate: false,
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Entre em contato",
      email: "joaofontanella31@gmail.com",
    },
    experience: {
      eyebrow: "Trajetória",
      title: "Experiência",
      description:
        "Formação, atuação técnica e certificados que sustentam a base do meu desenvolvimento profissional.",
      educationTitle: "🎓 Formação",
      educationItems: [
        {
          title: "Técnico em Informática integrado ao Ensino Médio",
          description:
            "Formação técnica concluída no CEDUP em 4 anos, integrada ao ensino médio, com foco em informática, suporte técnico, manutenção de computadores, lógica de programação e fundamentos de desenvolvimento de sistemas.",
        },
        {
          title: "Engenharia de Software",
          description:
            "Graduação em andamento na UniSATC, atualmente cursando a 6ª fase e no último ano da formação, desenvolvendo conhecimentos em desenvolvimento de software, banco de dados, arquitetura de sistemas, APIs e práticas modernas da engenharia de software.",
        },
      ],
      workTitle: "💼 Experiência",
      workItems: [
        {
          title: "Assistente Técnico",
          description:
            "Mais de 4 anos de experiência na área de suporte técnico, com atuação em montagem, manutenção e configuração de computadores e notebooks, atendimento remoto e presencial a clientes, diagnóstico e resolução de problemas em sistemas Windows, além de conhecimentos em redes e uso de ferramentas especializadas para análise, reparo e otimização de sistemas.",
        },
      ],
      certificatesTitle: "📜 Certificados",
      certificates: [
        {
          title: "Desenvolvedor de Software",
          institution: "Unisatc",
          hours: "480h",
          year: "2025",
          link: "https://drive.google.com/file/d/1DnOEjjNnuEuG7cj9yvUa1tQfIlUKepfT/view?usp=sharing",
        },
        {
          title: "Analista em Requisitos de Software",
          institution: "Unisatc",
          hours: "400h",
          year: "2025",
          link: "https://drive.google.com/file/d/1s0IwtsY5BD2wc_ZjMcjfslZ8CJq-p0Hd/view?usp=sharing",
        },
      ],
      certificateLink: "Ver certificado",
    },
    footer: {
      brandDescription:
        "Desenvolvedor front-end com foco em interfaces elegantes, experiências responsivas e projetos com boa arquitetura visual.",
      mapLabel: "Mapa",
      contactLabel: "Contato",
      emailLabel: "E-mail",
      bottomRights: "© 2026 João Fontanella. Todos os direitos reservados.",
      bottomStack: "Feito com React, Vite e framer-motion.",
    },
  },
  "en-US": {
    navbar: {
      links: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        experience: "Experience",
      },
      themeLabel: "Theme",
      languageLabel: "Language",
      languageOptions: {
        ptBR: "PT-BR",
        enUS: "EN-US",
      },
      themeToggle: {
        light: "Enable light mode",
        dark: "Enable dark mode",
        lightTitle: "Light mode",
        darkTitle: "Dark mode",
      },
      menuLabel: "Open navigation menu",
    },
    hero: {
      eyebrow: "Portfolio / front-end",
      title: "João Fontanella",
      subtitle: "Developer focused on web applications",
      description:
        "Using React as my main framework, I have academic experience building systems with API integrations and relational databases such as PostgreSQL and MySQL.",
      primaryAction: "View projects",
      secondaryAction: "Experience",
    },
    about: {
      eyebrow: "About",
      title: "About me",
      paragraphs: [
        "I am a Software Engineering student at UNISATC and a developer early in my career. I have experience with JavaScript, React, Node.js, HTML and CSS, as well as working with REST APIs and integrating databases such as PostgreSQL and MySQL.",
        "Across my academic and personal projects, I have been building complete applications with a focus on code quality, responsive interfaces, and solid architecture. I also have experience with tools such as Git, GitHub, Docker, and deployment platforms like Vercel, Railway, and Render.",
        "I am currently looking for my first professional opportunity as a developer, where I can grow technically, contribute to real projects, and evolve in a collaborative environment.",
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Technologies",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Projects",
      privateRepo: "Private repository",
      publicRepo: "Public repository",
      team: "Team project",
      solo: "Individual",
      code: "Code",
      deploy: "Deploy",
      items: [
        {
          name: "D'Oliva E-commerce",
          desc: "Team-built e-commerce platform for cosmetic sales, with user authentication, product catalog, and an AI chatbot.",
          tech: ["React", "PHP", "PostgreSQL", "Figma", "Git"],
          github: "#projects",
          deploy: null,
          team: true,
          repoPrivate: true,
        },
        {
          name: "Subscription Platform",
          desc: "Web application with monthly and annual subscription plans to unlock exclusive content. Built with Mercado Pago API integration for payment processing.",
          tech: ["React", "Node.js", "PostgreSQL"],
          github: null,
          deploy: null,
          team: false,
          repoPrivate: true,
        },
        {
          name: "Database Project II",
          desc: "Academic project for relational database modeling and SQL queries, with a small Python CRUD for basic operations.",
          tech: ["Python", "PostgreSQL", "Git"],
          github: "https://github.com/JoaoFontanella/ABP_Banco_de_dados_II",
          deploy: null,
          team: false,
          repoPrivate: false,
        },
        {
          name: "Portfolio",
          desc: "Web application built with React to present professional projects, skills, and contact information. It is currently one of the few projects with a deployed version, hosted on Vercel.",
          tech: ["React", "Vercel", "Git"],
          github: "https://github.com/JoaoFontanella/Portfolio",
          deploy: "https://fontanella-portfolio.vercel.app",
          team: false,
          repoPrivate: false,
        },
        {
          name: "ContaComigo",
          desc: "Team-built mobile app focused on personal finance organization, allowing practical and intuitive control of bills, expenses, and user information.",
          tech: ["React", "Git"],
          github: "https://github.com/weslainesantana/ContaComigo",
          deploy: null,
          team: true,
          repoPrivate: false,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      email: "joaofontanella31@gmail.com",
    },
    experience: {
      eyebrow: "Background",
      title: "Experience",
      description:
        "Education, technical work, and certificates that support the foundation of my professional growth.",
      educationTitle: "🎓 Education",
      educationItems: [
        {
          title: "Computer Technician integrated with High School",
          description:
            "Technical education completed at CEDUP over 4 years, integrated with high school, focused on computing, technical support, computer maintenance, programming logic, and software development fundamentals.",
        },
        {
          title: "Software Engineering",
          description:
            "Undergraduate degree in progress at UniSATC, currently in the 6th semester and final year of the program, developing knowledge in software development, databases, system architecture, APIs, and modern software engineering practices.",
        },
      ],
      workTitle: "💼 Work Experience",
      workItems: [
        {
          title: "Technical Assistant",
          description:
            "More than 4 years of experience in technical support, working on assembly, maintenance, and configuration of computers and notebooks, remote and on-site customer support, diagnosis and resolution of Windows issues, plus knowledge of networking and specialized tools for system analysis, repair, and optimization.",
        },
      ],
      certificatesTitle: "📜 Certificates",
      certificates: [
        {
          title: "Software Developer",
          institution: "Unisatc",
          hours: "480h",
          year: "2025",
          link: "https://drive.google.com/file/d/1DnOEjjNnuEuG7cj9yvUa1tQfIlUKepfT/view?usp=sharing",
        },
        {
          title: "Software Requirements Analyst",
          institution: "Unisatc",
          hours: "400h",
          year: "2025",
          link: "https://drive.google.com/file/d/1s0IwtsY5BD2wc_ZjMcjfslZ8CJq-p0Hd/view?usp=sharing",
        },
      ],
      certificateLink: "View certificate",
    },
    footer: {
      brandDescription:
        "Front-end developer focused on elegant interfaces, responsive experiences, and projects with strong visual architecture.",
      mapLabel: "Map",
      contactLabel: "Contact",
      emailLabel: "Email",
      bottomRights: "© 2026 João Fontanella. All rights reserved.",
      bottomStack: "Built with React, Vite, and framer-motion.",
    },
  },
};

export function getLocaleContent(locale) {
  return portfolioContent[locale] ?? portfolioContent["pt-BR"];
}