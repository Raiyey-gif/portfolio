// app/opengraph-image.tsx
import { ImageResponse } from "next/og"

export const alt = "Ranandra | Web Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 80, background: "#120805", color: "#f1e3cc" }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#2f5bff" }}>PORTFOLIO</div>
        <div style={{ display: "flex", fontSize: 110, fontWeight: 700, lineHeight: 1 }}>Raisah Kirana Candra</div>
        <div style={{ display: "flex", fontSize: 40, opacity: 0.75, marginTop: 20 }}>Ranandra · Full-stack developer · Next.js, React, WebGL</div>
      </div>
    ),
    { ...size }
  )
}
