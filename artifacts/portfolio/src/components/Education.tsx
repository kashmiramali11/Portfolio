import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const EDUCATION = [
  {
    degree: "PhD in Business Administration and Management",
    field: "Cyber Technology Management",
    institution: "Campbellsville University",
    timeline: "2026 – 2029",
    focus:
      "Behavioral and organizational factors in IAM governance and User Access Review compliance.",
    icon: "PHD",
  },
  {
    degree: "Master of Science in Computer Science",
    field: "",
    institution: "Binghamton University, Thomas J. Watson College of Engineering, SUNY",
    timeline: "2021 – 2023",
    focus: "",
    icon: "MS",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    field: "",
    institution: "MKSSS Cummins College of Engineering for Women, Pune",
    timeline: "2015 – 2019",
    focus: "",
    icon: "BE",
  },
];

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="education" className="py-24 bg-[#1E293B]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#06B6D4]" />
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
              Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Academic Foundation
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#06B6D4]/25 md:left-8" />

            <div className="space-y-10">
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 md:gap-10"
                  style={{
                    transitionDelay: `${i * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
                  }}
                >
                  {/* Icon bubble */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#06B6D4] bg-[#0F172A] flex items-center justify-center z-10">
                    <span className="text-[10px] md:text-xs font-bold font-mono text-[#06B6D4]">
                      {edu.icon}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-2">
                    <div className="bg-[#0F172A] border border-[#06B6D4]/20 rounded-xl p-5 md:p-6 hover:border-[#06B6D4]/40 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-white leading-snug">
                            {edu.degree}
                            {edu.field && (
                              <span className="text-[#06B6D4]"> – {edu.field}</span>
                            )}
                          </h3>
                          <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                        </div>
                        <span className="flex-shrink-0 text-xs font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-3 py-1.5 rounded border border-[#06B6D4]/20 h-fit whitespace-nowrap">
                          {edu.timeline}
                        </span>
                      </div>
                      {edu.focus && (
                        <p className="text-slate-400 text-sm mt-3 leading-relaxed border-t border-[#06B6D4]/10 pt-3">
                          <span className="text-slate-500 font-medium">Research Focus: </span>
                          {edu.focus}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
