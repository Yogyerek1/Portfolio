import type { SkillType, ProjectType, NavItem } from "./components/types";

export const navItems: NavItem[] = [
    { label: "Home", href: "#home", enable: true },
    { label: "About", href: "#about", enable: true },
    { label: "Skills", href: "#skills", enable: true },
    { label: "Projects", href: "#projects", enable: true },
    { label: "Contact", href: "#contact", enable: true },
];

export const skills: SkillType[] = [
    {
        title: "Programming Languages",
        items: ["JavaScript", "TypeScript", "C#", "C", "Python"],
    },
    {
        title: "Frontend",
        items: [
            "React + TypeScript",
            "Vite",
            "HTML",
            "CSS",
            "Tailwindcss",
            "Bootstrap"
        ],
    },
    {
        title: "Backend & Architecture",
        items: [
            "ASP.NET Core",
            "Nestjs",
            "Node.js + Express",
            "EF Core",
            "Clean Architecture",
            "RESTful API Design",
            "JWT Authentication & OAuth2",
            "MySQL / PostgreSQL / MSSQL",
        ],
    },
    {
        title: "DevOps & Tools",
        items: [
            "Docker & Docker Compose",
            "Cloudflare Tunnels",
            "Linux (Ubuntu)",
            "Jenkins"
        ],
    },
    {
        title: "Tools",
        items: [
            "Git & GitHub / GitLab",
            "Visual Studio / VS Code",
            "DBeaver / phpMyAdmin",
            "Jenkins",
            "ClickUp"
        ],
    },
    {
        title: "Operating Systems",
        items: [
            "Linux (Ubuntu / Fedora)",
            "Windows 10/11",
        ],
    },
];

export const projects: ProjectType[] = [
    {
        title: "Portfolio",
        description: "My personal portfolio website, designed and developed to showcase my projects and technical experience. It features a responsive frontend and a secure, lightweight ASP.NET Core Web API backend.",
        siteUrl: "https://portfolio.milkovics-szebasztian.hu",
        githubUrl: "https://github.com/Yogyerek1/Portfolio",
        technologies: ["React + TypeScript", "ASP.NET Core"]
    },
    {
        title: "Rycloon",
        description: "A live social media platform designed specifically for gamers with tailored features. I work on the project as a full-stack developer, currently focusing primarily on the backend infrastructure.",
        siteUrl: "https://rycloon.com",
        technologies: ["ASP.NET Core", "C#", "MySQL", "Docker", "React + TypeScript", "Jenkins"]
    },
    {
        title: "NexusCore",
        description: "NexusCore is an open-source e-commerce API built with .NET and PostgreSQL, designed to provide a secure, fast, and Docker-ready foundation for web stores. The project showcases a production-ready backend architecture with JWT authentication, alongside a newly started, highly customizable React + TypeScript frontend.",
        githubUrl: "https://github.com/Yogyerek1/NexusCore",
        technologies: ["ASP.NET Core", "C#", "PostgreSQL", "React + TypeScript"]
    },
    {
        title: "account-system",
        description: "A self-built account and authentication system developed to deeply understand and master the NestJS framework and modern backend development architectures.",
        githubUrl: "https://github.com/Yogyerek1/account-system",
        technologies: ["Nestjs", "TypeScript", "PostgreSQL"]
    }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Yogyerek1",
  linkedin: "https://www.linkedin.com/in/szebaszti%C3%A1n-milkovics-23021b311/",
  email: "mailto:mszebi2008@gmail.com",
};