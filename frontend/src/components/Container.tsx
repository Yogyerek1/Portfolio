import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    backgoundColor?: string;
};

export default function Container({children, backgoundColor}: ContainerProps) {
    return (
        <section className={`w-full h-screen z-30 ${backgoundColor} border-y-1 border-blue-700`}>
            {children}
        </section>
    );
}