"use client";

import { useState } from "react";
import Link from "next/link";
import ThreeBackground from "../components/ThreeBackground";

/* ─────────────────────────────────────────
   ALL CERTIFICATES — verified from LinkedIn
───────────────────────────────────────────*/
export const CERTS = [
  {
    title: "Reading Financial Statements",
    issuer: "Corporate Finance Institute (CFI)",
    platform: "CFI",
    year: "2026",
    url: "https://credentials.corporatefinanceinstitute.com/16d16594-b17b-4226-a483-3cd3370acc88#acc.Mkz8Xjsm",
    color: "#E8A400",
    iconBg: "rgba(232,164,0,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#E8A400"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="sans-serif">CFI</text>
      </svg>
    ),
    category: "Finance & Business",
    desc: "Deconstructing income statements, balance sheets, and cash flow statements for financial analysis.",
    skills: ["Financial Analysis", "Income Statements", "Balance Sheet Valuation", "Cash Flow Mechanics", "Ratio Analysis"]
  },
  {
    title: "Introduction to 3-Statement Modeling",
    issuer: "Corporate Finance Institute (CFI)",
    platform: "CFI",
    year: "2026",
    url: "https://credentials.corporatefinanceinstitute.com/1446023c-a042-462c-a4c1-b85466ba2a69#acc.JKNzbRcp",
    color: "#E8A400",
    iconBg: "rgba(232,164,0,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#E8A400"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="sans-serif">CFI</text>
      </svg>
    ),
    category: "Finance & Business",
    desc: "Income statement, balance sheet, cash flow statement integration and financial model building.",
    skills: ["3-Statement Integration", "Financial Modeling", "Debt Schedules", "Working Capital", "DCF Fundamentals"]
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey.org",
    platform: "Credly",
    year: "2026",
    url: "https://www.credly.com/badges/fe63b6ed-b8a5-4a8d-adae-8a43da3e7f2e/public_url",
    color: "#00A9CE",
    iconBg: "rgba(0,169,206,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#00A9CE"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="sans-serif">McKinsey</text>
      </svg>
    ),
    category: "Leadership",
    desc: "Problem-solving, communication, adaptable mindset & digital toolkit for future of work.",
    skills: ["Problem Solving", "Strategic Communication", "Agile Leadership", "Digital Toolkit", "Adaptability"]
  },
  {
    title: "Financial Markets",
    issuer: "Yale University",
    platform: "Coursera",
    year: "2026",
    url: "https://www.coursera.org/account/accomplishments/verify/M4VAZKE6NIIG",
    color: "#00356B",
    iconBg: "rgba(0,53,107,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#00356B"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="800" fontFamily="sans-serif">YALE</text>
      </svg>
    ),
    category: "Finance & Business",
    desc: "Risk management, behavioral finance, market mechanics and financial innovation.",
    skills: ["Behavioral Finance", "Risk Management", "Market Structure", "Asset Pricing", "Financial Innovation"]
  },
  {
    title: "Portfolio Optimization using Markowitz Model",
    issuer: "Coursera",
    platform: "Coursera",
    year: "2026",
    url: "https://coursera.org/share/3514683cfa918a52e723c7b13dc4b469",
    color: "#0056D2",
    iconBg: "rgba(0,86,210,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#0056D2"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="sans-serif">Coursera</text>
      </svg>
    ),
    category: "Finance & Business",
    desc: "Mean-variance optimization, efficient frontier construction and portfolio theory.",
    skills: ["Markowitz MVO", "Efficient Frontier", "Covariance Matrices", "Sharpe Ratio", "Risk Parity"]
  },
  {
    title: "Investment Banking Job Simulation",
    issuer: "The Forage",
    platform: "Forage",
    year: "2026",
    url: "https://www.theforage.com/completion-certificates/fMCqmt8qR4G85Puue/rKCBL7y5yKgzDGZmR_fMCqmt8qR4G85Puue_rhTtGoJrLCRvnL2fG_1762849746421_completion_certificate.pdf",
    color: "#7C3AED",
    iconBg: "rgba(124,58,237,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#7C3AED"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="800" fontFamily="sans-serif">Forage</text>
      </svg>
    ),
    category: "Finance & Business",
    desc: "Financial modeling, strategic alternatives, pitchbook preparation and M&A analysis.",
    skills: ["M&A Valuation", "Pitchbook Prep", "Comps Analysis", "DCF Modeling", "LBO Fundamentals"]
  },
  {
    title: "Goldman Sachs Job Simulation",
    issuer: "Goldman Sachs via The Forage",
    platform: "Forage",
    year: "2025",
    url: "https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_rhTtGoJrLCRvnL2fG_1758438210693_completion_certificate.pdf",
    color: "#1A56DB",
    iconBg: "rgba(26,86,219,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#1A56DB"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="800" fontFamily="sans-serif">GS</text>
      </svg>
    ),
    category: "Finance & Business",
    desc: "Risk management, quantitative analysis and financial operations simulation.",
    skills: ["Quantitative Risk Analysis", "Financial Operations", "Asset Management", "Trade Settlement", "Scenario Modeling"]
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte via The Forage",
    platform: "Forage",
    year: "2025",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_rhTtGoJrLCRvnL2fG_1755236215404_completion_certificate.pdf",
    color: "#86BC25",
    iconBg: "rgba(134,188,37,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#86BC25"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="sans-serif">Deloitte</text>
      </svg>
    ),
    category: "Data & Analytics",
    desc: "Data visualization, business analysis, forensic tech and analytical problem-solving.",
    skills: ["Data Visualization", "Forensic Tech", "Business Intelligence", "Analytics", "Root-Cause Analysis"]
  },
  {
    title: "BCG Strategy Consulting Job Simulation",
    issuer: "BCG (Boston Consulting Group) via Forage",
    platform: "Forage",
    year: "2025",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Pchc5rEGyCeozqY5Z_SKZxezskWgmFjRvj9_rhTtGoJrLCRvnL2fG_1755008157720_completion_certificate.pdf",
    color: "#009A44",
    iconBg: "rgba(0,154,68,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#009A44"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="sans-serif">BCG</text>
      </svg>
    ),
    category: "Leadership",
    desc: "Strategic analysis, market sizing, hypothesis-driven consulting problem-solving.",
    skills: ["Market Sizing", "Consulting Frameworks", "Hypothesis-Driven Problem Solving", "Strategic Analysis", "Market Entry"]
  },
  {
    title: "JPMorgan Chase Software Engineering Job Simulation",
    issuer: "JPMorgan Chase via The Forage",
    platform: "Forage",
    year: "2025",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/YD2kY95RQxQtXxFTS_Sj7temL583QAYpHXD_rhTtGoJrLCRvnL2fG_1755019542046_completion_certificate.pdf",
    color: "#003087",
    iconBg: "rgba(0,48,135,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#003087"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">JPMC</text>
      </svg>
    ),
    category: "Programming",
    desc: "Python, React, financial data feeds, real-time data visualization with Perspective.",
    skills: ["Python", "React", "Financial Data Streams", "Perspective Framework", "Real-Time Data"]
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    platform: "MATLAB Academy",
    year: "2025",
    url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b8b0e340-7267-4d35-9fdb-5846500c52ff",
    color: "#E16737",
    iconBg: "rgba(225,103,55,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#E16737"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="sans-serif">MATLAB</text>
      </svg>
    ),
    category: "Programming",
    desc: "100% completion — MATLAB fundamentals, scripting, data analysis & visualization.",
    skills: ["MATLAB Scripting", "Matrix Computations", "Data Graphics", "Algorithmic Functions", "Numerical Methods"]
  },
  {
    title: "HP LIFE Digital Marketing",
    issuer: "HP Inc. (HP LIFE)",
    platform: "HP LIFE",
    year: "2025",
    url: "https://www.life-global.org/certificate/a761218a-e0be-4d06-a86a-73c0103e2f13",
    color: "#0096D6",
    iconBg: "rgba(0,150,214,0.12)",
    icon: (
      <svg viewBox="0 0 40 40" width="28" height="28">
        <circle cx="20" cy="20" r="20" fill="#0096D6"/>
        <text x="50%" y="57%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="sans-serif">HP</text>
      </svg>
    ),
    category: "Leadership",
    desc: "Digital entrepreneurship, business fundamentals and technology literacy.",
    skills: ["Digital Marketing", "SEO/SEM Basics", "Audience Analytics", "Entrepreneurship", "Value Proposition"]
  }
];

