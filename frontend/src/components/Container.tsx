type ContainerProps = {
  children: React.ReactNode;
  backgoundColor?: string;
  id?: string;
  className?: string;
};

export default function Container({
  children,
  backgoundColor,
  id,
  className,
}: ContainerProps) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen z-30 ${backgoundColor ?? ""} border-y border-blue-700 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
