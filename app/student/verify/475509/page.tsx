"use client";

import Link from "next/link";

export default function StudentVerifyPage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f7f5ec",
      color: "#222",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: "20px 16px 60px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {/* Top Navigation */}
      <div style={{ width: "100%", maxWidth: "940px", marginBottom: "20px" }}>
        <Link 
          href="/education" 
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            color: "#6b1515",
            fontSize: "0.85rem",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid #e2dcc8"
          }}
        >
          ← BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Main Container Card */}
      <div style={{
        width: "100%",
        maxWidth: "940px",
        backgroundColor: "#fffdf7",
        borderRadius: "24px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
        border: "1px solid #e8e2cf",
        padding: "clamp(20px, 4vw, 40px)",
        overflow: "hidden"
      }}>
        
        {/* BHU Official Header Banner */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #ebdcb9",
          paddingBottom: "24px",
          marginBottom: "32px"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "12px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <img 
              src="/bhu-logo-custom.png" 
              alt="Banaras Hindu University Logo" 
              style={{ height: "64px", objectFit: "contain" }} 
            />
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#7a1c1c", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "0.02em" }}>
                काशी हिन्दू विश्वविद्यालय
              </div>
              <div style={{ color: "#1a2e40", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                BANARAS HINDU UNIVERSITY
              </div>
              <div style={{ color: "#666", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                AN INSTITUTION OF NATIONAL IMPORTANCE ESTABLISHED BY AN ACT OF PARLIAMENT
              </div>
            </div>
          </div>

          <h1 style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#d97706",
            marginTop: "8px",
            letterSpacing: "0.02em",
            textAlign: "center"
          }}>
            Student Verification
          </h1>
        </div>

        {/* Two Column Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "stretch"
        }}>

          {/* Left Column: Student ID Badge Card */}
          <div style={{
            background: "linear-gradient(145deg, #7a1c1c 0%, #4a0e0e 100%)",
            borderRadius: "20px",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "#ffffff",
            boxShadow: "0 10px 25px rgba(122, 28, 28, 0.25)"
          }}>
            {/* Student Photo */}
            <div style={{
              width: "160px",
              height: "190px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "3px solid #eab308",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              backgroundColor: "#ffffff",
              marginBottom: "20px"
            }}>
              <img 
                src="/quashan-student.jpg" 
                alt="Mohammad Quashan Ansari" 
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>

            {/* Student Name & Program */}
            <h2 style={{ fontSize: "1.45rem", fontWeight: 700, margin: "0 0 6px 0", color: "#ffffff" }}>
              Mohammad Quashan Ansari
            </h2>
            <div style={{ fontSize: "0.9rem", color: "#fcd34d", fontWeight: 500, lineHeight: 1.4, marginBottom: "24px" }}>
              Bachelor of Science (Honours) in Mathematics
            </div>

            {/* Enrolment Box */}
            <div style={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              borderRadius: "12px",
              padding: "12px 16px",
              border: "1px solid rgba(255, 255, 255, 0.15)"
            }}>
              <div style={{ fontSize: "0.75rem", color: "#d1d5db", letterSpacing: "0.1em", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                ENROLMENT NUMBER
              </div>
              <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", fontFamily: "monospace", letterSpacing: "0.08em" }}>
                475509
              </div>
            </div>
          </div>

          {/* Right Column: Verified Details Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Department */}
              <div style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ebdcb9",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#fef3c7",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#b45309", flexShrink: 0
                }}>
                  🏛️
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716c", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    DEPARTMENT
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1c1917", marginTop: "4px" }}>
                    Faculty of Science
                  </div>
                </div>
              </div>

              {/* Programme */}
              <div style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ebdcb9",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#fef3c7",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#b45309", flexShrink: 0
                }}>
                  📖
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716c", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    PROGRAMME
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1c1917", marginTop: "4px", lineHeight: 1.3 }}>
                    Bachelor of Science (Honours) in Mathematics
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Valid From */}
              <div style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ebdcb9",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#fef3c7",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#b45309", flexShrink: 0
                }}>
                  📅
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716c", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    VALID FROM
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1c1917", marginTop: "4px", fontFamily: "monospace" }}>
                    2023-JULY
                  </div>
                </div>
              </div>

              {/* Valid To */}
              <div style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ebdcb9",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px", backgroundColor: "#fef3c7",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#b45309", flexShrink: 0
                }}>
                  📅
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#78716c", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    VALID TO
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1c1917", marginTop: "4px", fontFamily: "monospace" }}>
                    2027-JULY
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Student Record Banner */}
            <div style={{
              backgroundColor: "#ffffff",
              border: "1px solid #a7f3d0",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.08)"
            }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#d1fae5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#059669",
                fontSize: "1.4rem",
                fontWeight: "bold",
                flexShrink: 0
              }}>
                ✓
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#065f46" }}>
                  Verified Student Record
                </div>
                <div style={{ fontSize: "0.85rem", color: "#047857", marginTop: "2px" }}>
                  This student record has been successfully verified by Banaras Hindu University.
                </div>
              </div>
            </div>

            {/* Additional Academic Metadata Panel */}
            <div style={{
              backgroundColor: "rgba(245, 242, 230, 0.7)",
              borderRadius: "14px",
              padding: "14px 18px",
              fontSize: "0.8rem",
              color: "#57534e",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              border: "1px solid #e7e2d0"
            }}>
              <div>
                <strong>Course Code:</strong> UGG181R · <strong>Status:</strong> Active Enrolled
              </div>
              <a 
                href="https://bhu.samarth.edu.in" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#b45309", fontWeight: 600, textDecoration: "none" }}
              >
                BHU Samarth Portal ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
