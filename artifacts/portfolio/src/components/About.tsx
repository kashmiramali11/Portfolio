import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const STATS = [
  { value: 5000, suffix: "+", label: "Accounts Managed" },
  { value: 100, suffix: "%", label: "Audit Compliance" },
  { value: 35, suffix: "%", label: "Access Risk Reduction" },
  { value: 4, suffix: "+", label: "Years IAM Experience" },
];

function CounterStat({
  value,
  suffix,
  label,
  animate,
}: {
  value: number;
  suffix: string;
  label: string;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [animate, value]);

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-3xl sm:text-4xl font-extrabold text-[#06B6D4]">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-slate-400 font-medium text-center">{label}</span>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-[#0F172A]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#06B6D4]" />
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            Identity and Access Management Analyst &amp; Researcher
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio text */}
            <div className="space-y-5 text-slate-300 leading-relaxed text-base">
              <p>
                I am an Identity and Access Management (IAM) Analyst and PhD Candidate in Cyber Technology Management. Backed by a
                Master's and Bachelor's degree in Computer Science, my career focuses
                on managing complex identity lifecycles, mitigation of over-privileged
                access risks, and implementing ironclad security controls.
              </p>
              <p>
                Currently, my doctoral research focuses on the behavioral and
                organizational dimensions of IAM governance, explicitly mapping human
                factors to User Access Review (UAR) compliance frameworks. I blend
                years of technical execution with structured academic insight to
                engineer resilient, audit-ready enterprise structures.
              </p>

              {/* Tech accent badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["IAM", "Compliance", "User Access Reviews","SailPoint IIQ", "Okta", "SAML", "OAuth", "SOX", "HIPAA", "ISACA Journal Reviewer"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded border border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl border border-[#06B6D4]/20 bg-[#1E293B] flex flex-col items-center text-center"
                >
                  <CounterStat animate={isVisible} {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
