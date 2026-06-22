import { ImageResponse } from "next/og";

export const alt = "Zeeshan Waheed - iOS Developer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at 82% 16%, rgba(255, 98, 44, 0.24), transparent 32%), radial-gradient(circle at 10% 100%, rgba(76, 170, 255, 0.16), transparent 38%), #08090d",
          color: "white",
          display: "flex",
          fontFamily: "Arial, Helvetica, sans-serif",
          height: "100%",
          padding: "42px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "34px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            overflow: "hidden",
            padding: "48px 54px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #ff6137, #ff9b43)",
              height: "4px",
              left: "54px",
              position: "absolute",
              top: "0",
              width: "180px",
            }}
          />

          <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
            <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
              <img
                alt=""
                height={72}
                src="https://zeeshanwaheed.dev/icons/swift.png"
                style={{ borderRadius: "18px" }}
                width={72}
              />
              <div
                style={{
                  color: "rgba(255,255,255,0.56)",
                  display: "flex",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Apple-platform development
              </div>
            </div>

            <div
              style={{
                color: "rgba(255,255,255,0.42)",
                display: "flex",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Karachi, Pakistan
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "78px",
                fontWeight: 700,
                letterSpacing: "-4px",
                lineHeight: 1,
              }}
            >
              Zeeshan Waheed
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.72)",
                display: "flex",
                fontSize: "36px",
                fontWeight: 600,
                marginTop: "20px",
              }}
            >
              iOS Developer
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.48)",
                display: "flex",
                fontSize: "25px",
                lineHeight: 1.45,
                marginTop: "24px",
                maxWidth: "870px",
              }}
            >
              Native iOS apps, AI-powered tools, and polished Apple-platform products.
            </div>
          </div>

          <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
            <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
              {[
                "Swift / UIKit",
                "SwiftUI / visionOS",
                "Python / AI",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    color: "rgba(255,255,255,0.7)",
                    display: "flex",
                    fontSize: "17px",
                    fontWeight: 600,
                    padding: "10px 16px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{ color: "rgba(255,255,255,0.78)", display: "flex", fontSize: "22px", fontWeight: 700 }}>
              zeeshanwaheed.dev
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
