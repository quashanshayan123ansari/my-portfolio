"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThreeBackground from "./components/ThreeBackground";
import NeuralNetworkChord from "./components/NeuralNetworkChord";
import FinanceDashboard from "./components/FinanceDashboard";
import { CERTS } from "./certificates/page";

type TabType = "education" | "projects" | "certificates" | "socials" | "neural" | "finance" | "research" | "corporate";

/* ─── Tag colour map for each project ──────────────────── */
const TAG_CLASSES = ["fh-tag-green", "fh-tag-violet", "fh-tag-yellow", "fh-tag-pink", "fh-tag-outline"];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [terminalText, setTerminalText] = useState("");
  const [activeCursor, setActiveCursor] = useState<"line1" | "line2" | "terminal" | "none">("line1");
  const [selectedFont, setSelectedFont] = useState<"fira" | "jetbrains" | "space" | "outfit">("fira");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const text1 = "Hello everyone!";
    const text2 = "I am Quashan";
    const text3 = "specializing in financial mathematics and quantitative finance, developing options pricing models, simulating stochastic processes, and engineering algorithmic trading frameworks.";

    let i1 = 0, i2 = 0, i3 = 0;
    let timer1: ReturnType<typeof setInterval> | undefined;
    let timer2: ReturnType<typeof setInterval> | undefined;
    let timer3: ReturnType<typeof setInterval> | undefined;
    let timeout1: ReturnType<typeof setTimeout> | undefined;
    let timeout2: ReturnType<typeof setTimeout> | undefined;

    timer1 = setInterval(() => {
      if (i1 < text1.length) { setLine1(text1.substring(0, i1 + 1)); i1++; }
      else {
        clearInterval(timer1);
        setActiveCursor("line2");
        timeout1 = setTimeout(() => {
          timer2 = setInterval(() => {
            if (i2 < text2.length) { setLine2(text2.substring(0, i2 + 1)); i2++; }
            else {
              clearInterval(timer2);
              setActiveCursor("terminal");
              timeout2 = setTimeout(() => {
                timer3 = setInterval(() => {
                  if (i3 < text3.length) { setTerminalText(text3.substring(0, i3 + 1)); i3++; }
                  else { clearInterval(timer3); setActiveCursor("none"); }
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
    if (hubSection) hubSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHub = () => {
    const hubSection = document.getElementById("hub");
    if (hubSection) hubSection.scrollIntoView({ behavior: "smooth" });
  };

  const getFontFamily = () => {
    switch (selectedFont) {
      case "fira":      return "'Fira Code', monospace";
      case "jetbrains": return "'JetBrains Mono', monospace";
      case "space":     return "'Space Grotesk', sans-serif";
      case "outfit":    return "'Outfit', sans-serif";
      default:          return "'Fira Code', monospace";
    }
  };

  const PROJECTS = [
    {
      id: "max-div",
      title: "Maximum Diversification & Risk-Parity Portfolio Engine",
      subtitle: "Beyond Markowitz MVO · Empirical Stress Testing",
      description: "Quantitative portfolio optimization system evaluating Maximum Diversification ratio against traditional Mean-Variance Optimization. Multi-asset covariance matrix decomposition, Monte Carlo wealth projection, and empirical stress testing across market crises.",
      tags: ["Quantitative Finance", "Python", "TypeScript", "Monte Carlo", "Risk Parity"],
      metrics: [{ label: "Diversification Ratio", val: "1.84×" }, { label: "Sharpe Improvement", val: "+34.2%" }, { label: "Max Drawdown Red.", val: "−28.5%" }],
      links: [{ label: "Live Simulator", href: "/finance" }, { label: "SSRN Paper", href: "https://ssrn.com/abstract=6692678" }],
      accentColor: "#3cdd8c", cardClass: "fh-card-mint", badge: "FEATURED RESEARCH"
    },
    {
      id: "options-pricing",
      title: "Black-Scholes & Heston Stochastic Volatility Engine",
      subtitle: "Analytical PDE Solutions, Volatility Surfaces & Real-time Greeks",
      description: "High-performance PDE solver and Monte Carlo simulator for European & American options pricing. Closed-form Greeks (Delta, Gamma, Theta, Vega, Rho) with Heston stochastic volatility path simulation.",
      tags: ["Financial Mathematics", "Options Pricing", "Black-Scholes", "Heston Model"],
      metrics: [{ label: "Pricing Accuracy", val: "99.94%" }, { label: "Greeks Computed", val: "5 Live" }, { label: "MC Paths", val: "100k+" }],
      links: [{ label: "Explore Dashboard", href: "/finance" }, { label: "GitHub", href: "https://github.com/quashanshayan123ansari" }],
      accentColor: "#939eeb", cardClass: "fh-card-lavender", badge: "QUANTITATIVE MODEL"
    },
    {
      id: "algo-backtester",
      title: "High-Frequency Algorithmic Trading Backtest Framework",
      subtitle: "Signal Generation, Statistical Arbitrage & Risk Analytics",
      description: "Robust strategy backtesting environment in Python & TypeScript. Automated signal generation, transaction cost modeling, slippage simulation, and performance metrics (Sharpe, Sortino, Calmar, Max Drawdown).",
      tags: ["Algorithmic Trading", "Backtesting", "Time Series", "Risk Analytics"],
      metrics: [{ label: "Sharpe Ratio", val: "2.18" }, { label: "Win Rate", val: "63.5%" }, { label: "Execution", val: "<12ms" }],
      links: [{ label: "GitHub Repository", href: "https://github.com/quashanshayan123ansari" }],
      accentColor: "#ffc435", cardClass: "fh-card-butter", badge: "TRADING ENGINE"
    },
    {
      id: "neural-chord",
      title: "Inter-Market Neural Network Chord Graph Visualizer",
      subtitle: "3D WebGL Cross-Asset Sector Correlation Matrices",
      description: "Dynamic WebGL/3D graph visualization mapping inter-market dependencies and asset class correlations across equities, commodities, interest rates, and cryptocurrency markets.",
      tags: ["Three.js", "WebGL", "Graph Theory", "Data Visualization"],
      metrics: [{ label: "FPS Performance", val: "60 FPS" }, { label: "Node Connections", val: "128" }, { label: "Interactive Modes", val: "Full 3D" }],
      links: [{ label: "Launch Neural Graph", href: "/neural-graph" }],
      accentColor: "#e699d9", cardClass: "fh-card-candy", badge: "VISUALIZATION"
    },
    {
      id: "corporate-analytics",
      title: "Enterprise Corporate Performance Analytics (D-Mart Suite)",
      subtitle: "10-Year Revenue Expansion, EBITDA Margin & ROCE Modeling",
      description: "Comprehensive financial analytics dashboard reconstructing 10-year historical datasets for Avenue Supermarts. Dynamic Excel/CSV parsing, margin waterfall analysis, and headcount optimization.",
      tags: ["Corporate Finance", "Excel Parser", "EBITDA Modeling", "D-Mart"],
      metrics: [{ label: "Historical Horizon", val: "10 Years" }, { label: "ROCE Tracking", val: "49.8% Peak" }, { label: "Excel Integration", val: ".xlsx" }],
      links: [{ label: "View Corporate Suite", href: "/corporate" }],
      accentColor: "#3cdd8c", cardClass: "fh-card-mint", badge: "FINANCIAL DASHBOARD"
    },
    {
      id: "bhu-math",
      title: "BHU Pure & Applied Mathematics Research Collection",
      subtitle: "Academic Proofs, Numerical Analysis & LaTeX Papers",
      description: "Computational and theoretical mathematics repository at BHU. Abstract algebra, differential geometry, numerical ODEs/PDEs, and LaTeX academic publishing.",
      tags: ["Mathematics", "BHU", "LaTeX", "Numerical Analysis"],
      metrics: [{ label: "University", val: "BHU" }, { label: "Degree Track", val: "BS Math" }, { label: "Academic Grade", val: "First Class" }],
      links: [{ label: "Verify BHU Profile", href: "/student/verify/475509" }],
      accentColor: "#e699d9", cardClass: "fh-card-mauve", badge: "ACADEMIC RESEARCH"
    }
  ];

  const SKILLS_CARDS = [
    { title: "Quantitative Finance", desc: "Options pricing, risk parity, stochastic calculus, portfolio optimization", cardClass: "fh-card-mint" },
    { title: "Machine Learning & AI", desc: "Neural networks, time-series forecasting, classification, reinforcement learning", cardClass: "fh-card-lavender" },
    { title: "Financial Mathematics", desc: "PDEs, Black-Scholes, Heston model, Monte Carlo, Greeks computation", cardClass: "fh-card-butter" },
    { title: "Data Engineering", desc: "Excel/CSV parsing, financial datasets, ETL pipelines, interactive dashboards", cardClass: "fh-card-candy" },
    { title: "Algorithmic Trading", desc: "Signal generation, backtesting, slippage modeling, execution frameworks", cardClass: "fh-card-mauve" },
  ];

  const FAQ_ITEMS = [
    { q: "What is your primary area of specialization?", a: "Financial Mathematics and Quantitative Finance — specifically options pricing (Black-Scholes/Heston), risk-parity portfolio construction, and algorithmic trading frameworks." },
    { q: "Are you currently available for collaboration?", a: "Yes! I actively seek research collaborations, internships, and quantitative roles. Reach me at quashanshayan123@gmail.com." },
    { q: "Where can I read your published research?", a: "My paper 'Beyond Markowitz' is published on SSRN (DOI: 10.2139/ssrn.6692678). More papers are in progress at BHU." },
    { q: "Which university are you enrolled in?", a: "Banaras Hindu University (BHU) — pursuing a Bachelor of Science in Mathematics with a focus on pure and applied mathematics." },
    { q: "What tech stack do you work with?", a: "Python (NumPy, SciPy, Pandas, Matplotlib), TypeScript/Next.js, Three.js/WebGL, LaTeX, and Excel/financial modeling tools." },
    { q: "Can I verify your student/academic credentials?", a: "Yes — use the 'Verify BHU Profile' link on the Projects tab or navigate directly to /student/verify/475509." },
    { q: "What is the Neural Graph visualizer?", a: "An interactive 3D WebGL application that maps inter-market dependencies and cross-asset correlations in real-time — launch it from the navigation." },
  ];

  const NAV_TABS: { id: TabType; label: string }[] = [
    { id: "projects",     label: "Projects" },
    { id: "education",    label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "research",     label: "Research" },
    { id: "corporate",    label: "Corporate" },
    { id: "finance",      label: "Analytics" },
    { id: "socials",      label: "Socials" },
  ];

  return (
    <div className={`page-root glow-${activeTab}`}>
      <ThreeBackground activeTab={activeTab} />

      {/* ══════════════════════════════════════════
          HERO BAND — Light Canvas
      ══════════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(2rem, 5vh, 3.5rem) clamp(1.5rem, 4vw, 3.5rem)",
        overflow: "hidden",
        background: "var(--color-paper-white)"
      }}>
        {/* ── Confetti Blobs ── */}
        <div className="fh-blob fh-blob-circle fh-blob-green" style={{ width: 180, height: 180, top: -60, left: -60, opacity: 0.85, animationDelay: "0s" }} />
        <div className="fh-blob fh-blob-rect fh-blob-yellow" style={{ width: 220, height: 220, top: -80, right: -60, opacity: 0.8, animationDelay: "1.5s" }} />
        <div className="fh-blob fh-blob-pill fh-blob-pink" style={{ width: 160, height: 80, top: "38%", left: -70, opacity: 0.75, animationDelay: "3s" }} />
        <div className="fh-blob fh-blob-rect fh-blob-violet" style={{ width: 200, height: 200, bottom: 60, right: -70, opacity: 0.7, animationDelay: "2s" }} />
        <div className="fh-blob fh-blob-circle fh-blob-green" style={{ width: 90, height: 90, bottom: 120, left: "30%", opacity: 0.5, animationDelay: "4s" }} />

        {/* ── Pill Nav ── */}
        <div style={{ position: "relative", zIndex: 10, marginBottom: "clamp(2rem, 5vh, 3.5rem)" }}>
          <nav className="fh-nav-pill">
            <span className="fh-nav-logo">
              <span className="fh-nav-badge">Q</span>
              Mohammad Quashan · Quant Finance
            </span>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Link href="/neural-graph" className="fh-btn-primary" style={{ fontSize: 13, padding: "6px 18px" }}>
                Neural Graph ↗
              </Link>
              <a href="https://ssrn.com/abstract=6692678" target="_blank" rel="noopener noreferrer"
                className="fh-btn-ghost" style={{ fontSize: 13, padding: "6px 18px" }}>
                Research ↗
              </a>
            </div>
          </nav>
        </div>

        {/* ── Hero Content ── */}
        <div style={{ zIndex: 2, maxWidth: 920, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "clamp(1rem, 2vh, 1.75rem)" }}>

          {/* Eyebrow */}
          <span className="fh-eyebrow">BHU · Mathematics · Quantitative Finance</span>

          {/* Display Headline */}
          <h1 className="fh-display" style={{ color: "var(--color-carbon)" }}>
            <div style={{ minHeight: "1.1em" }}>
              {line1}
              {activeCursor === "line1" && <span className="typing-cursor">|</span>}
            </div>
            <div style={{ minHeight: "1.1em" }} className="dynamic-gradient-text">
              {line2}
              {activeCursor === "line2" && <span className="typing-cursor">|</span>}
            </div>
          </h1>

          {/* Font Selector + Terminal */}
          <div style={{ maxWidth: 860 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: "0.72rem", color: "var(--color-graphite)", fontFamily: "var(--font-geist-mono)", flexWrap: "wrap" }}>
              <span style={{ fontWeight: 600 }}>FONT:</span>
              {([
                { id: "fira",      label: "Fira Code" },
                { id: "jetbrains", label: "JetBrains Mono" },
                { id: "space",     label: "Space Grotesk" },
                { id: "outfit",    label: "Outfit" }
              ] as const).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFont(f.id)}
                  className={selectedFont === f.id ? "fh-tag fh-tag-dark" : "fh-tag fh-tag-outline"}
                  style={{ fontFamily: f.id === "fira" ? "'Fira Code',monospace" : f.id === "jetbrains" ? "'JetBrains Mono',monospace" : f.id === "space" ? "'Space Grotesk',sans-serif" : "'Outfit',sans-serif", cursor: "pointer", border: "none" }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Terminal Block */}
            <div className="fh-code-block" style={{ background: "#0d0d0d" }}>
              <div className="fh-code-header">
                <span>quashan@root ~</span>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
                </div>
              </div>
              <div className="fh-code-body" style={{ fontFamily: getFontFamily(), fontSize: "clamp(0.78rem, 1.6vw, 1rem)", minHeight: "2.8em" }}>
                {(activeCursor === "terminal" || terminalText || activeCursor === "none") && (
                  <>
                    <span className="fh-code-kw">quashan@root:~$&nbsp;</span>
                    <span style={{ color: "#e2e8f0" }}>
                      {terminalText}
                      {(activeCursor === "terminal" || activeCursor === "none") && <span className="terminal-cursor">█</span>}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="fh-cta-row">
            <button onClick={scrollToHub} className="fh-btn-primary" id="explore-portfolio-btn">
              Explore Portfolio ↓
            </button>
            <Link href="/neural-graph" className="fh-btn-ghost" id="neural-graph-link">
              🧠 Neural Graph
            </Link>
            <a href="https://www.linkedin.com/in/mqansari123" target="_blank" rel="noopener noreferrer" className="fh-btn-ghost" id="linkedin-link">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* ── Bottom Row ── */}
        <div style={{ display: "flex", justifyContent: "center", zIndex: 2, paddingTop: "1rem" }}>
          <button onClick={scrollToHub} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--color-graphite)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontSize: 12, fontFamily: "var(--font-geist)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-carbon)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-graphite)")}
          >
            scroll
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
            </svg>
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAND — Deep Aubergine (Dark)
      ══════════════════════════════════════════ */}
      <section className="fh-band fh-band-dark">
        {/* tiny confetti on dark band */}
        <div className="fh-blob fh-blob-circle fh-blob-green" style={{ width: 120, height: 120, top: -40, right: "15%", opacity: 0.18, animationDelay: "2s" }} />
        <div className="fh-blob fh-blob-pill fh-blob-pink" style={{ width: 90, height: 45, bottom: -20, left: "10%", opacity: 0.15, animationDelay: "3.5s" }} />

        <div className="fh-band-inner" style={{ position: "relative", zIndex: 1 }}>
          <p className="fh-eyebrow" style={{ color: "var(--color-ash)", marginBottom: 12 }}>By the numbers</p>
          <h2 className="fh-heading fh-heading-white" style={{ marginBottom: 40 }}>
            Quantitative research, built with precision
          </h2>
          <div className="fh-stats-banner">
            {[
              { val: "99.94%", label: "Options Pricing Accuracy" },
              { val: "1.84×",  label: "Max Diversification Ratio" },
              { val: "2.18",   label: "Strategy Sharpe Ratio" },
              { val: "60 FPS", label: "Neural Graph Performance" },
              { val: "10 Yrs", label: "Corporate Analytics Horizon" },
              { val: "1",      label: "Published Research Paper" },
            ].map((s) => (
              <div key={s.label} className="fh-stats-cell">
                <div className="fh-stats-val">{s.val}</div>
                <div className="fh-stats-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Code Demo — 2-col */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48, alignItems: "start" }}>
            <div className="fh-code-block">
              <div className="fh-code-header">
                <span>black_scholes.py</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
              </div>
              <div className="fh-code-body">
                <div><span className="fh-code-kw">import</span> numpy <span className="fh-code-kw">as</span> np</div>
                <div><span className="fh-code-kw">from</span> scipy.stats <span className="fh-code-kw">import</span> norm</div>
                <div>&nbsp;</div>
                <div><span className="fh-code-kw">def</span> <span className="fh-code-fn">black_scholes</span>(S, K, T, r, σ):</div>
                <div>&nbsp;&nbsp;d1 = (np.log(S/K) + (r + σ**2/2)*T) / (σ*np.sqrt(T))</div>
                <div>&nbsp;&nbsp;d2 = d1 - σ * np.sqrt(T)</div>
                <div>&nbsp;&nbsp;<span className="fh-code-kw">return</span> S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)</div>
                <div>&nbsp;</div>
                <div><span className="fh-code-cmt"># Sharpe Ratio: 2.18 · Win Rate: 63.5%</span></div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="fh-card fh-card-white" style={{ borderRadius: 20, padding: 24 }}>
                <p className="fh-eyebrow" style={{ marginBottom: 8 }}>Featured Paper</p>
                <h3 style={{ fontFamily: "var(--font-geist)", fontWeight: 500, fontSize: 16, color: "var(--color-carbon)", lineHeight: 1.45, marginBottom: 12 }}>
                  Beyond Markowitz: Evaluating Maximum Diversification in Multi-Asset Portfolios Under Stressed Market Conditions
                </h3>
                <p style={{ fontSize: 13, color: "var(--color-graphite)", marginBottom: 16, lineHeight: 1.6 }}>
                  Mohammad Quashan Ansari & Dr. Pankaj · BHU · Published May 2026 · IJRPR
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span className="fh-tag fh-tag-green">✦ Published</span>
                  <span className="fh-tag fh-tag-violet">Peer Reviewed</span>
                  <span className="fh-tag fh-tag-outline">DOI: 10.2139/ssrn.6692678</span>
                </div>
                <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
                  <a href="https://ssrn.com/abstract=6692678" target="_blank" rel="noopener noreferrer" className="fh-btn-primary" style={{ fontSize: 13, padding: "6px 16px" }}>
                    Read Paper ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SKILLS BAND — Light Canvas (Tinted Cards)
      ══════════════════════════════════════════ */}
      <section className="fh-band fh-band-light">
        <div className="fh-band-inner">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="fh-eyebrow" style={{ marginBottom: 10 }}>Core Competencies</p>
            <h2 className="fh-heading">Skills &amp; Expertise</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {SKILLS_CARDS.map((s) => (
              <div key={s.title} className={`fh-card ${s.cardClass}`} style={{ cursor: "default" }}>
                <h3 style={{ fontFamily: "var(--font-geist)", fontWeight: 500, fontSize: 16, color: "var(--color-carbon)", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-graphite)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HUB — Main Tab Section
      ══════════════════════════════════════════ */}
      <section id="hub" className="fh-band fh-band-light" style={{ paddingTop: 48 }}>
        <div className="fh-band-inner">

          {/* ── Tab Pill Row ── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <div className="fh-tabs-row">
              {NAV_TABS.map((t) => (
                <button
                  key={t.id}
                  className={`fh-tab${activeTab === t.id ? " active" : ""}`}
                  onClick={() => handleTabClick(t.id)}
                  id={`tab-${t.id}`}
                >
                  {t.label}
                </button>
              ))}
              <Link href="/neural-graph" className="fh-tab" style={{ textDecoration: "none" }}>
                Neural ↗
              </Link>
            </div>
          </div>

          {/* ── Dynamic Tab Content ── */}
          <div style={{ minHeight: 400, animation: "fadeInUp 0.4s ease forwards" }}>

            {/* PROJECTS */}
            {activeTab === "projects" && (
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                <div style={{ marginBottom: 28 }}>
                  <h2 className="fh-heading" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 6 }}>Featured Quantitative Projects</h2>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--color-graphite)", lineHeight: 1.65 }}>
                    Specialized quant finance models, risk-parity algorithms, options pricing systems &amp; computational tools.
                  </p>
                </div>
                <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
                  {PROJECTS.map((proj, pi) => (
                    <div key={proj.id} className="fh-project-card" style={{ borderTop: `3px solid ${proj.accentColor}` }}>
                      {/* Badge */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span className="fh-tag" style={{ background: proj.accentColor + "22", color: proj.accentColor === "#3cdd8c" ? "#166534" : proj.accentColor === "#939eeb" ? "#3730a3" : proj.accentColor === "#ffc435" ? "#854d0e" : "#86198f", border: `1px solid ${proj.accentColor}55`, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em" }}>
                          {proj.badge}
                        </span>
                      </div>

                      <div>
                        <h3 style={{ fontFamily: "var(--font-geist)", fontWeight: 500, fontSize: 16, color: "var(--color-carbon)", marginBottom: 4, lineHeight: 1.35 }}>{proj.title}</h3>
                        <p style={{ fontFamily: "var(--font-geist)", fontSize: 12, color: proj.accentColor === "#3cdd8c" ? "#166534" : proj.accentColor === "#939eeb" ? "#4f46e5" : proj.accentColor === "#ffc435" ? "#92400e" : "#86198f", marginBottom: 10, fontWeight: 500 }}>{proj.subtitle}</p>
                        <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-graphite)", lineHeight: 1.65 }}>{proj.description}</p>
                      </div>

                      {/* Metrics */}
                      <div style={{ display: "grid", gridTemplateColumns: `repeat(${proj.metrics.length}, 1fr)`, gap: 8 }}>
                        {proj.metrics.map((m) => (
                          <div key={m.label} className="fh-metric">
                            <span className="fh-metric-val" style={{ fontSize: 16, color: proj.accentColor === "#3cdd8c" ? "#166534" : proj.accentColor === "#939eeb" ? "#4f46e5" : proj.accentColor === "#ffc435" ? "#92400e" : "#86198f" }}>{m.val}</span>
                            <span className="fh-metric-label">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {proj.tags.map((tag, ti) => (
                          <span key={tag} className={`fh-tag ${TAG_CLASSES[(pi + ti) % TAG_CLASSES.length]}`}>{tag}</span>
                        ))}
                      </div>

                      {/* Links */}
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", paddingTop: 12, borderTop: "1px solid var(--color-silver)" }}>
                        {proj.links.map((link, li) =>
                          link.href.startsWith("http") ? (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                              className={li === 0 ? "fh-btn-primary" : "fh-btn-ghost"}
                              style={{ fontSize: 12, padding: "6px 16px" }}>
                              {link.label} ↗
                            </a>
                          ) : (
                            <Link key={link.label} href={link.href}
                              className={li === 0 ? "fh-btn-primary" : "fh-btn-ghost"}
                              style={{ fontSize: 12, padding: "6px 16px" }}>
                              {link.label} ↗
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NEURAL MAP */}
            {activeTab === "neural" && (
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                <NeuralNetworkChord />
              </div>
            )}

            {/* EDUCATION */}
            {activeTab === "education" && (
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                <div style={{ marginBottom: 28 }}>
                  <h2 className="fh-heading" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 6 }}>Academic Background</h2>
                </div>
                <div className="timeline" style={{ padding: "10px 0 10px 32px" }}>
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="fh-project-card" style={{ borderTop: "3px solid var(--color-sticker-green)" }}>
                      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <div style={{ width: 54, height: 54, borderRadius: 14, background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 16px rgba(255,128,0,0.12)", border: "1px solid rgba(0,0,0,0.08)", padding: 2, flexShrink: 0 }}>
                          <img src="/bhu-logo-custom.png" alt="BHU Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-geist)", fontWeight: 500, fontSize: 18, color: "var(--color-carbon)" }}>Bachelor of Science (BS) in Mathematics</h3>
                            <span className="fh-tag fh-tag-green">2024 — Present</span>
                          </div>
                          <h4 style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "#166534", fontWeight: 500, marginBottom: 10 }}>Banaras Hindu University (BHU)</h4>
                          <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-graphite)", lineHeight: 1.7, marginBottom: 14 }}>
                            Pursuing core theoretical mathematics with focus on algebraic structures, mathematical analysis, differential geometry, numerical analysis, LaTeX typesetting, vector databases, and computational mathematics.
                          </p>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                            <span className="fh-tag fh-tag-outline" style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12 }}>Core Mathematics Major</span>
                            <a href="/student/verify/475509" className="fh-btn-primary" style={{ fontSize: 12, padding: "6px 16px" }}>Verify Profile ↗</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="fh-project-card" style={{ borderTop: "3px solid var(--color-soft-periwinkle)" }}>
                      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <div style={{ width: 54, height: 54, borderRadius: 14, background: "rgba(232,232,252,0.95)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(117,117,240,0.15)", fontSize: "1.6rem", flexShrink: 0 }}>🏫</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 6 }}>
                            <h3 style={{ fontFamily: "var(--font-geist)", fontWeight: 500, fontSize: 18, color: "var(--color-carbon)" }}>Senior Secondary (Class XII — CBSE)</h3>
                            <span className="fh-tag fh-tag-violet">2023 · 85.2%</span>
                          </div>
                          <h4 style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "#4f46e5", fontWeight: 500, marginBottom: 10 }}>Sant Atulanand Convent School, Varanasi</h4>
                          <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-graphite)", lineHeight: 1.7, marginBottom: 14 }}>
                            CBSE Senior Secondary with major concentration in Science & Mathematics. Subjects: English, Mathematics, Physics, Chemistry, Physical Education. Aggregate: 85.2%.
                          </p>
                          <span className="fh-tag fh-tag-outline" style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12 }}>Maths · Physics · Chemistry · English</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CERTIFICATES */}
            {activeTab === "certificates" && (
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                <div style={{ marginBottom: 28 }}>
                  <h2 className="fh-heading" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 6 }}>Certificates &amp; Credentials</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
                  {CERTS.map((cert) => (
                    <div key={cert.url} className="flip-card-wrapper">
                      <div className="flip-card-inner">
                        <div className="glass-panel flip-card-front" style={{ padding: "20px 22px", display: "flex", gap: 14, alignItems: "flex-start", borderTop: `2px solid ${cert.color}`, background: "rgba(255,255,255,0.95)" }}>
                          <div style={{ width: 50, height: 50, borderRadius: 12, background: cert.iconBg, border: `1px solid ${cert.color}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{cert.icon}</div>
                          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                            <div>
                              <h3 style={{ fontSize: "0.87rem", fontWeight: 600, color: "var(--color-carbon)", margin: "0 0 3px", lineHeight: 1.4, fontFamily: "var(--font-geist)" }}>{cert.title}</h3>
                              <p style={{ color: "var(--color-graphite)", fontSize: "0.76rem", margin: "0 0 4px", fontFamily: "var(--font-geist)" }}>{cert.issuer} · {cert.year}</p>
                              {cert.desc && <p style={{ color: "var(--color-graphite)", fontSize: "0.72rem", margin: "0 0 10px", lineHeight: 1.45, opacity: 0.85, fontFamily: "var(--font-geist)" }}>{cert.desc}</p>}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                              <span className="fh-tag" style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30`, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>{cert.platform}</span>
                              <span style={{ fontSize: "0.68rem", color: "var(--color-graphite)", fontStyle: "italic" }}>Hover to flip 🔄</span>
                            </div>
                          </div>
                        </div>
                        <div className="glass-panel flip-card-back" style={{ padding: "20px 22px", borderTop: `2px solid ${cert.color}`, background: `radial-gradient(circle at 100% 0%, ${cert.color}20 0%, rgba(255,255,255,0.95) 80%)` }}>
                          <div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                              <span className="fh-tag" style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}40`, fontSize: 11, fontWeight: 700 }}>💡 SKILLS GAINED</span>
                              <span style={{ fontSize: "0.7rem", color: "var(--color-graphite)", fontFamily: "var(--font-geist-mono)" }}>{cert.platform}</span>
                            </div>
                            <h4 style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-carbon)", margin: "0 0 10px", lineHeight: 1.3, fontFamily: "var(--font-geist)" }}>{cert.title}</h4>
                            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                              {cert.skills && cert.skills.map((skill: string) => (
                                <span key={skill} className="fh-tag fh-tag-outline" style={{ fontSize: 11 }}>
                                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: cert.color, display: "inline-block" }} />
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 8, borderTop: "1px solid var(--color-silver)" }}>
                            <span style={{ fontSize: "0.7rem", color: "var(--color-graphite)", fontFamily: "var(--font-geist)" }}>{cert.issuer}</span>
                            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="fh-btn-primary" style={{ fontSize: 12, padding: "5px 14px" }}>View ↗</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SOCIALS */}
            {activeTab === "socials" && (
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                <div style={{ marginBottom: 28 }}>
                  <h2 className="fh-heading" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 6 }}>Connect &amp; Collaborate</h2>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--color-graphite)", lineHeight: 1.65 }}>Actively engaged across engineering and computational platforms.</p>
                </div>
                <div className="socials-grid" style={{ marginBottom: "3rem" }}>
                  {[
                    { href: "https://github.com/quashanshayan123ansari", label: "GitHub", sub: "@quashanshayan123ansari", cardClass: "fh-card-white", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>) },
                    { href: "https://www.linkedin.com/in/mqansari123", label: "LinkedIn", sub: "@mqansari123", cardClass: "fh-card-lavender", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" /></svg>) },
                    { href: "https://www.kaggle.com/quashanshayan123ansari", label: "Kaggle", sub: "quashanshayan123ansari", cardClass: "fh-card-mint", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 2.25L11.5 12l7.5 9.75h-3.75L8.75 13.5v8.25H5.5V2.25h3.25v9L15.25 2.25H19z" fill="#20BEFF" /></svg>) },
                    { href: "https://leetcode.com/u/quashanshayan123ansari/", label: "LeetCode", sub: "quashanshayan123ansari", cardClass: "fh-card-butter", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.823a1.372 1.372 0 0 0-.025 1.917l.025.026a1.372 1.372 0 0 0 1.917.025l5.228-5.011a1.372 1.372 0 0 0-.025-1.917L13.483 0zm5.111 8.248a1.375 1.375 0 0 0-1.917-.025L11.45 13.234a1.372 1.372 0 0 0-.025 1.917l.025.026a1.372 1.372 0 0 0 1.917.025l5.228-5.011a1.372 1.372 0 0 0-.025-1.917l-.001-.026zm-7.618 6.47l-1.637 1.637a1.372 1.372 0 0 1-1.94 0l-4.26-4.26a1.372 1.372 0 0 1 0-1.94l6.197-6.197c.536-.536 1.405-.536 1.94 0l1.638 1.637c.536.536.536 1.405 0 1.94l-5.228 5.228a1.372 1.372 0 0 0 0 1.94l3.29 3.29c.536.536.536 1.405 0 1.94l-.001.002z" fill="#FFA116" /></svg>) },
                    { href: "https://www.hackerrank.com/profile/quashanshayan123ansari", label: "HackerRank", sub: "quashanshayan123ansari", cardClass: "fh-card-candy", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#2EC866" /><path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" /></svg>) },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`fh-card ${s.cardClass} social-btn`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14 }}>
                      {s.icon}
                      <div>
                        <div style={{ fontFamily: "var(--font-geist)", fontWeight: 600, fontSize: 15, color: "var(--color-carbon)" }}>{s.label}</div>
                        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--color-graphite)", marginTop: 2 }}>{s.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, maxWidth: 700 }}>
                  {[
                    { email: "quashanshayan123@gmail.com", label: "Personal Email" },
                    { email: "mdquashan7497@gmail.com",    label: "Contact Email" },
                  ].map((e) => (
                    <div key={e.email} className="fh-card fh-card-white" style={{ display: "flex", alignItems: "center", gap: 14, padding: 20 }}>
                      <div style={{ width: 42, height: 42, borderRadius: 12, background: "var(--color-lavender-mist)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--color-periwinkle-violet)" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div style={{ overflow: "hidden" }}>
                        <div className="fh-eyebrow" style={{ marginBottom: 2 }}>{e.label}</div>
                        <a href={`mailto:${e.email}`} style={{ fontFamily: "var(--font-geist)", fontSize: 13, fontWeight: 500, color: "var(--color-carbon)", textDecoration: "none", wordBreak: "break-all" }}>{e.email}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CORPORATE */}
            {activeTab === "corporate" && (
              <FinanceDashboard
                defaultTab="corporate"
                allowedTabs={["corporate", "dmart"]}
                title="Corporate Performance Dashboard"
                subtitle="Enterprise financial metrics and trends reconstructed from actual performance datasets."
              />
            )}

            {/* FINANCE */}
            {activeTab === "finance" && (
              <FinanceDashboard
                defaultTab="wealth"
                allowedTabs={["wealth", "optimization"]}
                title="Financial Analytics & Optimization"
                subtitle="Interactive MPT simulator combined with a stochastic Monte Carlo wealth projector."
              />
            )}

            {/* RESEARCH */}
            {activeTab === "research" && (
              <div style={{ animation: "fadeInUp 0.5s ease forwards" }}>
                <div style={{ marginBottom: 28 }}>
                  <h2 className="fh-heading" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 6 }}>Research Papers</h2>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: 14, color: "var(--color-graphite)" }}>Peer-reviewed academic publications · Quantitative Finance &amp; Mathematics</p>
                </div>

                <div className="fh-project-card" style={{ borderTop: "3px solid var(--color-soft-periwinkle)", maxWidth: 800 }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span className="fh-tag fh-tag-green">✦ Published · May 2026</span>
                    <span className="fh-tag fh-tag-violet">Peer Reviewed</span>
                    <span className="fh-tag fh-tag-outline" style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11 }}>DOI: 10.2139/ssrn.6692678</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-geist)", fontWeight: 500, fontSize: 20, color: "var(--color-carbon)", lineHeight: 1.4 }}>
                    Beyond Markowitz: Evaluating Maximum Diversification in Multi-Asset Portfolios Under Stressed Market Conditions
                  </h3>
                  <p style={{ fontFamily: "var(--font-geist)", fontWeight: 600, fontSize: 14, color: "var(--color-carbon)", margin: 0 }}>Mohammad Quashan Ansari, Dr. Pankaj</p>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-graphite)", fontStyle: "italic", margin: 0 }}>Department of Mathematics, Banaras Hindu University (BHU), Varanasi</p>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "#4f46e5", fontWeight: 500, margin: 0 }}>International Journal of Research Publication and Reviews · May 2026</p>

                  <div className="fh-card fh-card-lavender" style={{ padding: "14px 18px", borderRadius: 14 }}>
                    <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, lineHeight: 1.75, color: "var(--color-graphite)", margin: 0 }}>
                      <strong style={{ color: "var(--color-carbon)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>Abstract — </strong>
                      Investigates the limitations of Markowitz&apos;s Mean-Variance Optimization (MVO) — its sensitivity to estimation errors and instability during stressed market regimes — and evaluates Maximum Diversification (MD) portfolios as a robust alternative. Using data from COVID-19, the Russia-Ukraine conflict, and global interest rate tightening cycles, the study analyzes five major asset classes through Diversification Ratio, Sharpe Ratio, and realized volatility.
                    </p>
                  </div>

                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {["Portfolio Optimization", "Maximum Diversification", "Markowitz MVO", "Quantitative Finance", "Market Stress", "Sharpe Ratio"].map((kw, ki) => (
                      <span key={kw} className={`fh-tag ${TAG_CLASSES[ki % TAG_CLASSES.length]}`}>{kw}</span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", paddingTop: 14, borderTop: "1px solid var(--color-silver)" }}>
                    <a href="https://ssrn.com/abstract=6692678" target="_blank" rel="noopener noreferrer" className="fh-btn-primary" style={{ fontSize: 13, padding: "7px 18px" }}>SSRN Abstract ↗</a>
                    <a href="https://doi.org/10.2139/ssrn.6692678" target="_blank" rel="noopener noreferrer" className="fh-btn-ghost" style={{ fontSize: 13, padding: "7px 18px" }}>DOI Link ↗</a>
                    <a href="https://www.linkedin.com/in/mqansari123" target="_blank" rel="noopener noreferrer" className="fh-btn-ghost" style={{ fontSize: 13, padding: "7px 18px" }}>LinkedIn ↗</a>
                  </div>
                </div>

                <div className="fh-card fh-card-butter" style={{ marginTop: 16, maxWidth: 800, display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,196,53,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" /></svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-geist)", fontWeight: 600, fontSize: 14, margin: "0 0 2px", color: "var(--color-carbon)" }}>More research in progress</p>
                    <p style={{ fontFamily: "var(--font-geist)", color: "var(--color-graphite)", fontSize: 13, margin: 0 }}>Ongoing work in stochastic processes, options pricing models &amp; algorithmic trading at BHU.</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ BAND — Periwinkle Violet
      ══════════════════════════════════════════ */}
      <section className="fh-band fh-band-violet" style={{ position: "relative" }}>
        {/* Confetti on violet */}
        <div className="fh-blob fh-blob-circle fh-blob-yellow" style={{ width: 120, height: 120, top: -40, right: "8%", opacity: 0.35, animationDelay: "1s" }} />
        <div className="fh-blob fh-blob-pill fh-blob-green" style={{ width: 80, height: 40, bottom: 20, left: "5%", opacity: 0.3, animationDelay: "2.5s" }} />

        <div className="fh-band-inner" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
            {/* Left */}
            <div style={{ position: "sticky", top: 32 }}>
              <p className="fh-eyebrow" style={{ color: "rgba(0,0,0,0.6)", marginBottom: 12 }}>FAQ</p>
              <h2 className="fh-heading" style={{ fontSize: "clamp(30px, 4vw, 48px)", marginBottom: 16 }}>Questions?<br />Answers.</h2>
              <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, color: "rgba(0,0,0,0.65)", lineHeight: 1.65, marginBottom: 28 }}>
                Everything you need to know about my research, skills, and how to connect.
              </p>
              <div className="fh-cta-row">
                <a href="mailto:quashanshayan123@gmail.com" className="fh-btn-primary">Get in Touch →</a>
                <a href="https://www.linkedin.com/in/mqansari123" target="_blank" rel="noopener noreferrer" className="fh-btn-ghost">LinkedIn ↗</a>
              </div>
            </div>

            {/* Right — Accordion Stack */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx}>
                  <div
                    className={`fh-accordion${openFaq === idx ? " open" : ""}`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    id={`faq-item-${idx}`}
                  >
                    <span className="fh-accordion-q">{item.q}</span>
                    <span className="fh-accordion-icon">+</span>
                  </div>
                  <div className={`fh-accordion-answer${openFaq === idx ? " open" : ""}`}>
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — Dark Aubergine
      ══════════════════════════════════════════ */}
      <footer style={{ background: "var(--color-deep-aubergine)", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-ash)", marginBottom: 12 }}>
            © {new Date().getFullYear()} Mohammad Quashan Ansari · BHU Mathematics · Quantitative Finance
          </p>
          <p style={{ fontFamily: "var(--font-geist-mono)", fontSize: 11, color: "var(--color-slate)", letterSpacing: "0.05em" }}>
            Designed with FastHTML sticker-pack aesthetic · Built with Next.js · Deployed with ♥
          </p>
        </div>
      </footer>
    </div>
  );
}
