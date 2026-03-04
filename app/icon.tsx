import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ fontSize: 24, background: '#b45309', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: '50%' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h.01M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
