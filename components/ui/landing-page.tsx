import React, { useEffect, useRef, useState, useCallback } from "react"; 
import Globe from "@/components/ui/globe";
import { cn } from "@/lib/utils";

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
  className?: string;
}

export function ScrollGlobe({ sections, className }: ScrollGlobeProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const updateScrollPosition = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(docHeight > 0 ? scrollTop / docHeight : 0, 0), 1);
    
    setScrollProgress(progress);

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

    setActiveSection(newActiveSection);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollPosition();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateScrollPosition]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full overflow-x-hidden min-h-screen bg-[#030712] text-slate-100",
        className
      )}
    >
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-sky-500 will-change-transform shadow-sm"
          style={{ 
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: 'left center',
            transition: 'transform 0.1s ease-out',
            filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))'
          }}
        />
      </div>

      {/* Right Side Navigation Dots */}
      <div className="hidden sm:flex fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={section.id || index} className="relative group">
              <div
                className={cn(
                  "nav-label absolute right-7 top-1/2 -translate-y-1/2",
                  "px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap",
                  "bg-slate-950/90 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 pointer-events-none",
                  activeSection === index ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-slate-200">
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
                  "relative w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 hover:scale-125 cursor-pointer block",
                  activeSection === index 
                    ? "bg-amber-500 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]" 
                    : "bg-transparent border-slate-600 hover:border-amber-400 hover:bg-amber-400/20"
                )}
                aria-label={`Go to ${section.badge || `section ${index + 1}`}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Ambient 3D Revolving Globe Background (Stable Right-Side Focal Position on Desktop) */}
      <div className="fixed pointer-events-none z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[6%] lg:translate-x-0 opacity-25 lg:opacity-90 transition-opacity duration-700">
        <Globe />
      </div>

      {/* Content Sections */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {sections.map((section, index) => (
          <section
            key={section.id || index}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="min-h-screen flex flex-col justify-center py-20 lg:py-28"
          >
            <div className="w-full max-w-2xl lg:max-w-3xl space-y-6">
              {section.badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-wider uppercase backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {section.badge}
                </div>
              )}
              
              <div className="space-y-2">
                <h1 className={cn(
                  "font-bold leading-tight tracking-tight text-white",
                  index === 0 ? "text-3xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-4xl lg:text-5xl"
                )}>
                  {section.title}
                </h1>

                {section.subtitle && (
                  <p className="text-amber-400/90 text-xs sm:text-sm lg:text-base font-mono font-semibold tracking-wider uppercase">
                    {section.subtitle}
                  </p>
                )}
              </div>
              
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light max-w-2xl">
                {section.description}
              </p>

              {/* Feature Cards Grid */}
              {section.features && (
                <div className="grid gap-4 mt-6 sm:grid-cols-2">
                  {section.features.map((feature) => (
                    <div 
                      key={feature.title}
                      className="p-5 rounded-xl border border-white/10 bg-slate-950/70 backdrop-blur-md hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group"
                    >
                      <h3 className="font-semibold text-slate-100 text-base mb-1.5 group-hover:text-amber-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Custom Content Node */}
              {section.contentNode && (
                <div className="my-6">
                  {section.contentNode}
                </div>
              )}

              {/* Action Buttons */}
              {section.actions && (
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {section.actions.map((action) => (
                    <button
                      key={action.label}
                      onClick={action.onClick}
                      className={cn(
                        "px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer shadow-lg active:scale-95",
                        action.variant === 'primary' 
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 font-semibold shadow-amber-500/20" 
                          : "border border-white/15 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:border-amber-500/30"
                      )}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ScrollGlobe;
