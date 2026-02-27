const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPWA = require('next-pwa')

const runtimeCaching = [
  {
    urlPattern: /\/\/_next\/static\/.*$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'next-static',
      expiration: {
        maxEntries: 256,
        maxAgeSeconds: 60 * 60 * 24 * 365
      }
    }
  },
  {
    urlPattern: /\/\/_next\/image\?.*$/i,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'next-image',
      expiration: {
        maxEntries: 256,
        maxAgeSeconds: 60 * 60 * 24 * 30
      }
    }
  },
  {
    urlPattern: /^https?:.*\.(?:woff2?|ttf|otf|eot)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'font-assets',
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 60 * 60 * 24 * 365
      }
    }
  },
  {
    urlPattern: /^https?:.*\.(?:png|gif|jpg|jpeg|webp|svg|ico)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'image-assets',
      expiration: {
        maxEntries: 256,
        maxAgeSeconds: 60 * 60 * 24 * 30
      }
    }
  }
]

module.exports = [
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV !== 'production',
        dest: `public`,
        register: false,
        runtimeCaching,
        skipWaiting: true,
        clientsClaim: true,
        publicExcludes: ['!favicon/**/*']
      }
    }
  ],
  [
    withBundleAnalyzer,
    {
      enabled: process.env.BUNDLE_ANALYZE === 'true'
    }
  ]
]
