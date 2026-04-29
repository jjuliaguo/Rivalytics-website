"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [billingAnnual, setBillingAnnual] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const features = [
    {
      icon: "🔍",
      title: "Competitor Tracking",
      desc: "Monitor every move your rivals make — pricing shifts, product launches, messaging changes — all surfaced automatically.",
      accent: "#245EAB",
    },
    {
      icon: "📊",
      title: "Strategy Signals",
      desc: "AI-powered analysis turns raw competitor data into clear signals: what's working for them, and where their gaps are.",
      accent: "#3B82F6",
    },
    {
      icon: "🗺️",
      title: "Market Mapping",
      desc: "See the full competitive landscape at a glance. Understand who owns which segments and where you can win.",
      accent: "#0EA5E9",
    },
    {
      icon: "⚡",
      title: "Opportunity Radar",
      desc: "Surface whitespace and uncontested niches before your competitors do. Be first to the gaps that matter.",
      accent: "#6366F1",
    },
    {
      icon: "📈",
      title: "Share of Voice",
      desc: "Track how your brand measures up in search, social, and content — and find exactly where to invest next.",
      accent: "#245EAB",
    },
    {
      icon: "📋",
      title: "Battle Cards",
      desc: "Auto-generated competitive one-pagers for your sales team, always up to date, ready for any deal.",
      accent: "#0EA5E9",
    },
  ];

  const plans = [
    {
      name: "Starter",
      monthly: 199,
      annual: 165,
      desc: "For growing teams getting serious about competitive intel.",
      features: ["5 competitors tracked", "3 markets monitored", "Weekly digest", "Opportunity radar", "Email alerts"],
      cta: "Start free trial",
      highlight: false,
    },
    {
      name: "Growth",
      monthly: 549,
      annual: 449,
      desc: "For revenue teams who need the complete picture.",
      features: ["20 competitors tracked", "Unlimited markets", "Daily live feed", "Battle cards", "Slack integration", "Share of voice"],
      cta: "Start free trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      monthly: null,
      annual: null,
      desc: "Custom pipelines, dedicated analyst, white-label reports.",
      features: ["Unlimited competitors", "Custom data sources", "Real-time alerts", "API access", "Dedicated CSM", "SSO & SAML"],
      cta: "Talk to us",
      highlight: false,
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif",
        background: "#F8FAFF",
        color: "#0F172A",
        overflowX: "hidden",
      }}
    >
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatR {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(-4deg); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); opacity: 0.6; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        .nav-link { color: #0F172A; text-decoration: none; opacity: 0.6; font-size: 15px; font-weight: 500; transition: opacity 0.2s; }
        .nav-link:hover { opacity: 1; }
        .feature-card { transition: transform 0.22s, box-shadow 0.22s; cursor: default; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(36,94,171,0.12) !important; }
        .btn-primary { transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(36,94,171,0.35) !important; }
        .btn-outline:hover { background: rgba(36,94,171,0.06) !important; }
        .price-card { transition: transform 0.22s; }
        .price-card:hover { transform: translateY(-3px); }
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 52px",
          background: scrollY > 50 ? "rgba(248,250,255,0.92)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(14px)" : "none",
          borderBottom: scrollY > 50 ? "1px solid rgba(36,94,171,0.1)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/Just letter logo.png" alt="Rivalytics Logo" width={36} height={36} />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: "#245EAB", letterSpacing: "-0.3px" }}>
            Rivalytics
          </span>
        </div>

        <div style={{ display: "flex", gap: 36 }}>
          {["Features", "Pricing", "Blog"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="btn-primary"
          style={{
            background: "#245EAB", color: "#fff",
            padding: "10px 24px", borderRadius: 8, fontSize: 14,
            fontWeight: 600, textDecoration: "none",
            boxShadow: "0 4px 16px rgba(36,94,171,0.28)",
          }}
        >
          Get early access
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "140px 24px 80px",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Background mesh */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(36,94,171,0.10) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(99,102,241,0.07) 0%, transparent 60%)",
        }} />

        {/* Floating orbs */}
        <div style={{
          position: "absolute", top: "12%", left: "6%", width: 360, height: 360,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(36,94,171,0.15) 0%, transparent 70%)",
          filter: "blur(40px)", animation: "float 9s ease-in-out infinite", zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "8%", right: "4%", width: 300, height: 300,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
          filter: "blur(40px)", animation: "floatR 11s ease-in-out infinite", zIndex: 0,
        }} />

        {/* Grid dots */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, opacity: 0.4,
          backgroundImage: "radial-gradient(rgba(36,94,171,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
        }} />

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(36,94,171,0.08)", border: "1px solid rgba(36,94,171,0.22)",
          borderRadius: 100, padding: "6px 16px", fontSize: 13, fontWeight: 600,
          color: "#245EAB", marginBottom: 32, position: "relative", zIndex: 1,
          animation: "fadeUp 0.55s ease both",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#245EAB", display: "inline-block" }} />
          Competitive intelligence, automated
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(52px, 7.5vw, 88px)",
          fontWeight: 400, lineHeight: 1.05, letterSpacing: "-1.5px",
          marginBottom: 24, position: "relative", zIndex: 1,
          animation: "fadeUp 0.65s ease 0.1s both", maxWidth: 860,
        }}>
          Know your competition.<br />
          <em style={{ color: "#245EAB" }}>Stay ahead.</em>
        </h1>

        <p style={{
          fontSize: 19, lineHeight: 1.7, maxWidth: 540,
          color: "#475569", marginBottom: 48,
          position: "relative", zIndex: 1,
          animation: "fadeUp 0.65s ease 0.2s both",
        }}>
          Rivalytics tracks your competitors, analyzes their strategy, and uncovers opportunities — all in one powerful platform.
        </p>

        {/* CTA */}
        <div style={{
          display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center",
          position: "relative", zIndex: 1, animation: "fadeUp 0.65s ease 0.3s both",
        }}>
          <a
            href="#waitlist"
            className="btn-primary"
            style={{
              background: "#245EAB", color: "#fff",
              padding: "15px 36px", borderRadius: 10,
              fontSize: 16, fontWeight: 700, textDecoration: "none",
              boxShadow: "0 6px 24px rgba(36,94,171,0.32)",
            }}
          >
            Join the waitlist →
          </a>
          <a
            href="#features"
            className="btn-outline"
            style={{
              background: "transparent", color: "#245EAB",
              padding: "15px 36px", borderRadius: 10,
              fontSize: 16, fontWeight: 600, textDecoration: "none",
              border: "1.5px solid rgba(36,94,171,0.35)",
              transition: "background 0.15s",
            }}
          >
            See how it works
          </a>
        </div>

        <p style={{
          marginTop: 44, fontSize: 14, color: "#94A3B8",
          position: "relative", zIndex: 1, animation: "fadeUp 0.65s ease 0.4s both",
        }}>
          🎉 200+ companies already on the waitlist
        </p>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{
        borderTop: "1px solid rgba(36,94,171,0.15)",
        borderBottom: "1px solid rgba(36,94,171,0.15)",
        background: "#245EAB", padding: "13px 0", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", gap: 64, whiteSpace: "nowrap",
          animation: "marquee 22s linear infinite",
          fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "1px",
        }}>
          {["COMPETITOR TRACKING", "STRATEGY SIGNALS", "MARKET MAPPING", "OPPORTUNITY RADAR", "SHARE OF VOICE", "BATTLE CARDS",
            "COMPETITOR TRACKING", "STRATEGY SIGNALS", "MARKET MAPPING", "OPPORTUNITY RADAR", "SHARE OF VOICE", "BATTLE CARDS",
          ].map((t, i) => (
            <span key={i} style={{ flexShrink: 0 }}>◆ {t}</span>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "120px 48px", maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "3px", color: "#245EAB", textTransform: "uppercase", marginBottom: 14 }}>
            What we do
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 400,
            letterSpacing: "-1px", lineHeight: 1.1,
          }}>
            Intel that turns rivals into<br />
            <em style={{ color: "#245EAB" }}>your roadmap</em>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
          gap: 24,
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                background: "#fff",
                border: "1px solid rgba(36,94,171,0.12)",
                borderRadius: 16, padding: "36px 32px",
                boxShadow: "0 2px 16px rgba(36,94,171,0.06)",
                animation: `fadeUp 0.5s ease ${i * 0.07}s both`,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `rgba(36,94,171,0.08)`,
                border: `1.5px solid rgba(36,94,171,0.18)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, marginBottom: 20,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.2px" }}>{f.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#64748B", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        style={{ padding: "120px 48px", background: "#0F172A", color: "#F8FAFF" }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "3px", color: "#60A5FA", textTransform: "uppercase", marginBottom: 14 }}>
              Pricing
            </p>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 400,
              letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 36,
            }}>
              Straightforward pricing.<br />
              <em style={{ color: "#60A5FA" }}>No surprises.</em>
            </h2>

            {/* Toggle */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <span style={{ fontSize: 14, opacity: billingAnnual ? 0.45 : 1 }}>Monthly</span>
              <button
                onClick={() => setBillingAnnual(!billingAnnual)}
                style={{
                  width: 50, height: 26, borderRadius: 100,
                  background: billingAnnual ? "#245EAB" : "#334155",
                  border: "none", cursor: "pointer", position: "relative",
                  transition: "background 0.2s",
                }}
              >
                <div style={{
                  position: "absolute", top: 3,
                  left: billingAnnual ? 26 : 3,
                  width: 20, height: 20, borderRadius: "50%", background: "#fff",
                  transition: "left 0.2s",
                }} />
              </button>
              <span style={{ fontSize: 14, opacity: billingAnnual ? 1 : 0.45 }}>
                Annual <span style={{ color: "#34D399", fontWeight: 700 }}>save 17%</span>
              </span>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 24, alignItems: "center",
          }}>
            {plans.map((plan, i) => (
              <div
                key={i}
                className="price-card"
                style={{
                  background: plan.highlight ? "#245EAB" : "#1E293B",
                  border: plan.highlight ? "none" : "1px solid #334155",
                  borderRadius: 20, padding: "44px 36px",
                  position: "relative",
                  boxShadow: plan.highlight ? "0 24px 60px rgba(36,94,171,0.5)" : "none",
                  transform: plan.highlight ? "scale(1.04)" : "none",
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#60A5FA", color: "#0F172A",
                    padding: "4px 20px", borderRadius: 100, fontSize: 12, fontWeight: 700,
                  }}>
                    Most popular
                  </div>
                )}

                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{plan.name}</h3>
                <p style={{ fontSize: 14, opacity: 0.65, marginBottom: 28, lineHeight: 1.5 }}>{plan.desc}</p>

                <div style={{ marginBottom: 32 }}>
                  {plan.monthly ? (
                    <>
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56, fontWeight: 400, letterSpacing: "-2px" }}>
                        ${billingAnnual ? plan.annual : plan.monthly}
                      </span>
                      <span style={{ opacity: 0.55, fontSize: 15 }}>/mo</span>
                    </>
                  ) : (
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, fontWeight: 400 }}>Custom</span>
                  )}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {plan.features.map((feat, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                        background: plan.highlight ? "rgba(255,255,255,0.25)" : "rgba(96,165,250,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 10, color: plan.highlight ? "#fff" : "#60A5FA",
                        fontWeight: 700,
                      }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  style={{
                    display: "block", textAlign: "center",
                    background: plan.highlight ? "#fff" : "#245EAB",
                    color: plan.highlight ? "#245EAB" : "#fff",
                    padding: "14px", borderRadius: 10,
                    fontWeight: 700, fontSize: 15, textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section
        id="waitlist"
        style={{ padding: "140px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}
      >
        {/* Concentric rings */}
        {[600, 440, 280].map((size, i) => (
          <div key={i} style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: size, height: size, borderRadius: "50%",
            border: `1px solid rgba(36,94,171,${0.06 + i * 0.04})`,
            zIndex: 0,
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "3px", color: "#245EAB", textTransform: "uppercase", marginBottom: 16 }}>
            Early access
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400,
            letterSpacing: "-1.5px", lineHeight: 1.05, marginBottom: 20,
          }}>
            Get ahead of your <em style={{ color: "#245EAB" }}>competition.</em>
          </h2>
          <p style={{ fontSize: 18, color: "#64748B", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.65 }}>
            Join 200+ revenue and strategy teams getting early access to Rivalytics. Rolling invites — claim your spot today.
          </p>

          {submitted ? (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "rgba(52,211,153,0.1)", border: "1.5px solid #34D399",
              borderRadius: 12, padding: "18px 40px",
              fontSize: 17, fontWeight: 600, color: "#059669",
            }}>
              <span style={{ fontSize: 24 }}>🎉</span> You're on the list! We'll be in touch soon.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex", gap: 0, maxWidth: 500, margin: "0 auto",
                boxShadow: "0 4px 32px rgba(36,94,171,0.14)",
                borderRadius: 12, overflow: "hidden",
                border: "1.5px solid rgba(36,94,171,0.2)",
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                style={{
                  flex: 1, padding: "16px 22px", fontSize: 15,
                  border: "none", outline: "none", background: "#fff",
                  fontFamily: "inherit", color: "#0F172A",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "#245EAB", color: "#fff",
                  padding: "16px 28px", border: "none",
                  fontSize: 15, fontWeight: 700, cursor: "pointer",
                  fontFamily: "inherit", flexShrink: 0,
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4f92")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#245EAB")}
              >
                Join waitlist →
              </button>
            </form>
          )}

          <p style={{ marginTop: 18, fontSize: 13, color: "#94A3B8" }}>
            No credit card. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(36,94,171,0.12)",
        padding: "28px 52px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 16, background: "#F8FAFF",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/Just letter logo.png" alt="Rivalytics Logo" width={28} height={28} />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "#245EAB" }}>Rivalytics</span>
        </div>
        <p style={{ fontSize: 13, color: "#94A3B8", margin: 0 }}>© 2025 Rivalytics. Competitive intelligence, automated.</p>
        <div style={{ display: "flex", gap: 24, fontSize: 14 }}>
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#" style={{ color: "#64748B", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
