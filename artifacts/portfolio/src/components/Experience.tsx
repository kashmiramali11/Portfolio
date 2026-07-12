import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import IAMSandbox from "./IAMSandbox";

const EXPERIENCES = [
  {
    company: "KR3 Information Systems",
    location: "Jersey City, NJ",
    role: "Java Developer (IAM Analyst)",
    period: "August 2024 – March 2026",
    bullets: [
      "Led User Access Review (UAR) campaigns using SailPoint IdentityNow, managing identity lifecycle, access certification workflows, and audit compliance processes across enterprise applications.",
      "Coordinated 50+ application owners and resource owners to execute UAR campaigns and access certification programs across enterprise systems.",
      "Supported identity adjudication activities by evaluating entitlement risk labels across multiple applications, reducing over-privileged access risk by 35%.",
      "Conducted access verification and certification reviews for privileged and standard user accounts, achieving 100% on-time compliance with zero audit findings.",
      "Enhanced onboarding workflows within the IGA system, defining access requirements, implementing RBAC, and supporting SSO and MFA integrations.",
      "Assisted in defining IAM project requirements in SailPoint IIQ, supporting smooth application onboarding across 10+ enterprise applications.",
      "Developed documentation and training materials on entitlement management processes, improving team efficiency by 20%.",
      "Collaborated with HR, IT, and Compliance teams to implement security controls aligned with SOX and PCI regulatory requirements, supporting 100% SLA adherence.",
      "Built Power BI dashboards and Excel-based reporting frameworks to monitor identity data and present compliance metrics to senior leadership.",
      "Built and optimized enterprise full-stack applications using Angular, Spring Boot, and REST APIs.",
    ],
    highlight: true,
    tags: ["SailPoint IdentityNow", "UAR", "RBAC", "SSO", "MFA", "SOX", "PCI"],
  },
  {
    company: "CloudData",
    location: "Binghamton, NY",
    role: "Java Developer",
    period: "July 2024 – August 2024",
    bullets: [
      "Onboarded onto a Java-based data virtualization project, gaining familiarity with the team's codebase, architecture, and development workflows.",
      "Assisted with business requirements gathering sessions alongside business and technical stakeholders.",
    ],
    highlight: false,
    tags: ["Java", "Data Virtualization"],
  },
  {
    company: "Binghamton University",
    location: "Binghamton, NY",
    role: "Systems Intern",
    period: "September 2023 – January 2024",
    bullets: [
      "Wrote Ansible scripts to automate secure SSH key management, enabling passwordless authentication for team members across designated testing servers.",
      "Authored user guides and knowledge base articles on SSH key configuration, reducing help desk ticket volume by 30% and improving user satisfaction scores by 15%.",
      "Supported provisioning and de-provisioning workflows in a sandbox environment, gaining hands-on exposure to identity lifecycle management concepts.",
    ],
    highlight: false,
    tags: ["Ansible", "SSH", "Provisioning", "Documentation"],
  },
  {
    company: "Simeio",
    location: "Mumbai, India",
    role: "Senior Identity and Access Management Analyst",
    period: "August 2019 – August 2021",
    bullets: [
      "Delivered IAM security services for a healthcare client, ensuring 100% confidentiality, integrity, and availability of sensitive patient and clinical data in a HIPAA-regulated environment.",
      "Managed 5,000+ user accounts in Okta including access role assignments, password resets, MFA enforcement, and access governance, increasing operational efficiency by 20%.",
      "Ensured adherence to ITIL methodologies, reviewing and resolving security-related access incidents and change requests via ServiceNow, maintaining 98% SLA compliance.",
    ],
    highlight: false,
    tags: ["Okta", "HIPAA", "ITIL", "ServiceNow", "MFA"],
  },
];

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-24 bg-[#0F172A]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#06B6D4]" />
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Professional Timeline
          </h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#06B6D4]/20 md:left-6" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 md:gap-10"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                  }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center z-10 relative ${
                        exp.highlight
                          ? "border-[#06B6D4] bg-[#06B6D4]/10"
                          : "border-slate-600 bg-[#0F172A]"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          exp.highlight ? "bg-[#06B6D4]" : "bg-slate-600"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 pb-2 rounded-xl border p-5 md:p-6 transition-colors duration-300 ${
                      exp.highlight
                        ? "bg-[#1E293B] border-[#06B6D4]/25 hover:border-[#06B6D4]/50"
                        : "bg-[#1E293B]/60 border-slate-700/50 hover:border-slate-600"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-white">{exp.role}</h3>
                        <p className="text-[#06B6D4] font-semibold text-sm">{exp.company}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                      </div>
                      <span className="flex-shrink-0 text-xs font-mono text-slate-400 bg-[#0F172A] px-3 py-1.5 rounded border border-slate-700 h-fit whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded font-mono border border-[#06B6D4]/20 text-[#06B6D4]/70 bg-[#06B6D4]/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <span className="text-[#06B6D4] mt-1.5 flex-shrink-0 text-xs">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IAM Sandbox Widget */}
          <IAMSandbox />
        </div>
      </div>
    </section>
  );
}
