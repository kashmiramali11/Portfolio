import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const SKILL_GROUPS = [
  {
    title: "Core IAM Specializations",
    accent: "#06B6D4",
    skills: [
      "Okta",
      "SailPoint IIQ",
      "IdentityNow",
      "User Provisioning & De-provisioning",
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "OAuth",
      "SAML",
      "Password Management",
      "Entitlement Management",
      "Risk Labeling",
      "Access Control",
      "Security Policies",
      "RBAC",
      "Identity Verification & Adjudication",
    ],
  },
  {
    title: "Directory Services & Corporate Tools",
    accent: "#818CF8",
    skills: [
      "Active Directory",
      "Entra ID (Microsoft Azure AD)",
      "Postman",
      "Jira",
      "ServiceNow",
      "Confluence",
      "SharePoint",
      "Power BI",
    ],
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    accent: "#34D399",
    skills: [
      "Incident Investigation",
      "Incident Remediation",
      "Audit and Compliance",
      "Security Risk Management",
      "SOX Compliance",
      "PCI-DSS",
      "HIPAA Security Controls",
      "ITIL Methodologies",
    ],
  },
  {
    title: "Credentials & Certifications",
    accent: "#F59E0B",
    skills: [
      "SailPoint Identity Security Leader",
      "CyberArk Certified Trustee",
      "Cisco Introduction to Cyber Security",
      "SSGI Project Management",
      "CITI Program – SBE Comprehensive",
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-24 bg-[#1E293B]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#06B6D4]" />
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
              Technical Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Expertise &amp; Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group, gi) => (
              <div
                key={group.title}
                className="bg-[#0F172A] rounded-xl border border-slate-700/50 p-6 hover:border-[#06B6D4]/30 transition-colors duration-300"
                style={{
                  transitionDelay: `${gi * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${gi * 100}ms, transform 0.6s ease ${gi * 100}ms, border-color 0.3s`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: group.accent }}
                  />
                  <h3 className="text-sm font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-2.5 py-1 text-xs rounded-md border border-slate-600/50 text-slate-300 bg-[#1E293B] cursor-default"
                      data-testid={`tag-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
