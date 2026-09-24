"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThreeBackground from "./components/ThreeBackground";
import NeuralNetworkChord from "./components/NeuralNetworkChord";
import FinanceDashboard from "./components/FinanceDashboard";
import { CERTS } from "./certificates/page";

type TabType = "education" | "projects" | "certificates" | "socials" | "neural" | "finance" | "research" | "corporate";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [terminalText, setTerminalText] = useState("");
  const [activeCursor, setActiveCursor] = useState<"line1" | "line2" | "terminal" | "none">("line1");
  const [selectedFont, setSelectedFont] = useState<"fira" | "jetbrains" | "space" | "outfit">("fira");

  useEffect(() => {
    const text1 = "Hello everyone!";
    const text2 = "I am Quashan";
    const text3 = "specializing in financial mathematics and quantitative finance, developing options pricing models, simulating stochastic processes, and engineering algorithmic trading frameworks.";
    
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    
    let timer1: ReturnType<typeof setInterval> | undefined;
    let timer2: ReturnType<typeof setInterval> | undefined;
    let timer3: ReturnType<typeof setInterval> | undefined;
    let timeout1: ReturnType<typeof setTimeout> | undefined;
    let timeout2: ReturnType<typeof setTimeout> | undefined;
    
    // Type line 1
    timer1 = setInterval(() => {
      if (i1 < text1.length) {
        setLine1(text1.substring(0, i1 + 1));
        i1++;
      } else {
        clearInterval(timer1);
        setActiveCursor("line2");
        
        // Type line 2
        timeout1 = setTimeout(() => {
          timer2 = setInterval(() => {
            if (i2 < text2.length) {
              setLine2(text2.substring(0, i2 + 1));
              i2++;
            } else {
              clearInterval(timer2);
              setActiveCursor("terminal");
              
              // Type terminal text
              timeout2 = setTimeout(() => {
                timer3 = setInterval(() => {
                  if (i3 < text3.length) {
                    setTerminalText(text3.substring(0, i3 + 1));
                    i3++;
                  } else {
                    clearInterval(timer3);
                    setActiveCursor("none");
                  }
                }, 15);
              }, 150);
            }
          }, 30);
        }, 100);
      }
    }, 30);
    
    return () => {
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
      if (timer3) clearInterval(timer3);
      if (timeout1) clearTimeout(timeout1);
      if (timeout2) clearTimeout(timeout2);
    };
  }, []);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    const hubSection = document.getElementById("hub");
    if (hubSection) {
      hubSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHub = () => {
    const hubSection = document.getElementById("hub");
    if (hubSection) {
      hubSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getFontFamily = () => {
    switch (selectedFont) {
      case "fira":
        return "'Fira Code', monospace";
      case "jetbrains":
        return "'JetBrains Mono', monospace";
      case "space":
        return "'Space Grotesk', sans-serif";
      case "outfit":
        return "'Outfit', sans-serif";
      default:
        return "'Fira Code', monospace";
    }
  };

  const PROJECTS = [
    {
      id: "max-div",
      title: "Maximum Diversification & Risk-Parity Portfolio Engine",
      subtitle: "Beyond Markowitz MVO · Empirical Stress Testing across Stressed Market Regimes",
      description: "Quantitative portfolio optimization system that evaluates Maximum Diversification (MD) ratio against traditional Mean-Variance Optimization. Developed with multi-asset covariance matrix decomposition, Monte Carlo wealth projection, and empirical stress testing across market crises.",
      tags: ["Quantitative Finance", "Python", "TypeScript", "Monte Carlo", "Risk Parity", "Portfolio Theory"],
      metrics: [
        { label: "Diversification Ratio", val: "1.84x" },
        { label: "Sharpe Improvement", val: "+34.2%" },
        { label: "Max Drawdown Red.", val: "-28.5%" }
      ],
      links: [
        { label: "Live Simulator", href: "/finance" },
        { label: "SSRN Research Paper", href: "https://ssrn.com/abstract=6692678" },
        { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/mqansari123" }
      ],
      color: "#f59e0b",
      badge: "FEATURED RESEARCH PROJECT"
    },
    {
      id: "options-pricing",
      title: "Black-Scholes & Heston Stochastic Volatility Options Engine",
      subtitle: "Analytical PDE Solutions, Volatility Surfaces & Real-time Greeks",
      description: "High-performance analytical PDE solver and Monte Carlo simulator for European & American options pricing. Calculates closed-form Greeks (Delta, Gamma, Theta, Vega, Rho) and simulates Heston stochastic volatility paths with surface calibration.",
      tags: ["Financial Mathematics", "Options Pricing", "Black-Scholes", "Heston Model", "Stochastic Calculus"],
      metrics: [
        { label: "Pricing Accuracy", val: "99.94%" },
        { label: "Greeks Computed", val: "5 Real-time" },
        { label: "Monte Carlo Paths", val: "100,000+" }
      ],
      links: [
        { label: "Explore Dashboard", href: "/finance" },
        { label: "GitHub Code", href: "https://github.com/quashanshayan123ansari" }
      ],
      color: "#38bdf8",
      badge: "QUANTITATIVE MODEL"
    },
    {
      id: "algo-backtester",
      title: "High-Frequency Algorithmic Trading Backtest Framework",
      subtitle: "Signal Generation, Statistical Arbitrage & Real-time Risk Analytics",
      description: "Robust strategy backtesting environment engineered in Python and TypeScript. Features automated signal generation, transaction cost modeling, slippage simulation, and performance metrics (Sharpe, Sortino, Calmar, Max Drawdown).",
      tags: ["Algorithmic Trading", "Backtesting", "Time Series", "Risk Analytics", "Python"],
      metrics: [
        { label: "Sharpe Ratio", val: "2.18" },
        { label: "Win Rate", val: "63.5%" },
        { label: "Execution Latency", val: "< 12ms" }
      ],
      links: [
        { label: "GitHub Repository", href: "https://github.com/quashanshayan123ansari" },
        { label: "LinkedIn Post", href: "https://www.linkedin.com/in/mqansari123" }
      ],
      color: "#10b981",
      badge: "TRADING ENGINE"
    },
    {
      id: "neural-chord",
      title: "Inter-Market Neural Network Chord Graph Visualizer",
      subtitle: "3D WebGL Visualization of Cross-Asset Sector Correlation Matrices",
      description: "Dynamic WebGL/3D graph visualization mapping inter-market dependencies, asset class correlations, and neural topology across equities, commodities, interest rates, and cryptocurrency markets.",
      tags: ["Three.js", "WebGL", "Graph Theory", "Data Visualization", "Next.js"],
      metrics: [
        { label: "FPS Performance", val: "60 FPS" },
        { label: "Node Connections", val: "128 Dynamic" },
        { label: "Interactive Modes", val: "Full 3D" }
      ],
      links: [
        { label: "Launch Neural Graph", href: "/neural-graph" }
      ],
      color: "#a855f7",
      badge: "VISUALIZATION SYSTEM"
    },
    {
      id: "corporate-analytics",
      title: "Enterprise Corporate Performance Analytics (D-Mart Suite)",
      subtitle: "10-Year Revenue Expansion, EBITDA Margin & ROCE Financial Modeling",
      description: "Comprehensive financial analytics dashboard built to reconstruct 10-year historical performance datasets for Avenue Supermarts (D-Mart). Includes dynamic Excel/CSV file parsing, margin waterfall analysis, and headcount optimization.",
      tags: ["Corporate Finance", "Financial Analytics", "Excel Parser", "EBITDA Modeling", "D-Mart"],
      metrics: [
        { label: "Historical Horizon", val: "10 Years" },
        { label: "ROCE Tracking", val: "49.8% Peak" },
        { label: "Excel Integration", val: "Instant .xlsx" }
      ],
      links: [
        { label: "View Corporate Suite", href: "/corporate" }
      ],
      color: "#22c55e",
      badge: "FINANCIAL DASHBOARD"
    },
    {
      id: "bhu-math",
      title: "BHU Pure & Applied Mathematics Research Collection",
      subtitle: "Banaras Hindu University Academic Proofs, Numerical Analysis & LaTeX Papers",
      description: "Comprehensive computational and theoretical mathematics repository at Banaras Hindu University (BHU). Covers abstract algebra, differential geometry, numerical solutions of ODEs/PDEs, and LaTeX academic publishing.",
      tags: ["Mathematics", "BHU", "LaTeX", "Numerical Analysis", "Differential Equations"],
      metrics: [
        { label: "University", val: "BHU" },
        { label: "Degree Track", val: "BS Mathematics" },
        { label: "Academic Grade", val: "First Class" }
      ],
      links: [
        { label: "Verify BHU Profile", href: "/student/verify/475509" },
        { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/mqansari123" }
      ],
      color: "#d946ef",
      badge: "ACADEMIC RESEARCH"
    }
  ];

  return (
    <div className={`page-root glow-${activeTab}`}>
      {/* High-performance lightweight 3D Background */}
      <ThreeBackground activeTab={activeTab} />

      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        height: "auto",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(2.5rem, 6vh, 4rem) clamp(1.5rem, 4vw, 3.5rem)",
        overflow: "hidden"
      }}>
        {/* Left-heavy layout */}
        <div style={{ zIndex: 2, maxWidth: "1000px", marginTop: "10px" }}>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            marginBottom: "1.25rem",
            fontFamily: "var(--font-sans)",
            opacity: 0.95
          }}>
            <div style={{ minHeight: "1.25em" }}>
              {line1}
              {activeCursor === "line1" && <span className="typing-cursor">|</span>}
            </div>
            <div style={{ minHeight: "1.25em" }} className="dynamic-gradient-text">
              {line2}
              {activeCursor === "line2" && <span className="typing-cursor">|</span>}
            </div>
          </h1>

          {/* Terminal Command Line with Font Selector */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "8px",
              fontSize: "0.75rem",
              color: "var(--slate-400)",
              fontFamily: "var(--font-mono)"
            }}>
              <span>FONT SELECTOR:</span>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {[
                  { id: "fira", label: "Fira Code" },
                  { id: "jetbrains", label: "JetBrains Mono" },
                  { id: "space", label: "Space Grotesk" },
                  { id: "outfit", label: "Outfit" }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFont(f.id as any)}
                    style={{
                      background: selectedFont === f.id ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.05)",
                      color: selectedFont === f.id ? "#38bdf8" : "var(--slate-400)",
                      border: `1px solid ${selectedFont === f.id ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
                      padding: "3px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.72rem",
                      fontFamily: f.id === "fira" ? "'Fira Code', monospace" : f.id === "jetbrains" ? "'JetBrains Mono', monospace" : f.id === "space" ? "'Space Grotesk', sans-serif" : "'Outfit', sans-serif",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Styled Terminal Line */}
            <div style={{
              fontFamily: getFontFamily(),
              fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              lineHeight: 1.6,
              minHeight: "2.2em",
              padding: "12px 18px",
              background: "rgba(15, 23, 42, 0.55)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "12px",
              backdropFilter: "blur(12px)",
              maxWidth: "880px"
            }}>
              {(activeCursor === "terminal" || terminalText || activeCursor === "none") && (
                <>
                  <span style={{ color: "#38bdf8", flexShrink: 0, fontWeight: 700, letterSpacing: "0.03em" }}>quashan@root:~$</span>
                  <span style={{ color: "var(--foreground)", wordBreak: "break-word" }}>
                    {terminalText}
                    {(activeCursor === "terminal" || activeCursor === "none") && <span className="terminal-cursor">█</span>}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* ALL TABS STACKED ON LEFT SIDE */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            maxWidth: "360px"
          }}>
            <div style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--slate-400)",
              fontFamily: "var(--font-mono)",
              marginBottom: "2px"
            }}>
              NAVIGATION TABS
            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%"
            }}>
              <Link
                href="/neural-graph"
                className="btn-xai-green"
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                MASTER NEURAL ↗
              </Link>

              <button
                onClick={() => handleTabClick("projects")}
                className={activeTab === "projects" ? "btn-xai-white" : "btn-xai-outline"}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                {activeTab === "projects" && (
                  <span style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#f59e0b",
                    boxShadow: "0 0 6px #f59e0b",
                    marginRight: "8px"
                  }} />
                )}
                MY PROJECTS ↗
              </button>

              <button
                onClick={() => handleTabClick("education")}
                className={activeTab === "education" ? "btn-xai-white" : "btn-xai-outline"}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                {activeTab === "education" && (
                  <span style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#a855f7",
                    boxShadow: "0 0 6px #a855f7",
                    marginRight: "8px"
                  }} />
                )}
                MY EDUCATION ↗
              </button>

              <button
                onClick={() => handleTabClick("certificates")}
                className={activeTab === "certificates" ? "btn-xai-white" : "btn-xai-outline"}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                {activeTab === "certificates" && (
                  <span style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#ef4444",
                    boxShadow: "0 0 6px #ef4444",
                    marginRight: "8px"
                  }} />
                )}
                MY CERTIFICATES ↗
              </button>

              <button
                onClick={() => handleTabClick("research")}
                className={activeTab === "research" ? "btn-xai-white" : "btn-xai-outline"}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                {activeTab === "research" && (
                  <span style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 6px #10b981",
                    marginRight: "8px"
                  }} />
                )}
                MY RESEARCH ↗
              </button>

              <button
                onClick={() => handleTabClick("corporate")}
                className={activeTab === "corporate" ? "btn-xai-white" : "btn-xai-outline"}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                {activeTab === "corporate" && (
                  <span style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px #22c55e",
                    marginRight: "8px"
                  }} />
                )}
                COMPANY PERFORMANCE ↗
              </button>

              <button
                onClick={() => handleTabClick("finance")}
                className={activeTab === "finance" ? "btn-xai-white" : "btn-xai-outline"}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                {activeTab === "finance" && (
                  <span style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#06b6d4",
                    boxShadow: "0 0 6px #06b6d4",
                    marginRight: "8px"
                  }} />
                )}
                FINANCIAL ANALYTICS ↗
              </button>

              <button
                onClick={() => handleTabClick("socials")}
                className={activeTab === "socials" ? "btn-xai-white" : "btn-xai-outline"}
                style={{ width: "100%", justifyContent: "flex-start" }}
              >
                {activeTab === "socials" && (
                  <span style={{
                    display: "inline-block",
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#d946ef",
                    boxShadow: "0 0 6px #d946ef",
                    marginRight: "8px"
                  }} />
                )}
                SOCIAL CONNECT ↗
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Elements Row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          width: "100%",
          marginTop: "2.5rem",
          zIndex: 2,
          gap: "16px"
        }}>
          <div />

          {/* Down arrow indicator */}
          <button
            onClick={scrollToHub}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--foreground)",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.7,
              transition: "opacity 0.3s ease, transform 0.3s ease",
              margin: "0 auto"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>

          {/* NEURAL DOCUMENTATION link */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              href="/neural-graph"
              className="btn-xai-outline"
              style={{
                padding: "8px 20px",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                fontWeight: 600
              }}
            >
              NEURAL DOCUMENTATION ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container" style={{ display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1, padding: "3rem 0" }}>

          {/* Interactive Hub Section */}
          <section id="hub" className="animate-fade-in-up delay-100" style={{ scrollMarginTop: "100px" }}>

            {/* Dynamic Content Panel */}
            <div style={{ minHeight: "400px" }}>

              {/* TAB: PROJECTS (NEW LINKEDIN & QUANT PROJECTS) */}
              {activeTab === "projects" && (
                <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 6px", color: "var(--foreground)" }}>
                      Featured Quantitative Projects
                    </h2>
                    <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", margin: 0 }}>
                      Specialized quantitative finance models, risk-parity algorithms, options pricing systems & computational tools built by Mohammad Quashan Ansari.
                    </p>
                  </div>

                  <div className="cards-grid">
                    {PROJECTS.map((proj) => (
                      <div
                        key={proj.id}
                        className="glass-panel project-card"
                        style={{
                          padding: "24px",
                          borderRadius: "18px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          borderTop: `2px solid ${proj.color}`,
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                      >
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                            <span style={{
                              fontSize: "0.65rem",
                              fontWeight: 750,
                              padding: "4px 10px",
                              borderRadius: "20px",
                              background: `${proj.color}15`,
                              color: proj.color,
                              border: `1px solid ${proj.color}30`,
                              letterSpacing: "0.06em"
                            }}>
                              {proj.badge}
                            </span>
                          </div>

                          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--foreground)", margin: "0 0 6px", lineHeight: 1.35 }}>
                            {proj.title}
                          </h3>
                          <p style={{ fontSize: "0.78rem", color: proj.color, margin: "0 0 12px", fontWeight: 500 }}>
                            {proj.subtitle}
                          </p>
                          <p style={{ fontSize: "0.85rem", color: "var(--slate-400)", lineHeight: 1.6, margin: "0 0 16px" }}>
                            {proj.description}
                          </p>

                          {/* Key Metrics Grid */}
                          <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "8px",
                            marginBottom: "16px",
                            background: "rgba(0,0,0,0.2)",
                            padding: "10px",
                            borderRadius: "10px",
                            border: "1px solid rgba(255,255,255,0.05)"
                          }}>
                            {proj.metrics.map((m) => (
                              <div key={m.label} style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: proj.color }}>{m.val}</div>
                                <div style={{ fontSize: "0.65rem", color: "var(--slate-400)", lineHeight: 1.2 }}>{m.label}</div>
                              </div>
                            ))}
                          </div>

                          {/* Tech Tags */}
                          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                            {proj.tags.map((tag) => (
                              <span key={tag} className="tech-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                          {proj.links.map((link) => (
                            link.href.startsWith("http") ? (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  fontSize: "0.78rem",
                                  fontWeight: 600,
                                  color: proj.color,
                                  textDecoration: "none",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px"
                                }}
                              >
                                {link.label} ↗
                              </a>
                            ) : (
                              <Link
                                key={link.label}
                                href={link.href}
                                style={{
                                  fontSize: "0.78rem",
                                  fontWeight: 600,
                                  color: proj.color,
                                  textDecoration: "none",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px"
                                }}
                              >
                                {link.label} ↗
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: NEURAL MAP */}
              {activeTab === "neural" && (
                <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <NeuralNetworkChord />
                </div>
              )}

              {/* TAB: EDUCATION */}
              {activeTab === "education" && (
                <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <div className="timeline" style={{ padding: "10px 0 10px 32px" }}>
                    
                    {/* Education Item 1: BHU */}
                    <div className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="glass-panel" style={{ padding: "24px" }}>
                        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                          
                          <div style={{
                            width: "54px",
                            height: "54px",
                            borderRadius: "14px",
                            background: "rgba(255, 255, 255, 0.95)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 6px 16px rgba(255, 128, 0, 0.12)",
                            border: "1px solid rgba(0, 0, 0, 0.08)",
                            padding: "2px",
                            flexShrink: 0
                          }}>
                            <img 
                              src="/bhu-logo-custom.png" 
                              alt="BHU Logo" 
                              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                            />
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
                              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Bachelor of Science (BS) in Mathematics</h3>
                              <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--secondary)", background: "rgba(6, 182, 212, 0.08)", padding: "4px 8px", borderRadius: "6px" }}>
                                2024 — Present
                              </span>
                            </div>
                            <h4 style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 500, marginBottom: "12px" }}>
                              Banaras Hindu University (BHU)
                            </h4>
                            <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "14px" }}>
                              Pursuing core theoretical mathematics, focusing heavily on algebraic structures, mathematical analysis, differential geometry, numerical analysis, data analysis, LaTeX typesetting, vector databases, and computational mathematics. Strengthening analytical problem-solving and rigorous scientific proofs.
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                              <div style={{ fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "var(--font-mono)" }}>
                                <strong>Academic Track:</strong> Core Mathematics Major
                              </div>
                              <a href="/student/verify/475509" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--primary)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                                Verify Student Profile ↗
                              </a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Education Item 2: Class 12th */}
                    <div className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="glass-panel" style={{ padding: "24px" }}>
                        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                          
                          <div style={{
                            width: "54px",
                            height: "54px",
                            borderRadius: "14px",
                            background: "rgba(30, 58, 138, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 6px 16px rgba(30, 58, 138, 0.12)",
                            border: "1px solid rgba(30, 58, 138, 0.15)",
                            fontSize: "1.6rem",
                            flexShrink: 0
                          }}>
                            🏫
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
                              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Senior Secondary (Class XII — CBSE)</h3>
                              <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--secondary)", background: "rgba(6, 182, 212, 0.08)", padding: "4px 8px", borderRadius: "6px" }}>
                                2023 · Grade: 85.2%
                              </span>
                            </div>
                            <h4 style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 500, marginBottom: "12px" }}>
                              Sant Atulanand Convent School, Varanasi
                            </h4>
                            <p style={{ color: "var(--slate-400)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "14px" }}>
                              Completed Class XII Senior Secondary Education under CBSE with major concentration in Science & Mathematics. Subjects: English, Mathematics, Physics, Chemistry, Physical Education. Achieved an overall aggregate score of 85.2%.
                            </p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                              <div style={{ fontSize: "0.85rem", color: "var(--foreground)", fontFamily: "var(--font-mono)" }}>
                                <strong>Subjects:</strong> English, Mathematics, Physics, Chemistry, Physical Education
                              </div>
                              <a href="/student/verify/12th" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--primary)", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                                Verify Academic Record ↗
                              </a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB: CERTIFICATES */}
              {activeTab === "certificates" && (
                <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <div className="cards-grid">
                    {CERTS.map((cert) => (
                      <div
                        key={cert.url}
                        className="glass-panel"
                        style={{
                          padding: "20px 22px",
                          borderRadius: "16px",
                          display: "flex",
                          gap: "14px",
                          alignItems: "flex-start",
                          transition: "transform 0.22s ease, box-shadow 0.22s ease",
                          borderTop: `2px solid ${cert.color}28`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px -8px ${cert.color}28`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "";
                          (e.currentTarget as HTMLElement).style.boxShadow = "";
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
                            flexShrink: 0,
                          }}
                        >
                          {cert.icon}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3 style={{ fontSize: "0.87rem", fontWeight: 650, color: "var(--foreground)", margin: "0 0 3px", lineHeight: 1.4 }}>
                            {cert.title}
                          </h3>
                          <p style={{ color: "var(--slate-400)", fontSize: "0.76rem", margin: "0 0 4px" }}>
                            {cert.issuer} · {cert.year}
                          </p>
                          {cert.desc && (
                            <p style={{ color: "var(--slate-400)", fontSize: "0.72rem", margin: "0 0 10px", lineHeight: 1.5, opacity: 0.8 }}>
                              {cert.desc}
                            </p>
                          )}
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
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
                                letterSpacing: "0.05em",
                              }}
                            >
                              {cert.platform}
                            </span>
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: "0.73rem",
                                color: "var(--primary)",
                                fontWeight: 500,
                                textDecoration: "none",
                              }}
                            >
                              View Certificate ↗
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: SOCIALS */}
              {activeTab === "socials" && (
                <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                  <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 1.5rem auto" }}>
                    <p style={{ color: "var(--slate-400)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      Let's sync up! I am actively engaged across multiple engineering and computational platforms. Explore my technical profiles below:
                    </p>
                  </div>

                  <div className="socials-grid" style={{ marginBottom: "3rem" }}>
                    <a href="https://github.com/quashanshayan123ansari" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-github">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>GitHub</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "var(--font-mono)" }}>@quashanshayan123ansari</div>
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/in/mqansari123" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-linkedin">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="#0A66C2" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>LinkedIn</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.8, fontFamily: "var(--font-mono)" }}>@mqansari123</div>
                      </div>
                    </a>

                    <a href="https://www.kaggle.com/quashanshayan123ansari" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-kaggle">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 2.25L11.5 12l7.5 9.75h-3.75L8.75 13.5v8.25H5.5V2.25h3.25v9L15.25 2.25H19z" fill="#20BEFF" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>Kaggle</div>
                      </div>
                    </a>

                    <a href="https://leetcode.com/u/quashanshayan123ansari/" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-leetcode">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.823a1.372 1.372 0 0 0-.025 1.917l.025.026a1.372 1.372 0 0 0 1.917.025l5.228-5.011a1.372 1.372 0 0 0-.025-1.917L13.483 0zm5.111 8.248a1.375 1.375 0 0 0-1.917-.025L11.45 13.234a1.372 1.372 0 0 0-.025 1.917l.025.026a1.372 1.372 0 0 0 1.917.025l5.228-5.011a1.372 1.372 0 0 0-.025-1.917l-.001-.026zm-7.618 6.47l-1.637 1.637a1.372 1.372 0 0 1-1.94 0l-4.26-4.26a1.372 1.372 0 0 1 0-1.94l6.197-6.197c.536-.536 1.405-.536 1.94 0l1.638 1.637c.536.536.536 1.405 0 1.94l-5.228 5.228a1.372 1.372 0 0 0 0 1.94l3.29 3.29c.536.536.536 1.405 0 1.94l-.001.002z" fill="#FFA116" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>LeetCode</div>
                      </div>
                    </a>

                    <a href="https://www.hackerrank.com/profile/quashanshayan123ansari" target="_blank" rel="noopener noreferrer" className="glass-panel social-btn social-hackerrank">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="5" fill="#2EC866" />
                        <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                      </svg>
                      <div>
                        <div style={{ fontWeight: 600 }}>HackerRank</div>
                      </div>
                    </a>
                  </div>

                  <hr style={{ border: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08) 50%, transparent)", margin: "2rem 0" }} />

                  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <h3 className="gradient-text" style={{ fontSize: "1.4rem", fontWeight: 700 }}>Direct Channels</h3>
                    <p style={{ color: "var(--slate-400)", fontSize: "0.95rem", marginTop: "4px" }}>Reach out directly via email</p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", maxWidth: "830px", margin: "0 auto" }}>
                    <div className="glass-panel" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", width: "100%", maxWidth: "390px", flex: "1 1 300px" }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(79, 70, 229, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(79, 70, 229, 0.15)",
                        flexShrink: 0
                      }}>
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--slate-400)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Personal Email</div>
                        <a href="mailto:quashanshayan123@gmail.com" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-900)", textDecoration: "none", wordBreak: "break-all" }}>
                          quashanshayan123@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="glass-panel" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", width: "100%", maxWidth: "390px", flex: "1 1 300px" }}>
                      <div style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(6, 182, 212, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(6, 182, 212, 0.15)",
                        flexShrink: 0
                      }}>
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="var(--secondary)" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--slate-400)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Contact Email</div>
                        <a href="mailto:mdquashan7497@gmail.com" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--slate-900)", textDecoration: "none", wordBreak: "break-all" }}>
                          mdquashan7497@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: COMPANY PERFORMANCE */}
              {activeTab === "corporate" && (
                <FinanceDashboard 
                  defaultTab="corporate" 
                  allowedTabs={["corporate", "dmart"]} 
                  title="Corporate Performance Dashboard"
                  subtitle="Enterprise financial metrics and trends reconstructed from actual performance datasets."
                />
              )}

              {/* TAB: FINANCE */}
              {activeTab === "finance" && (
                <FinanceDashboard 
                  defaultTab="wealth" 
                  allowedTabs={["wealth", "optimization"]} 
                  title="Financial Analytics & Optimization"
                  subtitle="Interactive Modern Portfolio Theory (MPT) simulator combined with a stochastic Monte Carlo wealth projector. Adjust weights manually or run advanced mathematical optimizations."
                />
              )}

              {/* TAB: RESEARCH PAPERS */}
              {activeTab === "research" && (
                <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
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
                      <h2 style={{ fontSize: "1.35rem", fontWeight: 700, margin: 0, color: "var(--foreground)" }}>My Research Papers</h2>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.78rem", margin: 0 }}>Peer-reviewed academic publications · Quantitative Finance & Mathematics</p>
                    </div>
                  </div>

                  <div className="glass-panel" style={{
                    padding: "28px 32px", borderRadius: "20px",
                    position: "relative", overflow: "hidden",
                    borderLeft: "4px solid #06b6d4",
                  }}>
                    <div style={{
                      position: "absolute", top: "-40px", right: "-40px",
                      width: "220px", height: "220px",
                      background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}/>

                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                      {[
                        { label: "✦ Published · May 2026", bg: "rgba(6,182,212,0.12)", color: "#06b6d4", border: "rgba(6,182,212,0.25)" },
                        { label: "Peer Reviewed", bg: "rgba(16,185,129,0.12)", color: "#10b981", border: "rgba(16,185,129,0.25)" },
                        { label: "DOI: 10.2139/ssrn.6692678", bg: "rgba(139,92,246,0.12)", color: "#8b5cf6", border: "rgba(139,92,246,0.25)" },
                      ].map(b => (
                        <span key={b.label} style={{
                          fontSize: "0.68rem", fontWeight: 700, padding: "4px 12px", borderRadius: "20px",
                          background: b.bg, color: b.color, border: `1px solid ${b.border}`,
                          textTransform: "uppercase" as const, letterSpacing: "0.06em",
                        }}>{b.label}</span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--foreground)", margin: "0 0 10px", lineHeight: 1.45, letterSpacing: "-0.01em" }}>
                      Beyond Markowitz: Evaluating Maximum Diversification in Multi-Asset Portfolios Under Stressed Market Conditions
                    </h3>
                    <p style={{ color: "var(--foreground)", fontSize: "0.83rem", margin: "0 0 3px", fontWeight: 600 }}>
                      Mohammad Quashan Ansari, Dr. Pankaj
                    </p>
                    <p style={{ color: "var(--slate-400)", fontSize: "0.79rem", margin: "0 0 3px", fontStyle: "italic" }}>
                      Department of Mathematics, Banaras Hindu University (BHU), Varanasi
                    </p>
                    <p style={{ color: "var(--primary)", fontSize: "0.79rem", margin: "0 0 16px", fontWeight: 500 }}>
                      International Journal of Research Publication and Reviews · May 2026
                    </p>

                    <div style={{ background: "rgba(0,0,0,0.03)", borderRadius: "12px", padding: "14px 16px", marginBottom: "14px", borderLeft: "3px solid rgba(6,182,212,0.3)" }}>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.82rem", lineHeight: 1.75, margin: 0 }}>
                        <strong style={{ color: "var(--foreground)", fontSize: "0.72rem", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Abstract — </strong>
                        Investigates the limitations of Markowitz&apos;s Mean-Variance Optimization (MVO) — its sensitivity to estimation errors and instability during stressed market regimes — and evaluates Maximum Diversification (MD) portfolios as a robust alternative. Using data from the COVID-19 pandemic, the Russia-Ukraine conflict, and global interest rate tightening cycles, the study analyzes five major asset classes through Diversification Ratio, Sharpe Ratio, and realized volatility.
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", marginBottom: "16px" }}>
                      {["Portfolio Optimization", "Maximum Diversification", "Markowitz MVO", "Quantitative Finance", "Market Stress", "Sharpe Ratio"].map(kw => (
                        <span key={kw} style={{
                          fontSize: "0.68rem", padding: "3px 10px", borderRadius: "20px",
                          background: "rgba(6,182,212,0.08)", color: "var(--primary)",
                          border: "1px solid rgba(6,182,212,0.18)", fontWeight: 500,
                        }}>{kw}</span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                      {[
                        { label: "SSRN Abstract", href: "https://ssrn.com/abstract=6692678", c: "#a855f7", b: "rgba(168,85,247,0.10)", br: "rgba(168,85,247,0.25)" },
                        { label: "DOI Link", href: "https://doi.org/10.2139/ssrn.6692678", c: "#06b6d4", b: "rgba(6,182,212,0.10)", br: "rgba(6,182,212,0.25)" },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/mqansari123", c: "#0a66c2", b: "rgba(10,102,194,0.10)", br: "rgba(10,102,194,0.25)" },
                      ].map(lk => (
                        <a key={lk.label} href={lk.href} target="_blank" rel="noopener noreferrer" style={{
                          display: "inline-flex", alignItems: "center", gap: "5px",
                          padding: "7px 14px", borderRadius: "10px",
                          background: lk.b, color: lk.c, border: `1px solid ${lk.br}`,
                          fontSize: "0.76rem", fontWeight: 600, textDecoration: "none",
                          transition: "opacity 0.2s ease",
                        }}>{lk.label} ↗</a>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    marginTop: "14px", padding: "18px 24px", borderRadius: "14px",
                    background: "rgba(6,182,212,0.04)", border: "1px dashed rgba(6,182,212,0.25)",
                    display: "flex", alignItems: "center", gap: "14px",
                  }}>
                    <div style={{
                      width: "34px", height: "34px", borderRadius: "9px",
                      background: "rgba(6,182,212,0.10)", border: "1px solid rgba(6,182,212,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "0.85rem", margin: "0 0 2px", color: "var(--foreground)" }}>More research in progress</p>
                      <p style={{ color: "var(--slate-400)", fontSize: "0.78rem", margin: 0 }}>Ongoing work in stochastic processes, options pricing models & algorithmic trading at BHU.</p>
                    </div>
                  </div>

                </div>
              )}
            </div>

          </section>

        </main>

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} Mohammad Quashan. Designed & built by Mohammad Quashan. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}
