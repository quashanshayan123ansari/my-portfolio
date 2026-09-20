"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollGlobe } from "@/components/ui/landing-page";

export default function Home() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [terminalText, setTerminalText] = useState("");
  const [activeCursor, setActiveCursor] = useState<"line1" | "line2" | "terminal" | "none">("line1");

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
    
    timer1 = setInterval(() => {
      if (i1 < text1.length) {
        setLine1(text1.substring(0, i1 + 1));
        i1++;
      } else {
        clearInterval(timer1);
        setActiveCursor("line2");
        
        timeout1 = setTimeout(() => {
          timer2 = setInterval(() => {
            if (i2 < text2.length) {
              setLine2(text2.substring(0, i2 + 1));
              i2++;
            } else {
              clearInterval(timer2);
              setActiveCursor("terminal");
              
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

  const portfolioGlobeSections = [
    {
      id: "hero",
      badge: "Financial Mathematics & Quant",
      title: "Mohammad Quashan Ansari",
      subtitle: "QUANTITATIVE FINANCE & ALGORITHMIC ENGINEERING",
      description: "Developing options pricing models, simulating stochastic jump-diffusion processes, and engineering high-frequency algorithmic trading frameworks with high-dimensional statistical modeling.",
      align: "left" as const,
      contentNode: (
        <div className="p-4 sm:p-5 rounded-xl border border-amber-500/20 bg-slate-950/85 backdrop-blur-md font-mono text-sm shadow-2xl my-4 max-w-2xl">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10 text-xs text-slate-400">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-slate-400 font-semibold">quashan-quant-terminal ~ bash</span>
          </div>
          <div className="space-y-1.5">
            <div className="text-amber-400 font-bold text-base">{line1}</div>
            <div className="text-emerald-400 font-bold text-lg">{line2}</div>
            <div className="text-slate-200 mt-2 leading-relaxed">
              <span className="text-sky-400 font-semibold">quashan@root:~$ </span>
              {terminalText}
              {(activeCursor === "terminal" || activeCursor === "none") && <span className="terminal-cursor">█</span>}
            </div>
          </div>
        </div>
      ),
      actions: [
        { label: "VERIFY BHU STUDENT PROFILE ↗", variant: "primary" as const, onClick: () => window.open('/student/verify/475509', '_blank') },
        { label: "MASTER NEURAL GRAPH ↗", variant: "secondary" as const, onClick: () => window.open('/neural-graph', '_self') },
      ]
    },
    {
      id: "education",
      badge: "Verified Academic Distinction",
      title: "Banaras Hindu University",
      subtitle: "BS MATHEMATICS (2024–2028) | ENROLMENT #475509",
      description: "Rigorous theoretical mathematics, real analysis, abstract algebra, linear algebra, stochastic calculus, LaTeX, and numerical methods at India's preeminent central university.",
      align: "center" as const,
      features: [
        { title: "Banaras Hindu University (BHU)", description: "BS Mathematics (2024–2028), Enrolment #475509. Core Mathematics major, analytical proofs, real analysis & ODEs." },
        { title: "Sant Atulanand Convent School", description: "CBSE Class 12th (2023) — 85.2% Aggregate in Mathematics, Physics & Chemistry." }
      ],
      actions: [
        { label: "Verify BHU Student Profile ↗", variant: "primary" as const, onClick: () => window.open('/student/verify/475509', '_blank') },
        { label: "Verify 12th Academic Record ↗", variant: "secondary" as const, onClick: () => window.open('/student/verify/12th', '_blank') }
      ]
    },
    {
      id: "research",
      badge: "Quantitative Research",
      title: "Beyond Markowitz Optimization",
      subtitle: "EQUAL RISK CONTRIBUTION & MAXIMUM DIVERSIFICATION UNDER FAT-TAILED REGIMES",
      description: "Author of peer quantitative finance papers evaluating Modern Portfolio Theory vs Risk Parity strategies under extreme volatility shifts and non-Gaussian asset returns.",
      align: "left" as const,
      features: [
        { title: "Risk Parity Optimization", description: "Non-convex Equal Risk Contribution optimization across volatile multi-asset portfolios." },
        { title: "Stochastic Volatility Sims", description: "Monte Carlo simulation of Heston and GARCH(1,1) volatility dynamics." },
        { title: "Algorithmic Backtesting", description: "Backtesting quantitative alpha signals on tick-level asset data." }
      ],
      actions: [
        { label: "Explore Financial Analytics ↘", variant: "primary" as const, onClick: () => window.open('/finance', '_self') },
        { label: "Read Research Publication ↗", variant: "secondary" as const, onClick: () => window.open('https://ssrn.com/abstract=6692678', '_blank') }
      ]
    },
    {
      id: "credentials",
      badge: "Global Industry Accreditations",
      title: "Corporate Finance & Wall Street",
      subtitle: "CFI, YALE, MCKINSEY, GOLDMAN SACHS, DELOITTE, J.P. MORGAN",
      description: "Certified by Corporate Finance Institute (Reading Financial Statements & 3-Statement Modeling), Yale Financial Markets (Robert Shiller), McKinsey Forward, Goldman Sachs, Deloitte & J.P. Morgan.",
      align: "center" as const,
      features: [
        { title: "Corporate Finance Institute (CFI)", description: "Reading Financial Statements & Introduction to 3-Statement Financial Modeling." },
        { title: "Yale University", description: "Financial Markets Certification by Prof. Robert Shiller." },
        { title: "Wall Street & Big 4 Virtual", description: "McKinsey Forward Program, Goldman Sachs Software Eng, Deloitte Analytics & JPMC." }
      ],
      actions: [
        { label: "View All 15+ Credentials ↗", variant: "primary" as const, onClick: () => window.open('/certificates', '_self') },
        { label: "Corporate Analytics ↗", variant: "secondary" as const, onClick: () => window.open('/corporate', '_self') }
      ]
    },
    {
      id: "connect",
      badge: "Global Technical Network",
      title: "Socials & Direct Contact",
      subtitle: "GITHUB, LINKEDIN, KAGGLE, LEETCODE, HACKERRANK",
      description: "Engage across open-source computational repositories, data science kernels, algorithmic challenges, and direct academic channels.",
      align: "center" as const,
      actions: [
        { label: "GitHub Profile ↗", variant: "primary" as const, onClick: () => window.open('https://github.com/quashanshayan123ansari', '_blank') },
        { label: "LinkedIn Connect ↗", variant: "secondary" as const, onClick: () => window.open('https://www.linkedin.com/in/mqansari123', '_blank') }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* Sleek Fixed Dark Navigation Bar */}
      <header className="fixed top-0 left-0 w-full h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 z-50 px-4 sm:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-emerald-500 flex items-center justify-center font-mono font-bold text-black text-sm shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            Q
          </div>
          <span className="font-mono text-sm font-semibold tracking-wider text-slate-200 group-hover:text-amber-400 transition-colors">
            QUASHAN.ANSARI
          </span>
        </Link>

        {/* Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-400">
          <Link href="/student/verify/475509" className="hover:text-amber-400 transition-colors">BHU VERIFY</Link>
          <Link href="/education" className="hover:text-amber-400 transition-colors">EDUCATION</Link>
          <Link href="/certificates" className="hover:text-amber-400 transition-colors">CERTIFICATES</Link>
          <Link href="/finance" className="hover:text-amber-400 transition-colors">FINANCE</Link>
          <Link href="/neural-graph" className="hover:text-amber-400 transition-colors">NEURAL MAP</Link>
          <Link href="/socials" className="hover:text-amber-400 transition-colors">SOCIALS</Link>
        </nav>
      </header>

      {/* Main Interactive 3D ScrollGlobe Landing Experience */}
      <div className="pt-16">
        <ScrollGlobe sections={portfolioGlobeSections} className="bg-transparent" />
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-slate-950 text-center text-xs font-mono text-slate-400">
        <p>© {new Date().getFullYear()} Mohammad Quashan Ansari. Financial Mathematics & Quantitative Finance.</p>
      </footer>
    </div>
  );
}
