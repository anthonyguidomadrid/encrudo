const nextComposePlugins = require('next-compose-plugins')

const headers = require('./config/headers')
const plugins = require('./config/plugins')
const { i18n } = require('./next-i18next.config.js')

/**
 * https://github.com/cyrilwanner/next-compose-plugins/issues/59
 */
const { withPlugins } = nextComposePlugins.extend(() => ({}))

/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = withPlugins(plugins, {
  i18n,
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
  experimental: {
    optimizePackageImports: ['framer-motion']
    // urlImports: true,
    // concurrentFeatures: true,
    // serverComponents: true,
  },
  poweredByHeader: false,
  reactStrictMode: false,
  compress: true,
  // Remove legacy polyfills and enable production tree shaking
  modularizeImports: {},
  // Ensure only used code is bundled
  headers,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**'
      }
    ]
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  async redirects() {
    const redirects = []

    const defaultLocale = i18n?.defaultLocale
    if (defaultLocale) {
      redirects.push(
        {
          source: `/${defaultLocale}`,
          destination: '/',
          permanent: true
        },
        {
          source: `/${defaultLocale}/:path*`,
          destination: '/:path*',
          permanent: true
        }
      )
    }

    // Optional host normalization (www <-> apex) based on NEXT_PUBLIC_SITE_URL.
    // This keeps a single canonical host without hard-coding a domain.
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    if (siteUrl && /^https?:\/\//.test(siteUrl)) {
      try {
        const { hostname } = new URL(siteUrl)
        const preferWww = hostname.startsWith('www.')
        const apex = preferWww ? hostname.slice(4) : hostname
        const www = `www.${apex}`

        const escapeForRegex = value =>
          value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

        if (preferWww) {
          redirects.push({
            source: '/:path*',
            has: [{ type: 'host', value: `^${escapeForRegex(apex)}$` }],
            destination: `https://${www}/:path*`,
            permanent: true
          })
        } else {
          redirects.push({
            source: '/:path*',
            has: [{ type: 'host', value: `^${escapeForRegex(www)}$` }],
            destination: `https://${apex}/:path*`,
            permanent: true
          })
        }
      } catch {
        // ignore invalid NEXT_PUBLIC_SITE_URL
      }
    }

    return redirects
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    // Remove moment.js locales if present
    config.plugins = config.plugins || []
    config.plugins.push(
      new (require('webpack').IgnorePlugin)({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    )
    return config
  }
})
