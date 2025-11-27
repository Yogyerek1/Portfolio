import { useState } from "react";

export type NavItem = {
    label: string;
    href?: string;
    enable?: boolean;
};

type NavBarProps = {
    items: NavItem[];
    profileImg?: string;
    className?: string;
    backgroundColor?: string;
};

export default function NavBar({items, profileImg, className, backgroundColor}: NavBarProps) {
    const [activeItem, setActiveItem] = useState<string>(items.filter(item => item.enable).at(0)?.label || '');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div className={`flex flex-row w-screen h-14 fixed top-0 left-0 right-0 ${backgroundColor || 'bg-gray-950'} ${className || ''} z-50`}>
            {/* NavBar */}
            {/* ProfileImg */}
            <div className="flex items-center pl-3">
                <img src={profileImg} alt="ProfileImg" className="h-10 w-10 rounded-full border-blue-500" />
            </div>

            {/* NavItems in center */}
            <nav className="hidden md:flex items-center mx-auto gap-6">
                {items.filter(item => item.enable).map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        onClick={() => setActiveItem(item.label)}
                        className={`px-3 py-2 rounded-md transition-all duration-200 ${
                            activeItem === item.label 
                                ? 'text-blue-400 bg-gray-800' 
                                : 'text-gray-100 hover:text-blue-400 hover:bg-gray-800'
                        }`}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden ml-auto pr-3 flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-100 hover:text-blue-400"
                >
                    <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden absolute border border-b-blue-700 top-14 left-0 right-0 bg-gray-950 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col">
                    {items.filter(item => item.enable).map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => {
                                setActiveItem(item.label);
                                setIsMenuOpen(false);
                            }}
                            className={`px-16 py-3 border-b border-gray-800 transition-all duration-200 ${
                                activeItem === item.label
                                    ? 'text-blue-400 bg-gray-800'
                                    : 'text-gray-100 hover:text-blue-400 hover:bg-gray-800'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}