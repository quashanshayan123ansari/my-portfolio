import React, { useEffect, useRef, useState, useCallback, useMemo } from "react"; 
import Globe from "@/components/ui/globe";
import { cn } from "@/lib/utils";

// Reusable ScrollGlobe component following shadcn/ui patterns
export interface ScrollGlobeProps {
  sections: {
    id: string;
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    align?: 'left' | 'center' | 'right';
    features?: { title: string; description: string }[];
    actions?: { label: string; variant: 'primary' | 'secondary'; onClick?: () => void }[];
    contentNode?: React.ReactNode;
  }[];
  globeConfig?: {
    positions: {
      top: string;
      left: string;
      scale: number;
    }[];
  };
  className?: string;
}

const defaultGlobeConfig = {
  positions: [
    { top: "50%", left: "75%", scale: 1.4 },  // Hero: Right side, balanced
    { top: "25%", left: "50%", scale: 0.9 },  // Innovation: Top side, subtle
    { top: "15%", left: "90%", scale: 2 },  // Discovery: Left side, medium
    { top: "50%", left: "50%", scale: 1.8 },  // Future: Center, large backdrop
  ]
};

// Utility function to smoothly interpolate between values
const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

// Parse percentage string to number
const parsePercent = (str: string): number => parseFloat(str.replace('%', ''));