/* ─────────────────────────────────────────
   RESEARCH PAPERS
───────────────────────────────────────────*/
const PAPERS = [
  {
    title: "Beyond Markowitz: Evaluating Maximum Diversification in Multi-Asset Portfolios Under Stressed Market Conditions",
    authors: ["Mohammad Quashan Ansari", "Dr. Pankaj"],
    affiliation: "Department of Mathematics, Banaras Hindu University (BHU), Varanasi",
    journal: "International Journal of Research Publication and Reviews",
    year: "May 2026",
    doi: "10.2139/ssrn.6692678",
    status: "Published",
    abstract:
      "Investigates the limitations of Markowitz's Mean-Variance Optimization (MVO) — its sensitivity to estimation errors and instability during stressed market regimes — and evaluates Maximum Diversification (MD) portfolios as a robust alternative. Using data from the COVID-19 pandemic, the Russia-Ukraine conflict, and global interest rate tightening cycles, the study analyzes five major asset classes through Diversification Ratio, Sharpe Ratio, and realized volatility.",
    keywords: ["Portfolio Optimization", "Maximum Diversification", "Markowitz MVO", "Quantitative Finance", "Market Stress", "Sharpe Ratio"],
    links: {
      ssrn: "https://ssrn.com/abstract=6692678",
      doi: "https://doi.org/10.2139/ssrn.6692678",
      researchgate: "https://www.researchgate.net/profile/Mohammad-Quashan-Ansari",
      linkedin: "https://www.linkedin.com/in/mqansari123",
    },
    color: "#06b6d4",
  },
];

