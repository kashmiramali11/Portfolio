import { useState, useEffect, useRef } from "react";
import { User, Shield, Lock, CheckCircle, RotateCcw, Play } from "lucide-react";

const PHASES = [
  {
    id: 1,
    label: "User Provisioned",
    detail: "Identity created in HR system and synced to IGA platform",
    icon: User,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
  },
  {
    id: 2,
    label: "RBAC Evaluation",
    detail: "Evaluating entitlement risk labeling & security policies",
    icon: Shield,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
  },
  {
    id: 3,
    label: "MFA / Step-up Auth",
    detail: "Simulating Okta/SAML payload check and MFA challenge",
    icon: Lock,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
  },
  {
    id: 4,
    label: "Access Certified",
    detail: "100% On-Time Compliance reached with zero audit findings",
    icon: CheckCircle,
    color: "text-[#06B6D4]",
    bg: "bg-[#06B6D4]/10",
    border: "border-[#06B6D4]/40",
  },
];

export default function IAMSandbox() {
  const [running, setRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = () => {
    setDone(false);
    setCurrentPhase(0);
    setRunning(true);
  };

  const reset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setRunning(false);
    setCurrentPhase(0);
    setDone(false);
  };

  useEffect(() => {
    if (!running) return;
    if (currentPhase < PHASES.length) {
      timerRef.current = setTimeout(() => {
        setCurrentPhase((p) => p + 1);
      }, 1600);
    } else {
      setDone(true);
      setRunning(false);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [running, currentPhase]);

  return (
    <div className="rounded-2xl border border-[#06B6D4]/25 bg-[#0F172A] p-6 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-white font-mono">
            IAM Lifecycle Sandbox
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Interactive Access Certification Simulator
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${running ? "bg-green-400 animate-pulse" : done ? "bg-[#06B6D4]" : "bg-slate-600"}`} />
          <span className="text-xs font-mono text-slate-400">
            {running ? "RUNNING" : done ? "CERTIFIED" : "IDLE"}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-[#1E293B] rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-[#06B6D4] rounded-full transition-all duration-500"
          style={{ width: `${(currentPhase / PHASES.length) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {PHASES.map((phase, i) => {
          const Icon = phase.icon;
          const active = i === currentPhase - 1;
          const completed = i < currentPhase;
          const pending = i >= currentPhase;

          return (
            <div
              key={phase.id}
              className={`rounded-xl border p-4 flex flex-col items-center text-center gap-2.5 transition-all duration-500 ${
                completed
                  ? `${phase.bg} ${phase.border} opacity-100`
                  : active
                  ? `${phase.bg} ${phase.border} ring-1 ring-[#06B6D4]/40`
                  : "bg-[#1E293B] border-slate-700/50 opacity-40"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  completed ? phase.bg : "bg-slate-800"
                } ${active ? "animate-pulse" : ""}`}
              >
                <Icon
                  size={18}
                  className={completed || active ? phase.color : "text-slate-600"}
                />
              </div>
              <div>
                <p
                  className={`text-xs font-semibold leading-tight ${
                    completed || active ? "text-white" : "text-slate-600"
                  }`}
                >
                  {phase.label}
                </p>
                {(completed || active) && (
                  <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                    {phase.detail}
                  </p>
                )}
              </div>
              {completed && (
                <span className={`text-[10px] font-mono font-bold ${phase.color}`}>
                  DONE
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Certification result */}
      {done && (
        <div className="mb-5 rounded-xl border border-[#06B6D4]/40 bg-[#06B6D4]/5 p-4 flex items-center gap-4">
          <CheckCircle size={32} className="text-[#06B6D4] flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-white">Access Certification Complete</p>
            <p className="text-xs text-slate-400 mt-0.5">
              100% On-Time Compliance • Zero Audit Findings • SLA Adherence: 100%
            </p>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3">
        {!running && !done && (
          <button
            onClick={start}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#06B6D4] text-[#0F172A] text-sm font-bold hover:bg-[#22D3EE] transition-colors duration-300"
            data-testid="button-simulate-workflow"
          >
            <Play size={14} />
            Simulate Access Certification Workflow
          </button>
        )}
        {running && (
          <div className="flex items-center gap-2 px-5 py-2.5 text-sm text-slate-400 font-mono">
            <span className="animate-spin inline-block w-3 h-3 border-2 border-[#06B6D4] border-t-transparent rounded-full" />
            Processing workflow...
          </div>
        )}
        {done && (
          <button
            onClick={reset}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-sm font-medium hover:border-[#06B6D4] hover:text-[#06B6D4] transition-colors duration-300"
            data-testid="button-reset-workflow"
          >
            <RotateCcw size={14} />
            Reset Simulation
          </button>
        )}
      </div>
    </div>
  );
}
