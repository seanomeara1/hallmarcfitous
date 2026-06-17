interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={className}>
      <p className="text-xs tracking-[0.25em] uppercase font-medium text-terra mb-2">
        {children}
      </p>
      <div className="w-10 h-1 bg-terra" />
    </div>
  );
}
