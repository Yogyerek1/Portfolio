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

    return (
        <div className={`flex flex-row w-screen h-14 fixed top-0 left-0 right-0 ${backgroundColor || 'bg-gray-950'} ${className || ''}`}>
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
        </div>
    );
}