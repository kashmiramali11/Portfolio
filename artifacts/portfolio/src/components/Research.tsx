import { useState } from "react";
import { X, BookOpen, FileText } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const RESEARCH_CARDS = [
  {
    id: "behavioral",
    title: "Behavioral & Organizational Factors in IAM Governance",
    short:
      "Investigating human elements, policy friction, and organizational compliance parameters impacting User Access Review (UAR) accuracy.",
    abstract: `This research examines the intersection of human behavior, organizational culture, and IAM governance outcomes. Despite robust technical IAM tooling (SailPoint, Okta, CyberArk), enterprise organizations consistently face audit findings rooted not in technical failures but in human and process gaps.

The study focuses on how cognitive biases, decision fatigue, and organizational hierarchy influence the accuracy and timeliness of User Access Reviews (UARs). Key variables include reviewer workload, escalation path friction, policy ambiguity, and training adequacy.

Preliminary findings suggest that organizations with structured behavioral intervention programs — including reviewer training, gamified compliance dashboards, and automated nudge systems — achieve up to 40% higher on-time UAR completion rates with fewer certification errors.

This work contributes a behavioral compliance framework mapping human factors to UAR accuracy metrics, providing actionable guidance for IAM program managers seeking to reduce audit risk without solely investing in additional tooling.`,
    icon: BookOpen,
    tags: ["UAR Compliance", "Human Factors", "IAM Governance", "Behavioral Science"],
  },
  {
    id: "framework",
    title: "Framework Compliance & Access Control Architectures",
    short:
      "Analyzing real-world data points, entitlement risk labeling, and alignment with regulatory frameworks like SOX, PCI-DSS, and HIPAA.",
    abstract: `This research conducts a systematic analysis of access control architectures across regulated industries — financial services (SOX/PCI-DSS), healthcare (HIPAA), and critical infrastructure — examining how entitlement risk labeling methodologies translate into measurable compliance posture improvements.

The study maps common access control anti-patterns (excessive privilege creep, orphaned accounts, toxic role combinations) to regulatory framework clauses, establishing a unified Entitlement Risk Score (ERS) model that normalizes risk assessment across SOX Section 404, PCI-DSS 7.x, and HIPAA 164.312(a)(1).

Empirical data from enterprise deployments reveals that organizations implementing risk-labeled RBAC with quarterly access reviews reduce critical finding rates in external audits by an average of 62%, while those relying on annual reviews with unlabeled entitlements face 3x higher remediation costs post-audit.

This work proposes a compliance-aligned access architecture reference model applicable to organizations seeking to consolidate multi-framework compliance obligations into a single unified IAM governance program.`,
    icon: FileText,
    tags: ["SOX", "PCI-DSS", "HIPAA", "Access Architecture", "Risk Labeling"],
  },
];

function ResearchModal({
  card,
  onClose,
}: {
  card: (typeof RESEARCH_CARDS)[number];
  onClose: () => void;
}) {
  const Icon = card.icon;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 max-w-2xl w-full bg-[#1E293B] border border-[#06B6D4]/30 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
          data-testid="button-close-modal"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center flex-shrink-0">
            <Icon size={18} className="text-[#06B6D4]" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
              Research Focus
            </span>
            <h3 className="text-lg font-bold text-white mt-1 leading-snug">
              {card.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded border border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/5 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          {card.abstract.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Research() {
  const { ref, isVisible } = useIntersectionObserver();
  const [activeCard, setActiveCard] = useState<(typeof RESEARCH_CARDS)[number] | null>(
    null
  );

  return (
    <>
      <section id="research" className="py-24 bg-[#0F172A]" ref={ref}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#06B6D4]" />
              <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
                Research
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Doctoral Research Focus
            </h2>
            <p className="text-slate-400 mb-10 max-w-2xl">
              PhD-level inquiry into the behavioral, organizational, and architectural
              dimensions of enterprise identity governance.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {RESEARCH_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => setActiveCard(card)}
                    className="text-left bg-[#1E293B] border border-slate-700/50 rounded-xl p-6 hover:border-[#06B6D4]/50 hover:bg-[#1E293B]/80 transition-all duration-300 group"
                    style={{
                      transitionDelay: `${i * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    }}
                    data-testid={`card-research-${card.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06B6D4]/20 transition-colors">
                        <Icon size={18} className="text-[#06B6D4]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#06B6D4] transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{card.short}</p>
                        <span className="inline-block mt-3 text-xs font-mono text-[#06B6D4] underline-offset-2 underline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Detailed Abstract →
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* COMMENTED-OUT ACADEMIC PUBLICATION TEMPLATE FOR FUTURE USE:
            <div className="border border-cyan-500/20 p-6 rounded-lg mt-8">
              <span className="text-xs text-cyan-500 uppercase font-mono">Published / Working Paper</span>
              <h4 className="text-xl font-bold mt-2">[Insert Paper Title Here]</h4>
              <p className="text-sm text-slate-400 mt-2">[Insert Journal or Conference Name Here]</p>
              <button className="mt-4 text-xs font-mono text-cyan-500 underline" onClick={() => {}}>View Detailed Abstract</button>
            </div>
            */}
          </div>
        </div>
      </section>

      {activeCard && (
        <ResearchModal card={activeCard} onClose={() => setActiveCard(null)} />
      )}
    </>
  );
}
