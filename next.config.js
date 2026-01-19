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
  experimental: {
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
