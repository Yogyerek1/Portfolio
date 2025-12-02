type SkillCardProps = {
    title: string;
    description: string;
};

export default function SkillCard({ title, description }: SkillCardProps) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}
