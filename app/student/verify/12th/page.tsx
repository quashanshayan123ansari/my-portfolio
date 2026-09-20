"use client";

import Link from "next/link";

export default function Class12VerifyPage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f4f6f9",
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
            color: "#1e3a8a",
            fontSize: "0.85rem",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid #dbeafe"
          }}
        >
          ← BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Main Container Card */}
      <div style={{
        width: "100%",
        maxWidth: "940px",
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
        border: "1px solid #e2e8f0",
        padding: "clamp(20px, 4vw, 40px)",
        overflow: "hidden"
      }}>
        
        {/* Header Banner */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "24px",
          marginBottom: "32px",
          textAlign: "center"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "12px",
            justifyContent: "center"
          }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              backgroundColor: "#1e3a8a",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8rem",
              fontWeight: 800,
              boxShadow: "0 6px 16px rgba(30, 58, 138, 0.25)"
            }}>
              🏫
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#1e3a8a", fontWeight: 800, fontSize: "1.35rem", letterSpacing: "0.01em" }}>
                SANT ATULANAND CONVENT SCHOOL
              </div>
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                AFFILIATED TO CENTRAL BOARD OF SECONDARY EDUCATION (CBSE), NEW DELHI
              </div>
            </div>
          </div>

          <h1 style={{
            fontSize: "clamp(1.4rem, 2.8vw, 1.8rem)",
            fontWeight: 800,
            color: "#2563eb",
            marginTop: "8px",
            letterSpacing: "0.02em"
          }}>
            Class 12th Academic Record Verification
          </h1>
        </div>

        {/* Two Column Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          alignItems: "stretch"
        }}>

          {/* Left Column: Student Badge */}
          <div style={{
            background: "linear-gradient(145deg, #1e3a8a 0%, #0f172a 100%)",
            borderRadius: "20px",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "#ffffff",
            boxShadow: "0 10px 25px rgba(30, 58, 138, 0.25)"
          }}>
            {/* Photo */}
            <div style={{
              width: "160px",
              height: "190px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "3px solid #38bdf8",
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

            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px 0", color: "#ffffff" }}>
              Mohammad Quashan Ansari
            </h2>
            <div style={{ fontSize: "0.9rem", color: "#38bdf8", fontWeight: 500, lineHeight: 1.4, marginBottom: "24px" }}>
              Senior Secondary (Class XII - CBSE)
            </div>

            {/* Score Box */}
            <div style={{
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "14px",
              padding: "16px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              backdropFilter: "blur(8px)"
            }}>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", letterSpacing: "0.1em", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                OVERALL AGGREGATE GRADE
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#38bdf8", fontFamily: "monospace", letterSpacing: "0.02em" }}>
                85.2%
              </div>
            </div>
          </div>

          {/* Right Column: Subjects & Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between" }}>
            
            {/* Subjects Panel */}
            <div style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "20px"
            }}>
              <div style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "14px" }}>
                ENROLLED CLASS 12TH SUBJECTS
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[
                  "Mathematics",
                  "Physics",
                  "Chemistry",
                  "English",
                  "Physical Education"
                ].map((subject) => (
                  <div key={subject} style={{
                    padding: "8px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #cbd5e1",
                    color: "#1e293b",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <span style={{ color: "#2563eb" }}>•</span> {subject}
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Banner */}
            <div style={{
              backgroundColor: "#f0fdf4",
              border: "1px solid #86efac",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#16a34a",
                fontSize: "1.4rem",
                fontWeight: "bold",
                flexShrink: 0
              }}>
                ✓
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#14532d" }}>
                  Verified Academic Record
                </div>
                <div style={{ fontSize: "0.85rem", color: "#166534", marginTop: "2px" }}>
                  This Class XII academic performance record is verified for Sant Atulanand Convent School.
                </div>
              </div>
            </div>

            {/* School External Link Panel */}
            <div style={{
              backgroundColor: "#f1f5f9",
              borderRadius: "14px",
              padding: "14px 18px",
              fontSize: "0.82rem",
              color: "#475569",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              border: "1px solid #e2e8f0"
            }}>
              <div>
                <strong>Institution:</strong> Sant Atulanand Convent School, Varanasi · <strong>Passing Year:</strong> 2023
              </div>
              <a 
                href="https://www.santatulanand.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}
              >
                Official School Website ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
