"use client";

export default function OGImage() {
  return (
    <>
      <style jsx global>{`
        [data-nextjs-dialog-overlay],
        [data-nextjs-dialog],
        nextjs-portal,
        #__next-build-indicator,
        header,
        footer,
        nav,
        #main-content > :not(.og-wrapper),
        a[href="#main-content"] {
          display: none !important;
        }
        body {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          min-height: auto !important;
          background: #1a1a1a !important;
        }
        main {
          padding: 0 !important;
          margin: 0 !important;
        }
      `}</style>
      <div
        className="og-wrapper"
        style={{
          width: 1200,
          height: 630,
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Cormorant', Georgia, serif",
          background: "#1a1a1a",
        }}
      >
        {/* Background Image */}
        <img
          src="/images/jm-carcamo.png"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.45,
          }}
        />

        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.4) 50%, rgba(26,26,26,0.7) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(to top, rgba(26,26,26,0.9) 0%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 80px",
          }}
        >
          {/* Top: Label */}
          <div>
            <span
              style={{
                fontFamily: "'Geist', 'Helvetica Neue', sans-serif",
                fontSize: 13,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(212,206,200,0.7)",
              }}
            >
              Escultor &mdash; Santiago de Chile
            </span>
          </div>

          {/* Center-bottom: Main text */}
          <div>
            {/* Name */}
            <h1
              style={{
                fontSize: 82,
                fontWeight: 300,
                fontStyle: "italic",
                color: "#fffff8",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              José Miguel
            </h1>
            <h1
              style={{
                fontSize: 82,
                fontWeight: 400,
                fontStyle: "normal",
                color: "#fffff8",
                lineHeight: 1.05,
                letterSpacing: "0.06em",
                margin: "4px 0 0 0",
              }}
            >
              Cárcamo
            </h1>

            {/* Divider + Subtitle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginTop: 32,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 1,
                  background: "rgba(212,206,200,0.4)",
                }}
              />
              <span
                style={{
                  fontFamily: "'Geist', 'Helvetica Neue', sans-serif",
                  fontSize: 14,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(212,206,200,0.6)",
                }}
              >
                Atemporalidad &middot; Existencia &middot; Materialidad
              </span>
            </div>

            {/* URL */}
            <div style={{ marginTop: 28 }}>
              <span
                style={{
                  fontFamily: "'Geist', 'Helvetica Neue', sans-serif",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  color: "rgba(212,206,200,0.4)",
                }}
              >
                carcamo.strixsoft.com
              </span>
            </div>
          </div>
        </div>

        {/* Subtle border */}
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "1px solid rgba(212,206,200,0.1)",
            pointerEvents: "none",
            zIndex: 20,
          }}
        />
      </div>
    </>
  );
}
