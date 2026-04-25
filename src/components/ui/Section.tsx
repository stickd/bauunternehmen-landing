type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-[#0B1220] py-20 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
