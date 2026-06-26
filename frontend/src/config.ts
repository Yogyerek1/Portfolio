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
        items: ["TypeScript", "Python", "C#"],
    },
    {
        title: "Technologies",
        items: [
            "React + TypeScript",
            "NestJS",
            "ASP NET Core",
            "FastAPI",
            "Vite",
            "MSSQL",
            "MySQL",
            "PostgreSQL",
            "Docker",
            "Jenkins"
        ],
    },
    {
        title: "Tools",
        items: ["Windows 10/11", "Ubuntu", "Fedora", "Visual Studio Code", "ClickUp", "DBeaver", "phpmyadmin"],
    },
];

export const projects: ProjectType[] = [
    {
        title: "Portfolio",
        description: "My personal portfolio website, designed and developed to showcase my previous and current projects, along with my technical experience. It features a responsive layout powered by an Express backend supporting the architecture.",
        siteUrl: "https://portfolio.milkovics-szebasztian.hu",
        githubUrl: "https://github.com/Yogyerek1/Portfolio",
        technologies: ["React + TypeScript", "Express"],
    },
    {
        title: "NexusCore",
        description: "NexusCore is an open-source e-commerce API built with .NET 10 and PostgreSQL, designed to provide a secure, fast, and Docker-ready foundation for web stores. The project showcases a production-ready backend architecture with JWT authentication, along with the initial building blocks of a highly customizable React + TypeScript frontend.",
        githubUrl: "https://github.com/Yogyerek1/NexusCore",
        technologies: ["ASP NET Core", "PostgreSQL", "C#", "Typescript", "React"]
    },
    {
        title: "Rycloon",
        description: "A social media platform designed for gamers with tailored features, where I work as a full-stack developer, currently focusing mostly on the backend.",
        siteUrl: "https://rycloon.com",
        technologies: ["ASP NET Core", "MySQL", "Docker", "Typescript", "React", "Jenkins"]
    },
    {
        title: "Molitio web engine",
        description: "An open-source, modular web framework where I contributed as a frontend developer. Unfortunately, the development of the project has since been discontinued, and the repository has been deleted.",
        technologies: ["React + TypeScript"],
    },
    {
        title: "account-system",
        description: "A self-built account and authentication system that I developed to deeply understand and master the NestJS framework and modern backend development architectures.",
        technologies: ["Typescript", "NestJS", "PostgreSQL"],
    },
    {
        title: "Hybrid engine",
        description: "A chess API built with Python and FastAPI that leverages an existing chess engine to manage and control gameplay. It acts as a lightweight middleware with clean endpoints, making it simple for anyone to develop custom client applications on top of it. The project was developed in a team for an IT competition, but we ultimately didn't enter it.",
        technologies: ["Python", "FastAPI"],
    },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Yogyerek1",
  linkedin: "https://www.linkedin.com/in/szebaszti%C3%A1n-milkovics-23021b311/",
  email: "mailto:mszebi2008@gmail.com",
};