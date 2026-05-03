export default function Footer() {
  return (
    <footer className="border-t border-line py-10 mt-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-dim">
        <div className="font-mono">
          © {new Date().getFullYear()} Shradda Bharti
        </div>
        <div className="font-mono">
          Built with React · TypeScript · Vite · Tailwind
        </div>
      </div>
    </footer>
  );
}
