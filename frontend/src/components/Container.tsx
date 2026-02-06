import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  backgoundColor?: string;
  id?: string;
};

export default function Container({
  children,
  backgoundColor,
  id,
}: ContainerProps) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen z-30 ${backgoundColor} border-y border-blue-700`}
    >
      {children}
    </section>
  );
}
