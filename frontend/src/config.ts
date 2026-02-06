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
        items: ["TypeScript", "JavaScript", "Python", "C#"],
    },
    {
        title: "Technologies",
        items: [
            "React + TypeScript",
            "NestJS + TypeScript",
            "Vite",
            "FastAPI",
            "MSSQL",
            "MySQL",
            "PostgreSQL",
        ],
    },
    {
        title: "Tools",
        items: ["Windows 10/11", "Ubuntu", "Visual Studio Code"],
    },
];

export const projects: ProjectType[] = [
    {
        title: "Portfolio",
        description: "This is my portfolio site.",
        siteUrl: "https://milkovics-szebasztian.hu",
        githubUrl: "https://github.com/Yogyerek1/Portfolio",
        technologies: ["React + TypeScript", "Express"],
    },
    {
        title: "Molitio web engine",
        description: "Molitio's project.",
        siteUrl: "https://molitio.hu",
        githubUrl: "https://github.com/molitio/molitio-web-engine",
        technologies: ["React + TypeScript", "NestJS"],
    },
    {
        title: "Hybrid engine",
        description: "It is a chess API.",
        technologies: ["Python", "FastAPI"],
    },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Yogyerek1",
  linkedin: "https://www.linkedin.com/in/szebaszti%C3%A1n-milkovics-23021b311/",
  email: "mailto:mszebi2008@gmail.com",
};