export function ScrollGlobe({ sections, globeConfig = defaultGlobeConfig, className }: ScrollGlobeProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [globeTransform, setGlobeTransform] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const animationFrameId = useRef<number>(0);
  
  // Pre-calculate positions for performance
  const calculatedPositions = useMemo(() => {
    return globeConfig.positions.map(pos => ({
      top: parsePercent(pos.top),
      left: parsePercent(pos.left),
      scale: pos.scale
    }));
  }, [globeConfig.positions]);

  // Simple, direct scroll tracking
  const updateScrollPosition = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(docHeight > 0 ? scrollTop / docHeight : 0, 0), 1);
    
    setScrollProgress(progress);

    // Simple section detection
    const viewportCenter = window.innerHeight / 2;
    let newActiveSection = 0;
    let minDistance = Infinity;

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = index;
        }
      }
    });

    // Direct position update
    const currentPos = calculatedPositions[newActiveSection] || calculatedPositions[0];
    const transform = `translate3d(${currentPos.left}vw, ${currentPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${currentPos.scale}, ${currentPos.scale}, 1)`;
    
    setGlobeTransform(transform);
    setActiveSection(newActiveSection);
  }, [calculatedPositions]);

  // Throttled scroll handler with RAF
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        animationFrameId.current = requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollPosition(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [updateScrollPosition]);

  // Initial globe position
  useEffect(() => {
    if (calculatedPositions.length > 0) {
      const initialPos = calculatedPositions[0];
      const initialTransform = `translate3d(${initialPos.left}vw, ${initialPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${initialPos.scale}, ${initialPos.scale}, 1)`;
      setGlobeTransform(initialTransform);
    }
  }, [calculatedPositions]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full max-w-screen overflow-x-hidden min-h-screen bg-background text-foreground",
        className
      )}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-border/20 via-border/40 to-border/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-indigo-600 will-change-transform shadow-sm"
          style={{ 
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: 'left center',
            transition: 'transform 0.15s ease-out',
            filter: 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))'
          }}
        />
      </div>

      {/* Enhanced Navigation with auto-hiding labels - Fully Responsive */}
      <div className="hidden sm:flex fixed right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {sections.map((section, index) => (
            <div key={section.id || index} className="relative group">
              {/* Auto-hiding section label */}
              <div
                className={cn(
                  "nav-label absolute right-5 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2",
                  "px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap",
                  "bg-background/95 backdrop-blur-md border border-border/60 shadow-xl z-50 transition-all duration-300",
                  activeSection === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100"
                )}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs sm:text-sm lg:text-base font-semibold">
                    {section.badge || `Section ${index + 1}`}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  sectionRefs.current[index]?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
                className={cn(
                  "relative w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 transition-all duration-300 hover:scale-125 cursor-pointer",
                  "before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300",
                  activeSection === index 
                    ? "bg-amber-500 border-amber-500 shadow-lg shadow-amber-500/40 before:animate-ping before:bg-amber-500/30" 
                    : "bg-transparent border-muted-foreground/40 hover:border-amber-500/60 hover:bg-amber-500/10"
                )}
                aria-label={`Go to ${section.badge || `section ${index + 1}`}`}
              />
            </div>
          ))}
        </div>
        
        {/* Enhanced navigation line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 lg:w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent -translate-x-1/2 -z-10" />
      </div>

      {/* Ultra-smooth Globe with responsive scaling */}
      <div
        className="fixed z-10 pointer-events-none will-change-transform transition-all duration-[1400ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transform: globeTransform,
          filter: `opacity(${activeSection === 3 ? 0.45 : 0.85})`,
        }}
      >
        <div className="scale-75 sm:scale-90 lg:scale-100">
          <Globe />
        </div>
      </div>

      {/* Dynamic sections - fully responsive */}
      {sections.map((section, index) => (
        <section
          key={section.id || index}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className={cn(
            "relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-20 py-12 sm:py-16 lg:py-20",
            "w-full max-w-full overflow-hidden",
            section.align === 'center' && "items-center text-center",
            section.align === 'right' && "items-end text-right",
            section.align !== 'center' && section.align !== 'right' && "items-start text-left"
          )}
        >
          <div className={cn(
            "w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl will-change-transform transition-all duration-700",
            "opacity-100 translate-y-0"
          )}>
            {section.badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs sm:text-sm font-mono mb-4 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                {section.badge}
              </div>
            )}
            
            <h1 className={cn(
              "font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight",
              index === 0 
                ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl" 
                : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            )}>
              {section.subtitle ? (
                <div className="space-y-1 sm:space-y-2">
                  <div className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    {section.title}
                  </div>
                  <div className="text-amber-500/90 text-[0.6em] sm:text-[0.7em] font-medium tracking-wider uppercase font-mono">
                    {section.subtitle}
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  {section.title}
                </div>
              )}
            </h1>
            
            <div className={cn(
              "text-muted-foreground/90 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl font-light",
              section.align === 'center' ? "max-w-full mx-auto text-center" : "max-w-full"
            )}>
              <p className="mb-3 sm:mb-4">{section.description}</p>
              {index === 0 && (
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground/60 mt-4 sm:mt-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>Interactive 3D Portfolio</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span>Scroll to Explore Research & Skills</span>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Features - Responsive grid */}
            {section.features && (
              <div className="grid gap-3 sm:gap-4 mb-8 sm:mb-10 sm:grid-cols-2 lg:grid-cols-3">
                {section.features.map((feature, featureIndex) => (
                  <div 
                    key={feature.title}
                    className={cn(
                      "group p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl border bg-card/60 backdrop-blur-md hover:bg-card/90 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10",
                      "hover:border-amber-500/30 hover:-translate-y-1"
                    )}
                    style={{ animationDelay: `${featureIndex * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 rounded-full bg-amber-500/80 mt-2 group-hover:bg-amber-400 transition-colors flex-shrink-0 shadow-sm shadow-amber-500" />
                      <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                        <h3 className="font-semibold text-foreground text-base sm:text-lg group-hover:text-amber-400 transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground/80 leading-relaxed text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Custom Content Node Injection */}
            {section.contentNode && (
              <div className="my-6">
                {section.contentNode}
              </div>
            )}

            {/* Enhanced Actions - Responsive buttons */}
            {section.actions && (
              <div className={cn(
                "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4",
                section.align === 'center' && "justify-center",
                section.align === 'right' && "justify-end",
                (!section.align || section.align === 'left') && "justify-start"
              )}>
                {section.actions.map((action, actionIndex) => (
                  <button
                    key={action.label}
                    onClick={action.onClick}
                    className={cn(
                      "group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base cursor-pointer",
                      "hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 w-full sm:w-auto",
                      action.variant === 'primary' 
                        ? "bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 font-semibold" 
                        : "border border-border/80 bg-background/70 backdrop-blur-sm hover:bg-accent/60 hover:border-amber-500/40 text-foreground"
                    )}
                    style={{ animationDelay: `${actionIndex * 0.1 + 0.2}s` }}
                  >
                    <span className="relative z-10">{action.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

// Demo component showcasing the ScrollGlobe
export default function GlobeScrollDemo() {
  const demoSections = [
    {
      id: "hero",
      badge: "Financial Mathematics & Quant",
      title: "Mohammad Quashan Ansari",
      subtitle: "Quantitative Finance & Algorithmic Engineering",
      description: "Developing options pricing models, simulating stochastic jump-diffusion processes, and engineering high-frequency algorithmic trading frameworks.",
      align: "left" as const,
      actions: [
        { label: "Explore Interactive Hub", variant: "primary" as const, onClick: () => {
          const el = document.getElementById("hub");
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }},
        { label: "View Verified Record", variant: "secondary" as const, onClick: () => window.open('/student/verify/475509', '_blank') },
      ]
    },
    {
      id: "education",
      badge: "Academic Foundation",
      title: "Banaras Hindu University",
      subtitle: "Bachelor of Science in Mathematics (2024–2028)",
      description: "Rigorous training in pure mathematics, real analysis, linear algebra, stochastic modeling, and numerical methods at India's top academic institute.",
      align: "center" as const,
    },
    {
      id: "research",
      badge: "Quantitative Research",
      title: "Beyond Markowitz",
      subtitle: "Evaluating Maximum Diversification & Equal Risk Contribution",
      description: "Comparative study of Modern Portfolio Theory vs. Risk Parity strategies under extreme market volatility and heavy-tailed asset distributions.",
      align: "left" as const,
      features: [
        { title: "Risk Parity Engineering", description: "Equal Risk Contribution optimization with non-convex constraints" },
        { title: "Stochastic Volatility", description: "Monte Carlo simulation of Heston and GARCH(1,1) volatility dynamics" },
        { title: "Algorithmic Execution", description: "Backtesting quantitative alpha signals on tick-level asset data" }
      ]
    },
    {
      id: "credentials",
      badge: "Industry Accreditations",
      title: "Global Corporate Certifications",
      subtitle: "Corporate Finance Institute, Yale, McKinsey & Wall Street",
      description: "Certified by CFI (Reading Financial Statements & 3-Statement Modeling), Yale Financial Markets, McKinsey Forward, Goldman Sachs, Deloitte & J.P. Morgan.",
      align: "center" as const,
      actions: [
        { label: "View All Credentials", variant: "primary" as const, onClick: () => window.open('/certificates', '_self') }
      ]
    }
  ];

  return (
    <ScrollGlobe 
      sections={demoSections}
      className="bg-gradient-to-br from-background via-muted/20 to-background"
    />
  );
}
