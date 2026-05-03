import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("light", saved === "light");
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight hover:text-accent transition-colors">
          shradda<span className="text-accent">.</span>
        </a>
        <nav className="flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden sm:block px-3 py-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-1 p-2 rounded-md text-ink-muted hover:text-ink hover:bg-bg-elevated transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
}
