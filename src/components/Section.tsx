import type { ReactNode } from "react";

type Props = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, number, title, subtitle, children }: Props) {
  return (
    <section id={id} className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="font-mono text-xs text-accent mb-3">{number}</div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-ink-muted max-w-2xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
