import ProjectCard from './ProjectCard.tsx';

export default function Projects () {
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
                <ProjectCard title="Portfolio" description="This is my portfolio site." siteUrl="https://portfolio-ktjmjubo9-yogyerek1s-projects.vercel.app/#aboutme" githubUrl="https://github.com/Yogyerek1/Portfolio" technologies={['React + TypeScript', 'FastAPI']} />
            </div>
        </div>
    );
}