import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F172A]/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-[#06B6D4]/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-lg font-bold tracking-tight text-white">
                KASHMIRA{" "}
                <span className="text-[#06B6D4]">
                  MALI
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#06B6D4] ml-0.5 mb-0.5 align-middle" />
                </span>
              </span>
            </div>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-[#06B6D4] transition-colors duration-300 cursor-pointer"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-md text-slate-300 hover:text-[#06B6D4] transition-colors duration-300"
                  aria-label="Toggle theme"
                  data-testid="button-theme-toggle"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

            <a
                href="/Portfolio/KashmiraMali.pdf"
                download="KashmiraMali.pdf"
                className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#06B6D4] text-[#06B6D4] text-sm font-medium hover:bg-[#06B6D4]/10 transition-all duration-300"
                data-testid="link-download-cv"
          >
                <Download size={14} />
                Download CV
            </a>
              {/* <a
                href="#"
                className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#06B6D4] text-[#06B6D4] text-sm font-medium hover:bg-[#06B6D4]/10 transition-all duration-300"
                data-testid="link-download-cv"
              >
                <Download size={14} />
                Download CV
              </a> */}
              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-slate-300 hover:text-[#06B6D4] transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                data-testid="button-mobile-menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F172A]/97 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-2xl font-semibold text-white hover:text-[#06B6D4] transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <a
              href="/Portfolio/KashmiraMali.pdf"
              download="KashmiraMali_Resume.pdf"
              className="flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#06B6D4] text-[#06B6D4] font-medium hover:bg-[#06B6D4]/10 transition-all"
              onClick={() => setMenuOpen(false)}
          >
              <Download size={16} />
              Download CV
        </a>

          {/* <a
            href="#"
            className="flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#06B6D4] text-[#06B6D4] font-medium hover:bg-[#06B6D4]/10 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            <Download size={16} />
            Download CV
          </a> */}
        </div>
      </div>
    </>
  );
}
