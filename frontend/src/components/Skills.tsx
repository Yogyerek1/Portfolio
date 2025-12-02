import SkillCard from './SkillCard';

export default function Skills() {
    const skills = [
        { 
            title: 'Programming Languages', 
            items: ['TypeScript', 'JavaScript', 'Python', 'C#']
        },
        { 
            title: 'Technologies', 
            items: ['React + TypeScript', 'Vite', 'FastAPI', 'MSSQL', 'MySQL', 'PostgreSQL']
        },
        { 
            title: 'Tools', 
            items: ['Windows 10/11', 'Ubuntu', 'Visual Studio Code']
        },
    ];

    return (
        <div className="pt-5">
            <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]">
                Skills
            </h1>
            <div className="flex justify-center my-6">
                <hr className="w-3/12 border-t-2 border-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {skills.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} items={skill.items} />
                ))}
            </div>
        </div>
    );
}