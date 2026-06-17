interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-flex items-center px-4 py-2 bg-dark text-cream3 text-xs tracking-wide rounded-sm border border-grey/20">
      {label}
    </span>
  );
}
