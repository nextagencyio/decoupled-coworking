import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #b45309 0%, #92400e 100%)', borderRadius: '20%' }}>
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h.01M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
