import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
  const Projects = [
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
  return (
    <div>
      <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]">
        Projects
      </h1>
      <div className="flex justify-center my-6">
        <hr className="w-3/12 border-t-2 border-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            siteUrl={project.siteUrl}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
