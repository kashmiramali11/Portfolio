import { MapPin, Phone, Linkedin, Mail, Send } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo — real submission goes to Formspree
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#1E293B]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#06B6D4]" />
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl">
            Open to conversations with cybersecurity leaders, academic collaborators, and
            Fortune 500 IAM teams.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-mono">
                    Location
                  </p>
                  <p className="text-white font-medium">Binghamton, NY</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-mono">
                    Phone
                  </p>
                  <p className="text-white font-medium">(607) 313-0478</p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/kashmira-mali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:border-[#06B6D4] hover:text-[#06B6D4] hover:bg-[#06B6D4]/5 transition-all duration-300"
                  aria-label="LinkedIn"
                  data-testid="link-social-linkedin"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:kashmiramali4@gmail.com?subject=Inquiry%20from%20Portfolio%20Website&body=Hi%20Kashmira%2C%20%0A%0AI%20visited%20your%20professional%20portfolio%20and%20would%20love%20to%20connect%20regarding..."
                  className="w-12 h-12 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:border-[#06B6D4] hover:text-[#06B6D4] hover:bg-[#06B6D4]/5 transition-all duration-300"
                  aria-label="Email"
                  data-testid="link-social-email"
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* IAM credential badge */}
              <div className="mt-4 p-4 rounded-xl border border-[#06B6D4]/20 bg-[#0F172A]">
                <p className="text-xs font-mono text-[#06B6D4] uppercase tracking-wide mb-2">
                  Active Clearances
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SailPoint Certified",
                    "CyberArk Trustee",
                    "HIPAA Compliant",
                    "SOX Audited",
                  ].map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded border border-[#06B6D4]/30 text-[#06B6D4] bg-[#06B6D4]/5 font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Glassmorphic contact form */}
            {/* Replace YOUR_ENDPOINT_HERE with your free Formspree token from formspree.io after deploying to GitHub Pages */}
            {/* <form
              action="https://formspree.io/f/YOUR_ENDPOINT_HERE"
              method="POST"
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-7 space-y-4 backdrop-blur-md"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
              }}
            >
              {submitted ? (
                <div className="py-10 flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/40 flex items-center justify-center">
                    <Send size={24} className="text-[#06B6D4]" />
                  </div>
                  <p className="text-white font-bold text-lg">Message Sent</p>
                  <p className="text-slate-400 text-sm">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                    className="mt-2 text-xs text-[#06B6D4] underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wide mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#06B6D4] transition-colors duration-300"
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wide mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#06B6D4] transition-colors duration-300"
                      data-testid="input-contact-email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#06B6D4] transition-colors duration-300 resize-none"
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#06B6D4] text-[#0F172A] font-bold text-sm hover:bg-[#22D3EE] transition-all duration-300 shadow-lg shadow-[#06B6D4]/20"
                    data-testid="button-contact-submit"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </>
              )}
            </form> */}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2024 Kashmira Mali. All rights reserved.</p>
            <p className="font-mono text-xs text-slate-600">
              IAM Specialist • PhD Researcher • Cyber Governance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
