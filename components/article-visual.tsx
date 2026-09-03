interface ArticleVisualProps {
  variant?: 'workflow' | 'decision' | 'control';
  title: string;
  items: Array<{ label: string; detail: string }>;
}

const icons = {
  workflow: ['↗', '✓', '→', '▣'],
  decision: ['?', '↔', '✓', '→'],
  control: ['◉', '✓', '!', '→'],
};

export default function ArticleVisual({
  variant = 'workflow',
  title,
  items,
}: ArticleVisualProps) {
  const visualItems = items.slice(0, 4);

  return (
    <aside
      aria-label={title}
      className="not-prose my-10 overflow-hidden rounded-2xl border border-border bg-slate-50/80 p-5 sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">At a glance</p>
          <p className="mt-1 text-lg font-semibold text-foreground">{title}</p>
        </div>
        <div aria-hidden="true" className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm sm:flex">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 19V5m0 0 4 4m-4-4 4-4M19 5v14m0 0-4-4m4 4-4 4" />
          </svg>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        {visualItems.map((item, index) => (
          <div key={`${item.label}-${index}`} className="relative rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary" aria-hidden="true">
              {icons[variant][index]}
            </div>
            <p className="text-sm font-semibold text-foreground">{item.label}</p>
            <p className="mt-1 text-xs leading-5 text-muted">{item.detail}</p>
            {index < visualItems.length - 1 && (
              <span aria-hidden="true" className="absolute -right-2 top-1/2 z-10 hidden text-muted sm:block">→</span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
