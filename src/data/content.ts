import spot1 from "@/assets/awards/spot1.png";
import spot2 from "@/assets/awards/spot2.png";
import spot3 from "@/assets/awards/spot3.png";
import spot4 from "@/assets/awards/spot4.png";

export const SITE_CONFIG = {
  name: "Vishnu Priya Vattikunta",
  role: "Full Stack Developer",
  location: "Bengaluru, India",
  email: "vishnuv9141@outlook.com",
  linkedin: "https://linkedin.com/in/vattikuntavishnupriya9141",
  github: "https://github.com/vishnupriya9141",
  currentCompany: "Mu Sigma",
  tagline:
    "Building scalable enterprise software using React, TypeScript, NestJS, FastAPI, and Azure.",
  domains: [
    "Enterprise Analytics",
    "Supply Chain Platforms",
    "Healthcare Systems",
    "Aviation",
  ],
  resumeUrl: "/resume/vishnu-priya-resume.pdf",
};

export const NAVIGATION = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#awards" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Mu Sigma",
    roles: [
      {
        title: "Decision Scientist III",
        period: "Jan 2026 - Present · 6 mos",
        responsibilities: [
          "Frontend Engineering & UI Development: Implemented internationalization (i18n) with support for 20+ languages, including RTL layouts, enabling a scalable multilingual user experience. Built reusable UI modules, shared components, and utility libraries to accelerate feature delivery and ensure consistency across applications.",
          "Data & Backend Integration: Developed and optimized complex Snowflake SQL queries, views, and data transformation logic to support analytics workflows and business reporting. Integrated NestJS services with Snowflake-backed data sources, enabling efficient retrieval and processing of enterprise data. Built Python-based automation utilities to streamline data validation, reporting, and operational workflows.",
          "Engineering Quality & Delivery: Managed source control and collaborative development using Bitbucket, following structured branching strategies and peer review practices. Supported CI/CD pipelines using Atlassian Bamboo, improving build automation and ensuring reliable application deployments.",
          "Team & Product Impact: Collaborated with cross-functional teams to translate business requirements into scalable technical solutions while maintaining high engineering standards. Contributed to technical documentation, code quality initiatives, and knowledge-sharing activities to support long-term platform maintainability.",
        ],
        technologies: [
          "React.js",
          "NestJS",
          "Python",
          "Tailwind CSS",
          "Bitbucket",
          "Atlassian Bamboo",
          "TypeScript",
          "Snowflake SQL",
          "i18n",
          "RTL",
        ],
        impact: "Enabled scalable multilingual enterprise applications and strengthened engineering quality practices",
      },
      {
        title: "Decision Scientist II",
        period: "Jan 2025 - Dec 2025 · 1 yr",
        responsibilities: [
          "Frontend Engineering & UI Platforms: Built reusable analytics UI components using React.js, TypeScript, and Ant Design to standardize dashboard development across enterprise applications. Developed interactive filtering workflows and KPI monitoring interfaces for real-time operational analytics exploration. Improved UI consistency and development velocity through shared component-driven architecture.",
          "Backend APIs & Application Services: Developed secure FastAPI-based REST APIs supporting automation workflows and reporting pipelines. Designed optimized SQL schemas aligned with dashboard filtering, reporting, and KPI monitoring requirements.",
          "Data Integration & Analytics Enablement: Built backend pipelines supporting batch analytics processing and near-real-time dashboard refresh workflows. Improved query responsiveness supporting large-scale analytics dashboard usage.",
          "Enterprise Security & Engineering Practices: Implemented Microsoft Entra ID (Azure AD) authentication and RBAC for secure role-based application access. Developed Selenium-based regression automation suites improving UI stability and release confidence. Contributed to shared internal libraries and participated in structured peer code reviews.",
          "Team Impact: Delivered features across multiple parallel analytics platform initiatives under tight timelines. Mentored junior developers and supported onboarding across project teams.",
        ],
        technologies: [
          "React.js",
          "TypeScript",
          "Python",
          "SQL",
          "FastAPI",
          "Azure DevOps",
          "SonarQube",
          "GitHub",
          "GitLab",
          "Selenium",
          "Ant Design",
          "Vite",
          "Figma",
          "Grafana",
          "Microsoft Entra ID",
          "RBAC",
        ],
        impact: "Standardized enterprise analytics UI components and strengthened security practices across multiple platform initiatives",
      },
      {
        title: "Decision Scientist I",
        period: "Jul 2023 - Dec 2024 · 1 yr 6 mos",
        responsibilities: [
          "Frontend Engineering & Advanced Visualization: Built analytics web applications using React.js and Ant Design, delivering reusable dashboard components including tables, filters, and modal workflows. Developed advanced visual analytics dashboards using D3.js, HighCharts, and Chart.js for KPI tracking and operational insights. Created 3D simulations using Three.js and p5.js to model supply-chain and vehicle movement scenarios. Implemented geospatial analytics interfaces using Leaflet.js for warehouse and fleet tracking with clustering and filtering.",
          "Backend Services & API Development: Developed modular backend services using Node.js and NestJS supporting scalable analytics workflows. Optimized backend queries improving dashboard rendering responsiveness.",
          "Data Engineering & Analytics Platforms: Built analytics pipelines using PySpark and Azure Databricks supporting batch and near-real-time processing. Embedded secure Power BI reports within enterprise applications using role-based access control.",
          "DevOps, Security & Delivery Engineering: Automated deployments using Azure DevOps CI/CD pipelines improving release reliability. Performed security validation using Checkmarx to support secure enterprise delivery.",
          "Product & Solution Contribution: Designed workflows and application screens in Figma, aligning UX feasibility with engineering implementation. Contributed technical inputs during analytics platform solution design discussions.",
        ],
        technologies: [
          "React.js",
          "JavaScript",
          "TypeScript",
          "Python",
          "SQL",
          "Node.js",
          "NestJS",
          "PySpark",
          "Azure Databricks",
          "Azure DevOps",
          "SonarQube",
          "GitLab",
          "Power BI",
          "Ant Design",
          "Three.js",
          "p5.js",
          "Figma",
          "Leaflet.js",
          "HighCharts",
          "Chart.js",
          "Checkmarx",
        ],
        impact: "Delivered comprehensive analytics and visualization solutions across logistics, supply chain, and geospatial domains",
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    slug: "ndc-cockpit",
    title: "NDC Cockpit",
    industry: "Enterprise Logistics",
    role: "Full Stack Developer",
    description:
      "Centralized enterprise portal for managing National Distribution Center (NDC) operations with secure access, Power BI integration, and real-time operational insights.",

    context:
      "NDC operations required a unified platform to streamline supply chain management, simplify complex operational processes, and provide secure access to analytics. Existing workflows lacked a centralized interface for managing dashboards, monitoring operational data, and enabling efficient decision-making across distribution center initiatives.",

    responsibilities: [
      "Developed responsive frontend interfaces using React and TypeScript.",
      "Built RESTful backend services with Node.js for dashboard and user management.",
      "Integrated Power BI dashboards for real-time operational reporting and analytics.",
      "Implemented Microsoft Entra ID authentication with role-based access control.",
      "Developed CRUD functionality for dashboard administration.",
      "Collaborated with business stakeholders to translate operational requirements into scalable solutions.",
      "Integrated SQL database for storing application and user management data."
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "SQL",
      "Azure",
      "Power BI",
      "Microsoft Entra ID"
    ],

    challenges: [
      {
        challenge:
          "Providing secure access to operational dashboards across multiple user roles.",
        solution:
          "Implemented Microsoft Entra ID authentication with role-based authorization to ensure only authorized users could access and manage portal resources."
      },
      {
        challenge:
          "Delivering real-time operational insights through a unified interface.",
        solution:
          "Integrated Power BI services within the portal, enabling users to access interactive dashboards and make informed decisions from a single platform."
      },
      {
        challenge:
          "Managing dashboard lifecycle efficiently for different business users.",
        solution:
          "Developed comprehensive dashboard management features allowing authenticated users to view, create, edit, and delete dashboards based on their permissions."
      }
    ],

    outcomes: [
      "Centralized NDC operational dashboards into a single secure portal.",
      "Enabled real-time visibility into distribution center operations through Power BI integration.",
      "Improved user experience with role-based dashboard management and personalized access.",
      "Simplified operational workflows by providing a unified platform for analytics and administration."
    ],
  },
  {
    id: 2,
    slug: "supply-chain-resiliency",
    title: "Supply Chain Resiliency Mapping",
    industry: "Supply Chain Management",
    role: "Full Stack Developer",

    description:
      "Enterprise web platform for monitoring supply chain resiliency by aggregating data from multiple sources, visualizing supply chain risks, and enabling proactive inventory and risk management.",

    context:
      "The application consolidates data from internal systems, external partners, and market analysis platforms into a unified dashboard. It provides Overview, React, Manage, and Plan views to help stakeholders monitor KPIs, assess supply chain risks, manage inventory visibility, and plan mitigation strategies.",

    responsibilities: [
      "Developed responsive React-based user interface for Overview, React, Manage, and Plan modules.",
      "Built backend REST APIs for data aggregation and integration from multiple data sources.",
      "Designed and implemented authentication and role-based access for internal and partner users.",
      "Developed dashboards displaying KPIs, trend analysis, and high-risk products and manufacturers.",
      "Implemented inventory visibility, risk monitoring, and action management workflows.",
      "Collaborated with business analysts and QA teams to deliver scalable and user-friendly features."
    ],

    technologies: [
      "React",
      "TypeScript",
      "Ant Design",
      "NestJS",
      "REST API",
      "SQL",
      "MySQL",
      "Azure",
      "Git"
    ],

    challenges: [
      {
        challenge:
          "Integrating supply chain information from multiple internal and external data sources.",
        solution:
          "Developed standardized APIs and data transformation logic to consolidate information into a unified data model."
      },
      {
        challenge:
          "Presenting complex supply chain metrics in an intuitive interface.",
        solution:
          "Designed role-based dashboards with clear KPIs, trend visualizations, and actionable workflows across multiple views."
      },
      {
        challenge:
          "Ensuring secure access for different categories of users.",
        solution:
          "Implemented authentication and role-based authorization to provide secure and controlled access to platform features."
      }
    ],

    outcomes: [
      "Centralized supply chain data into a single operational platform.",
      "Improved visibility into inventory, supplier risks, and key performance metrics.",
      "Enabled faster identification of supply chain issues and streamlined action tracking.",
      "Enhanced decision-making through proactive risk assessment and planning dashboards."
    ]
  },
  {
    id: 3,
    slug: "materials360",
    title: "Materials360",
    industry: "Enterprise Resource Planning",
    duration: "7 months",
    role: "Full Stack Developer",
    description:
      "End-to-end materials management platform tracking procurement, inventory, and vendor performance across 200+ facilities.",
    context:
      "Manual material tracking led to 15% excess inventory and 8% stockouts. The procurement cycle took 3-4 weeks with no visibility into vendor performance or price trends.",
    responsibilities: [
      "Built React frontend with Ant Design component library",
      "Developed FastAPI backend with SQLAlchemy ORM",
      "Implemented Celery workers for async PDF report generation",
      "Optimized API response times from 2s to 200ms",
      "Integrated Power BI for executive dashboards",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Ant Design",
      "FastAPI",
      "Python",
      "SQL",
      "Redis",
      "Power BI",
      "Azure",
    ],
    challenges: [
      {
        challenge: "Complex multi-step procurement workflows",
        solution: "Built reusable form wizard components with optimistic updates",
      },
      {
        challenge: "Real-time inventory across distributed facilities",
        solution: "Implemented WebSocket-based updates with Redis pub/sub",
      },
      {
        challenge: "PDF report generation for complex tabular data",
        solution: "Created Celery task queue with headless PDF export service",
      },
    ],
    outcomes: [
      "Reduced excess inventory by 15%",
      "Cut procurement cycle from 3-4 weeks to 5 days",
      "Improved vendor on-time delivery from 78% to 94%",
    ],
    imageUrl: "/projects/materials360.png",
    architectureDiagram: `
      graph LR
        A[Users] --> B[React Dashboard]
        B --> C[API Gateway]
        C --> D[Procurement Service]
        C --> E[Inventory Service]
        C --> F[Reporting Service]
        D --> G[(Azure SQL)]
        E --> G
        F --> H[Celery Workers]
        H --> I[PDF Reports]
        E --> J[Redis Cache]
    `,
  },
  {
  id: 4,
  slug: "spark-aligners-dashboard",
  title: "Spark Aligners Performance Dashboard",
  industry: "Healthcare Analytics",
  duration: "4 months",
  role: "Full Stack Developer",
  description:
    "A web-based healthcare analytics platform that enables clinical and sales stakeholders to monitor Healthcare Professional (HCP) performance, benchmark treatment outcomes, and drive data-driven decision-making through interactive dashboards.",

  context:
    "The Spark Aligners Performance Dashboard consolidates clinical, operational, and performance data from centralized reporting views into a unified analytics platform. It provides role-based access for internal stakeholders and doctors to monitor KPIs, benchmark performance, analyze treatment trends, and identify opportunities to improve clinical outcomes and operational efficiency.",

  responsibilities: [
    "Developed interactive React dashboards for Doctor View, Target Audience View, and Timeframe View.",
    "Built NestJS APIs to retrieve, process, and serve performance metrics from Snowflake reporting views.",
    "Implemented role-based access control (RBAC) for secure access to doctor and stakeholder dashboards.",
    "Designed reusable KPI components for approval rates, refinement rates, treatment lifecycle, and case volume analysis.",
    "Optimized SQL queries and reporting logic to improve data accuracy, performance, and scalability.",
    "Integrated Power BI reports for advanced analytics and executive-level reporting.",
    "Implemented filtering, drill-down, benchmarking, and trend analysis capabilities across dashboard views.",
  ],

  technologies: [
    "React",
    "TypeScript",
    "NestJS",
    "SQL",
    "Snowflake",
    "Power BI",
    "Azure",
    "Azure Databricks",
  ],

  challenges: [
    {
      challenge:
        "Standardizing KPI calculations across multiple clinical and operational datasets.",
      solution:
        "Designed a governed KPI framework with centralized SQL logic to ensure consistent metric calculations across all dashboard views.",
    },
    {
      challenge:
        "Optimizing large-scale reporting queries without compromising data accuracy.",
      solution:
        "Refactored Snowflake SQL views, optimized joins, and reduced redundant calculations to improve query performance and eliminate data inconsistencies.",
    },
    {
      challenge:
        "Presenting complex healthcare performance metrics in an intuitive interface for both clinical and sales users.",
      solution:
        "Developed interactive dashboards with filters, drill-down capabilities, peer benchmarking, and trend visualizations to simplify performance analysis.",
    },
  ],

  outcomes: [
    "Delivered a centralized performance dashboard for monitoring Healthcare Professional (HCP) KPIs.",
    "Enabled peer benchmarking and timeframe-based trend analysis for data-driven performance evaluation.",
    "Improved reporting accuracy through optimized Snowflake SQL logic and standardized KPI calculations.",
    "Provided role-based self-service analytics for doctors and internal stakeholders.",
    "Supported proactive identification of treatment inefficiencies and performance improvement opportunities.",
  ],
},
];