const CATEGORIES = ["All", "Finance & Business", "Data & Analytics", "Programming", "Leadership"];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────────*/
export default function Page() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? CERTS
    : CERTS.filter(c => c.category === activeCategory);

  return (
    <div className="page-root glow-certificates">
      <ThreeBackground activeTab="certificates" />
      <div className="container" style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>

        <header style={{ padding: "2rem clamp(2rem, 8vw, 8rem)", zIndex: 10 }}>
          <Link href="/" className="btn-xai-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            ← BACK TO HOME
          </Link>
        </header>

        <main style={{ flex: 1, padding: "0 0 4rem" }}>
          <div style={{ padding: "0 clamp(2rem, 8vw, 8rem)" }}>

            {/* ── Hero ── */}
            <div style={{ textAlign: "center", marginBottom: "3rem", animation: "fadeInUp 0.5s ease forwards" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 16px", borderRadius: "20px",
                background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)",
                fontSize: "0.74rem", fontWeight: 600, color: "var(--primary)",
                textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem",
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {CERTS.length} Verified Credentials · 1 Research Publication
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800,
                letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1,
                background: "linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Credentials & Research
              </h1>
              <p style={{ color: "var(--slate-400)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto 1.5rem", lineHeight: 1.75 }}>
                Verified licenses from McKinsey, Yale, Goldman Sachs, Deloitte, BCG, JPMorgan & more — hover any card to flip & view skills gained!
              </p>
              <a href="https://www.linkedin.com/in/mqansari123" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "9px 22px", borderRadius: "22px",
                  background: "rgba(10,102,194,0.10)", border: "1px solid rgba(10,102,194,0.25)",
                  color: "#0a66c2", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none",
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0a66c2">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                View LinkedIn Profile ↗
              </a>
            </div>

            {/* ══════════════════════════════════
                SECTION 1 — CERTIFICATES (3D FLIP CARDS)
            ══════════════════════════════════ */}
            <section style={{ marginBottom: "5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))",
                  border: "1px solid rgba(6,182,212,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: "1.45rem", fontWeight: 700, margin: 0, color: "var(--foreground)" }}>Licenses & Certifications</h2>
                  <p style={{ color: "var(--slate-400)", fontSize: "0.78rem", margin: 0 }}>Hover on any card to flip and view skills gained in each program</p>
                </div>
              </div>

              {/* Category filter */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1.75rem" }}>
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                    padding: "6px 16px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 600,
                    cursor: "pointer", border: "none", transition: "all 0.2s ease",
                    background: activeCategory === cat ? "var(--primary)" : "rgba(0,0,0,0.04)",
                    color: activeCategory === cat ? "#fff" : "var(--slate-400)",
                  }}>
                    {cat} <span style={{ opacity: 0.7, fontSize: "0.7rem" }}>
                      ({cat === "All" ? CERTS.length : CERTS.filter(c => c.category === cat).length})
                    </span>
                  </button>
                ))}
              </div>

              {/* Grid of 3D Flip Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
                {filtered.map((cert, i) => (
                  <div key={cert.url} className="flip-card-wrapper" style={{ animation: `fadeInUp 0.45s ease ${i * 0.04}s forwards`, opacity: 0 }}>
                    <div className="flip-card-inner">
                      
                      {/* FRONT FACE */}
                      <div
                        className="glass-panel flip-card-front"
                        style={{
                          padding: "20px 22px",
                          display: "flex",
                          gap: "14px",
                          alignItems: "flex-start",
                          borderTop: `2px solid ${cert.color}`,
                          background: "rgba(15, 23, 42, 0.85)"
                        }}
                      >
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background: cert.iconBg,
                            border: `1px solid ${cert.color}22`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                          }}
                        >
                          {cert.icon}
                        </div>

                        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                          <div>
                            <h3 style={{ fontSize: "0.87rem", fontWeight: 650, color: "var(--foreground)", margin: "0 0 3px", lineHeight: 1.4 }}>
                              {cert.title}
                            </h3>
                            <p style={{ color: "var(--slate-400)", fontSize: "0.76rem", margin: "0 0 4px" }}>
                              {cert.issuer} · {cert.year}
                            </p>
                            {cert.desc && (
                              <p style={{ color: "var(--slate-400)", fontSize: "0.72rem", margin: "0 0 10px", lineHeight: 1.45, opacity: 0.85 }}>
                                {cert.desc}
                              </p>
                            )}
                          </div>

                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                            <span
                              style={{
                                fontSize: "0.65rem",
                                fontWeight: 700,
                                padding: "2px 8px",
                                borderRadius: "6px",
                                background: `${cert.color}15`,
                                color: cert.color,
                                border: `1px solid ${cert.color}25`,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em"
                              }}
                            >
                              {cert.platform}
                            </span>
                            
                            <span style={{ fontSize: "0.68rem", color: "var(--slate-400)", fontStyle: "italic", display: "inline-flex", alignItems: "center", gap: "3px" }}>
                              Hover to flip 🔄
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* BACK FACE (SKILLS GAINED) */}
                      <div
                        className="glass-panel flip-card-back"
                        style={{
                          padding: "20px 22px",
                          borderTop: `2px solid ${cert.color}`,
                          background: `radial-gradient(circle at 100% 0%, ${cert.color}20 0%, rgba(15, 23, 42, 0.95) 80%)`,
                          borderColor: `${cert.color}40`
                        }}
                      >
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                            <span style={{
                              fontSize: "0.65rem",
                              fontWeight: 750,
                              padding: "3px 9px",
                              borderRadius: "12px",
                              background: `${cert.color}20`,
                              color: cert.color,
                              border: `1px solid ${cert.color}40`,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase"
                            }}>
                              💡 SKILLS GAINED
                            </span>
                            <span style={{ fontSize: "0.7rem", color: "var(--slate-400)", fontFamily: "var(--font-mono)" }}>
                              {cert.platform}
                            </span>
                          </div>

                          <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 10px", lineHeight: 1.3 }}>
                            {cert.title}
                          </h4>

                          {/* Skill Pills */}
                          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
                            {cert.skills.map((skill) => (
                              <span
                                key={skill}
                                style={{
                                  fontSize: "0.68rem",
                                  fontWeight: 600,
                                  padding: "3px 9px",
                                  borderRadius: "6px",
                                  background: "rgba(255, 255, 255, 0.08)",
                                  color: "#f8fafc",
                                  border: "1px solid rgba(255, 255, 255, 0.15)",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px"
                                }}
                              >
                                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: cert.color }} />
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                          <span style={{ fontSize: "0.7rem", color: "var(--slate-400)" }}>{cert.issuer}</span>
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: "0.75rem",
                              color: cert.color,
                              fontWeight: 600,
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "3px"
                            }}
                          >
                            View Certificate ↗
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ══════════════════════════════════
                SECTION 2 — RESEARCH PAPERS
            ══════════════════════════════════ */}
            <section>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.75rem" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.15))",
                  border: "1px solid rgba(16,185,129,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: "1.45rem", fontWeight: 700, margin: 0, color: "var(--foreground)" }}>My Research Papers</h2>
                  <p style={{ color: "var(--slate-400)", fontSize: "0.78rem", margin: 0 }}>Peer-reviewed academic publications · Quantitative Finance & Mathematics</p>
                </div>
              </div>

              {PAPERS.map((paper, i) => (
                <div key={i} className="glass-panel" style={{
                  padding: "28px 32px", borderRadius: "20px", marginBottom: "20px",
                  position: "relative", overflow: "hidden",
                  borderLeft: `4px solid ${paper.color}`,
                  animation: "fadeInUp 0.6s ease forwards", opacity: 0,
                }}>
                  <div style={{
                    position: "absolute", top: "-40px", right: "-40px", width: "220px", height: "220px",
                    background: `radial-gradient(circle, ${paper.color}0a 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}/>

                  {/* Badges */}
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                    {[
                      { label: `✦ ${paper.status} · ${paper.year}`, bg: `${paper.color}18`, color: paper.color, border: `${paper.color}30` },
                      { label: "Peer Reviewed", bg: "rgba(16,185,129,0.12)", color: "#10b981", border: "rgba(16,185,129,0.25)" },
                      { label: `DOI: ${paper.doi}`, bg: "rgba(139,92,246,0.12)", color: "#8b5cf6", border: "rgba(139,92,246,0.25)" },
                    ].map(b => (
                      <span key={b.label} style={{
                        fontSize: "0.68rem", fontWeight: 700, padding: "4px 12px", borderRadius: "20px",
                        background: b.bg, color: b.color, border: `1px solid ${b.border}`,
                        textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>{b.label}</span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: "1.15rem", fontWeight: 750, color: "var(--foreground)", margin: "0 0 10px", lineHeight: 1.45, letterSpacing: "-0.01em" }}>
                    {paper.title}
                  </h3>
                  <p style={{ color: "var(--foreground)", fontSize: "0.83rem", margin: "0 0 3px", fontWeight: 600 }}>
                    {paper.authors.join(", ")}
                  </p>
                  <p style={{ color: "var(--slate-400)", fontSize: "0.79rem", margin: "0 0 3px", fontStyle: "italic" }}>
                    {paper.affiliation}
                  </p>
                  <p style={{ color: "var(--primary)", fontSize: "0.79rem", margin: "0 0 16px", fontWeight: 500 }}>
                    {paper.journal} · {paper.year}
                  </p>

                  <div style={{ background: "rgba(0,0,0,0.03)", borderRadius: "12px", padding: "14px 16px", marginBottom: "14px", borderLeft: `3px solid ${paper.color}40` }}>
                    <p style={{ color: "var(--slate-400)", fontSize: "0.83rem", lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: "var(--foreground)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Abstract — </strong>
                      {paper.abstract}
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", marginBottom: "16px" }}>
                    {paper.keywords.map(kw => (
                      <span key={kw} style={{
                        fontSize: "0.68rem", padding: "3px 10px", borderRadius: "20px",
                        background: "rgba(6,182,212,0.08)", color: "var(--primary)",
                        border: "1px solid rgba(6,182,212,0.18)", fontWeight: 500,
                      }}>{kw}</span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                    {[
                      { label: "SSRN Abstract", href: paper.links.ssrn, c: "#a855f7", b: "rgba(168,85,247,0.10)", br: "rgba(168,85,247,0.25)" },
                      { label: "DOI Link", href: paper.links.doi, c: paper.color, b: "rgba(6,182,212,0.10)", br: `${paper.color}30` },
                      { label: "ResearchGate", href: paper.links.researchgate, c: "#00c0d2", b: "rgba(0,192,210,0.10)", br: "rgba(0,192,210,0.25)" },
                      { label: "LinkedIn", href: paper.links.linkedin, c: "#0a66c2", b: "rgba(10,102,194,0.10)", br: "rgba(10,102,194,0.25)" },
                    ].map(lk => (
                      <a key={lk.label} href={lk.href} target="_blank" rel="noopener noreferrer" style={{
                        display: "inline-flex", alignItems: "center", gap: "5px",
                        padding: "7px 14px", borderRadius: "10px",
                        background: lk.b, color: lk.c, border: `1px solid ${lk.br}`,
                        fontSize: "0.76rem", fontWeight: 600, textDecoration: "none",
                        transition: "opacity 0.2s ease",
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                      >{lk.label} ↗</a>
                    ))}
                  </div>
                </div>
              ))}

              {/* More coming soon */}
              <div style={{
                padding: "20px 28px", borderRadius: "16px",
                background: "rgba(6,182,212,0.04)", border: "1px dashed rgba(6,182,212,0.25)",
                display: "flex", alignItems: "center", gap: "14px",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "rgba(6,182,212,0.10)", border: "1px solid rgba(6,182,212,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.85rem", margin: "0 0 2px", color: "var(--foreground)" }}>
                    More research in progress
                  </p>
                  <p style={{ color: "var(--slate-400)", fontSize: "0.78rem", margin: 0 }}>
                    Ongoing work in stochastic processes, options pricing models & algorithmic trading at BHU.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </main>

        <footer style={{ padding: "2rem", textAlign: "center", zIndex: 10 }}>
          <p style={{ color: "var(--slate-400)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Mohammad Quashan. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
