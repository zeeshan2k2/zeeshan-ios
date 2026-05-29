type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ description, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-white/58">{description}</p> : null}
    </div>
  );
}
