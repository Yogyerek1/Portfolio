type SkillCardProps = {
    title: string;
    items: string[];
};

export default function SkillCard({ title, items }: SkillCardProps) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg border-4 border-blue-500 hover:shadow-[0_0_30px_rgba(96,165,250,0.7)] transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 text-xs font-semibold text-blue-400 bg-gray-900 rounded-full border border-blue-500"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
