
export default function Skills() {
    return (
        <div className="pt-5">
            <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]">
                Skills
            </h1>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {/* Card 1 */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Skill 1</h3>
                    <p className="text-gray-300">Description of skill 1</p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Skill 2</h3>
                    <p className="text-gray-300">Description of skill 2</p>
                </div>
                
                {/* Card 3 */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Skill 3</h3>
                    <p className="text-gray-300">Description of skill 3</p>
                </div>
                
                {/* Card 4 */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Skill 4</h3>
                    <p className="text-gray-300">Description of skill 4</p>
                </div>
                
                {/* Card 5 */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Skill 5</h3>
                    <p className="text-gray-300">Description of skill 5</p>
                </div>
                
                {/* Card 6 */}
                <div className="bg-gray-800 p-6 rounded-lg border-2 border-blue-500 hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Skill 6</h3>
                    <p className="text-gray-300">Description of skill 6</p>
                </div>
            </div>
        </div>
    );
}