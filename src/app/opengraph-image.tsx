import { ImageResponse } from "next/og";

export const alt = "Lumis — Digital clarity for what's next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f3ec",
          color: "#171512",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", opacity: 0.55 }}>
          LUMIS.XYZ
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>Digital clarity for what&apos;s next.</div>
          <div style={{ marginTop: 24, fontSize: 28, opacity: 0.65 }}>
            Websites, digital products and custom solutions.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
