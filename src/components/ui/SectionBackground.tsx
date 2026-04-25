export function SectionBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1220_0%,#0F172A_55%,#111827_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
      <div className="absolute -top-20 right-0 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute left-[-60px] top-1/3 h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-3xl" />
    </>
  );
}
