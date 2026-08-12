import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Generated fallback so social shares always have a branded card even before the
// real Ibiza photography is dropped into /public/og/vivra-og.jpg (see ASSETS_NEEDED.md).
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #26221D 0%, #57603E 55%, #1A6259 100%)',
          color: '#FBF9F5',
        }}
      >
        <div style={{ fontSize: 96, letterSpacing: 12, fontWeight: 600 }}>VIVRA</div>
        <div style={{ fontSize: 28, marginTop: 20, opacity: 0.85 }}>
          Ibiza Founding Retreat · Coming Live Soon
        </div>
      </div>
    ),
    { ...size }
  )
}