export const AWARDS = [
  {
    id: 1,
    title: "Corporate Spot Award",
    date: "April 2024",
    description:
      "Received this award for developing the NDC Cockpit project, where Power BI dashboards were added to a web application. The dashboards can be accessed based on user roles and login permissions.",
    project: "NDC Cockpit",
    imageUrl: spot1,
  },
  {
    id: 2,
    title: "Corporate Spot Award",
    date: "November 2024",
    description:
      "This award is given in recognition of consistent dedication and versatile contributions to the project. The work spanned across frontend development, backend development, and design, with support provided wherever required. Strong ownership, adaptability, and hard work played a key role in the successful delivery of the project.",
    imageUrl: spot2,
  },
  {
    id: 3,
    title: "Corporate Spot Award",
    date: "August 2025",
    description:
      "This award is given for taking complete ownership of a full-stack development project. It recognizes the ability to collaborate effectively with other contributors, proactively solve problems, pay close attention to details, and deliver quick, reliable solutions that had a strong impact on key deliverables.",
    imageUrl: spot3,
  },
  {
    id: 4,
    title: "Corporate Spot Award",
    date: "December 2025",
    description:
      "Given for full ownership and contributions across the entire project lifecycle, from ideation and design to development, resulting in impactful and innovative application.",
    imageUrl: spot4,
  },
];

