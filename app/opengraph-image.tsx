import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Redika Westama Putra — Fullstack Web Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f0f13 0%, #13111c 50%, #0f0f13 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative orb top-right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          }}
        />
        {/* Decorative orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "200px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#818cf8",
            }}
          />
          <span style={{ color: "#818cf8", fontSize: "14px", letterSpacing: "3px" }}>
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Redika Westama Putra
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "400",
            background: "linear-gradient(90deg, #818cf8, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "40px",
          }}
        >
          Fullstack Web Engineer
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Laravel", "Next.js", "TypeScript", "PostgreSQL", "MySQL"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#9ca3af",
                fontSize: "14px",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "rgba(255,255,255,0.2)",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          redikawest-portofolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
