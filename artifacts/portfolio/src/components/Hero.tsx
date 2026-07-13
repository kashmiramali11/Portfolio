import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const TYPING_PHRASES = [
  "IAM Specialist",
  "PhD Researcher",
  "Cyber Governance Expert",
  "SailPoint & Okta Engineer",
];

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 60;
    const MAX_DIST = 140;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.5)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < phrase.length) {
      timeout = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 45);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <span className="text-[#06B6D4] font-mono">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
      <NetworkCanvas />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tagline typing */}
        <div className="mb-6 text-sm font-mono text-slate-400 tracking-widest uppercase">
          <TypingEffect />
        </div>

        {/* Main headline */}
       <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Kashmira Mali
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#06B6D4] cyber-glow mb-6">
          Securing Enterprise Identity. Pioneering Cyber Governance Research.
      </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          PhD Researcher and Identity &amp; Access Management (IAM) Specialist bridging
          the gap between enterprise security infrastructure, behavioral governance,
          and strict regulatory compliance.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#experience")}
            className="px-8 py-3.5 rounded-md bg-[#06B6D4] text-[#0F172A] font-semibold text-base hover:bg-[#22D3EE] transition-all duration-300 shadow-lg shadow-[#06B6D4]/25"
            data-testid="button-explore-portfolio"
          >
            Explore Governance Portfolio
          </button>
          <a
            href="https://www.linkedin.com/in/kashmira-mali/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-md border border-[#06B6D4] text-[#06B6D4] font-semibold text-base hover:bg-[#06B6D4]/10 transition-all duration-300"
            data-testid="link-linkedin"
          >
            Connect via LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("#about")}
          className="mt-16 flex flex-col items-center gap-1 text-slate-500 hover:text-[#06B6D4] transition-colors duration-300 mx-auto"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