export const SKILLS = {
  frontend: {
    title: "Frontend",
    icon: "Monitor",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Ant Design",
      "Vite",
      "Next.js",
    ],
  },
  backend: {
    title: "Backend",
    icon: "Server",
    technologies: [
      "Node.js",
      "NestJS",
      "FastAPI",
      "Python",
      "REST APIs",
    ],
  },
  data: {
    title: "Data & Analytics",
    icon: "Database",
    technologies: [
      "SQL",
      "PySpark",
      "Azure Databricks",
    ],
  },
  visualization: {
    title: "Visualization",
    icon: "BarChart",
    technologies: [
      "D3.js",
      "Chart.js",
      "HighCharts",
      "Leaflet.js",
      "Three.js",
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "Cloud",
    technologies: [
      "Azure",
      "Azure DevOps",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  security: {
    title: "Security",
    icon: "Shield",
    technologies: [
      "Microsoft Entra ID",
      "RBAC",
      "OIDC",
      "OAuth 2.0",
      "Selenium",
      "SonarQube",
      "Checkmarx",
    ],
  },
};

export const EDUCATION = [
  {
    id: 1,
    institution: "BITS Pilani",
    degree: "M.Tech",
    field: "Cloud Computing",
    period: "2023 - 2025",
    status: "Pursuing",
  },
  {
    id: 2,
    institution: "ANITS",
    degree: "B.Tech",
    field: "Information Technology",
    period: "2018 - 2022",
    status: "Completed",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2022",
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/WTPC2KLYRDAX",
  },
  {
    id: 2,
    title: "IBM SQL for Data Science",
    issuer: "IBM",
    date: "2021",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KVPZ7XVNUDVK",
  },
];

export const STATS = [
  { label: "Corporate Spot Awards", value: "4", icon: "Trophy" },
  { label: "Engineers Mentored", value: "20+", icon: "Users" },
  { label: "Enterprise Apps Delivered", value: "Multiple", icon: "Rocket" },
  { label: "Domains", value: "Multi", icon: "Globe" },
];
