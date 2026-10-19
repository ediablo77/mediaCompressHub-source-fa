import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isElectron = mode === 'electron' || mode === 'electron-dev'

  return {
    base: mode === 'electron' ? './' : '/',
    plugins: [
      react(),
      VitePWA({
        disable: isElectron,
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg'],
        manifest: {
          name: 'فشرده‌ساز رسانه',
          short_name: 'فشرده‌ساز',
          description: 'کاهش حجم ویدیو، تصویر و GIF در مرورگر؛ بدون آپلود فایل',
          theme_color: '#07080c',
          background_color: '#07080c',
          display: 'standalone',
          start_url: '/',
          lang: 'fa',
          dir: 'rtl',
          icons: [
            {
              src: 'favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,svg}'],
        },
      }),
    ],
  }
})
