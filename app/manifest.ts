import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'دارینه',
    short_name: 'دارینه',
    description: 'دارینه | پلتفرم آنلاین خرید و فروش طلا',
    start_url: '/',
    display: 'standalone',
    dir: 'rtl',
    lang: 'fa',
    background_color: '#FFFFFF',
    theme_color: '#FCD535',
    icons: [
      { src: '/darine.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/darine.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/darine.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}