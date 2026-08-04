'use client'
import { Box, SxProps } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function InstallPrompt() {
  const router = useRouter()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const isStandalone =
      ('standalone' in window.navigator && (window.navigator as any).standalone === true) ||
      window.matchMedia('(display-mode: standalone)').matches

    if (isStandalone) return

    const dismissed = localStorage.getItem('installBannerDismissed')
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10)
      const daysPassed = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24)
      if (daysPassed < 7) return
    }

    const timer = setTimeout(() => setShowBanner(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleGoToAppPage = () => {
    localStorage.setItem('installBannerDismissed', Date.now().toString())
    setShowBanner(false)
    router.push('/application')
  }

  const handleDismiss = () => {
    localStorage.setItem('installBannerDismissed', Date.now().toString())
    setShowBanner(false)
  }

  if (!showBanner) return null

  const bannerStyle: SxProps = {
    position: 'fixed',
    bottom: 16,
    left: 16,
    right: 16,
    bgcolor: 'background.paper',
    borderRadius: 3,
    padding: '14px 16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    zIndex: 9999,
  }

  return (
    <Box sx={bannerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontSize: 14 }}>دارینه رو نصب کن و راحت‌تر استفاده کن</span>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <button
            onClick={handleGoToAppPage}
            style={{
              background: '#FCD535',
              color: 'black',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            نصب
          </button>
          <button
            onClick={handleDismiss}
            style={{ background: 'transparent', border: 'none', fontSize: 14, color: '#757571', cursor: 'pointer' }}
          >
            بعداً
          </button>
        </div>
      </div>
    </Box>
  )
}