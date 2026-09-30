"use client";

import Link from "next/link";
import ThreeBackground from "../components/ThreeBackground";

const TAG_CLASSES = ["fh-tag-green", "fh-tag-violet", "fh-tag-yellow", "fh-tag-pink", "fh-tag-outline"];

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

export default function ProjectsPage() {
  return (
    <div className="page-root glow-projects">
      <ThreeBackground activeTab="projects" />

      <header style={{ padding: "2rem clamp(2rem, 8vw, 8rem)", zIndex: 10, position: "relative" }}>
        <Link href="/" className="fh-btn-ghost" style={{ fontSize: 13, padding: "6px 18px" }}>
          ← Back to Home
        </Link>
      </header>

      <main style={{ position: "relative", zIndex: 1, padding: "0 clamp(2rem, 8vw, 8rem) 4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 40, animation: "fadeInUp 0.5s ease forwards" }}>
            <p className="fh-eyebrow" style={{ marginBottom: 10 }}>Portfolio</p>
            <h1 className="fh-heading" style={{ fontSize: "clamp(32px, 5vw, 56px)", marginBottom: 8 }}>Featured Quantitative Projects</h1>
            <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, color: "var(--color-graphite)", lineHeight: 1.65, maxWidth: 700 }}>
              Specialized quant finance models, risk-parity algorithms, options pricing systems &amp; computational tools.
            </p>
          </div>

          <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {PROJECTS.map((proj, pi) => (
              <div key={proj.id} className="fh-project-card" style={{ borderTop: `3px solid ${proj.accentColor}`, animation: `fadeInUp 0.5s ease ${pi * 0.08}s forwards`, opacity: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="fh-tag" style={{ background: proj.accentColor + "22", color: proj.accentColor === "#3cdd8c" ? "#166534" : proj.accentColor === "#939eeb" ? "#3730a3" : proj.accentColor === "#ffc435" ? "#854d0e" : "#86198f", border: `1px solid ${proj.accentColor}55`, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em" }}>
                    {proj.badge}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-geist)", fontWeight: 500, fontSize: 17, color: "var(--color-carbon)", marginBottom: 4, lineHeight: 1.35 }}>{proj.title}</h3>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: 12, color: proj.accentColor === "#3cdd8c" ? "#166534" : proj.accentColor === "#939eeb" ? "#4f46e5" : proj.accentColor === "#ffc435" ? "#92400e" : "#86198f", marginBottom: 10, fontWeight: 500 }}>{proj.subtitle}</p>
                  <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-graphite)", lineHeight: 1.65 }}>{proj.description}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${proj.metrics.length}, 1fr)`, gap: 8 }}>
                  {proj.metrics.map((m) => (
                    <div key={m.label} className="fh-metric">
                      <span className="fh-metric-val" style={{ fontSize: 16, color: proj.accentColor === "#3cdd8c" ? "#166534" : proj.accentColor === "#939eeb" ? "#4f46e5" : proj.accentColor === "#ffc435" ? "#92400e" : "#86198f" }}>{m.val}</span>
                      <span className="fh-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {proj.tags.map((tag, ti) => (
                    <span key={tag} className={`fh-tag ${TAG_CLASSES[(pi + ti) % TAG_CLASSES.length]}`}>{tag}</span>
                  ))}
                </div>
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
      </main>

      <footer style={{ background: "var(--color-deep-aubergine)", padding: "48px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, color: "var(--color-ash)" }}>
          © {new Date().getFullYear()} Mohammad Quashan Ansari · BHU Mathematics · Quantitative Finance
        </p>
      </footer>
    </div>
  );
}
