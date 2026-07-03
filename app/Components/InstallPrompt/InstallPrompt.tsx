'use client'
import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function isIos() {
  if (typeof window === 'undefined') return false
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
}

function isInStandaloneMode() {
  if (typeof window === 'undefined') return false
  return (
    'standalone' in window.navigator && (window.navigator as any).standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches
  )
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showAndroidBanner, setShowAndroidBanner] = useState(false)
  const [showIosBanner, setShowIosBanner] = useState(false)

  useEffect(() => {
    if (isInStandaloneMode()) return

    const dismissed = localStorage.getItem('installBannerDismissed')
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10)
      const daysPassed = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24)
      if (daysPassed < 7) return // ۷ روز صبر کن قبل از نمایش دوباره
    }

    if (isIos()) {
      // یه کم تاخیر بده تا مزاحم لحظه‌ی اول ورود نشه
      const timer = setTimeout(() => setShowIosBanner(true), 8000)
      return () => clearTimeout(timer)
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowAndroidBanner(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    setShowAndroidBanner(false)
    setDeferredPrompt(null)
    if (outcome === 'dismissed') {
      localStorage.setItem('installBannerDismissed', Date.now().toString())
    }
  }

  const handleDismiss = (isIosBanner: boolean) => {
    localStorage.setItem('installBannerDismissed', Date.now().toString())
    if (isIosBanner) setShowIosBanner(false)
    else setShowAndroidBanner(false)
  }

  const bannerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 16,
    left: 16,
    right: 16,
    background: '#fff',
    border: '1px solid #D4D4D2',
    borderRadius: 12,
    padding: '14px 16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    zIndex: 9999,
    direction: 'rtl',
    fontFamily: 'inherit',
  }

  if (showAndroidBanner) {
    return (
      <div style={bannerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontSize: 14 }}>دارینه رو نصب کن و راحت‌تر استفاده کن</span>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <button
              onClick={handleInstall}
              style={{ background: '#6DA9E1', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontSize: 14 }}
            >
              نصب
            </button>
            <button
              onClick={() => handleDismiss(false)}
              style={{ background: 'transparent', border: 'none', fontSize: 14, color: '#757571' }}
            >
              بعداً
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showIosBanner) {
    return (
      <div style={bannerStyle}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ fontSize: 14, lineHeight: 1.8 }}>
            برای نصب دارینه روی گوشی: دکمه‌ی{' '}
            <strong>Share</strong>{' '}
            (مربع با فلش رو به بالا) رو بزن، بعد{' '}
            <strong>Add to Home Screen</strong> رو انتخاب کن.
          </div>
          <button
            onClick={() => handleDismiss(true)}
            style={{ background: 'transparent', border: 'none', fontSize: 18, color: '#757571', flexShrink: 0 }}
          >
            ×
          </button>
        </div>
      </div>
    )
  }

  return null
}