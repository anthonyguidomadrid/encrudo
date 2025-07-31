const fetch = require('node-fetch')
const { i18n } = require('./next-i18next.config.js')

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_DELIVERY_API_TOKEN
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master'
const CONTENTFUL_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
const STATIC_PAGES = [
  'contacto',
  'proyectos',
  'sobre-nosotros',
  'proteccion-datos',
  'aviso-legal'
]
const LOCALES = i18n.locales || ['es', 'en']

async function fetchProjectSlugs() {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) return []

  const query = `
    {
      pageProjectsCollection(limit: 10) {
        items {
          projectsCollection(limit: 100) {
            items {
              slug
            }
          }
        }
      }
    }
  `

  const res = await fetch(CONTENTFUL_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query })
  })

  const data = await res.json()
  return (
    data?.data?.pageProjectsCollection?.items?.flatMap(
      item => item?.projectsCollection?.items || []
    ) || []
  )
}

function getProjectPaths(slug) {
  return {
    loc: `proyectos/${slug}`,
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString()
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404', '**/404', '/500'],
  i18n,
  additionalPaths: async () => {
    const staticPaths = STATIC_PAGES.map(page => ({
      loc: `${LOCALES[1]}/${page}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }))

    staticPaths.push({
      loc: LOCALES[1],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    })

    const projects = await fetchProjectSlugs()

    const projectPaths = projects
      .filter(project => project?.slug)
      .flatMap(project => {
        const base = getProjectPaths(project.slug)
        return [
          base,
          {
            ...base,
            loc: `${LOCALES[1]}/${base.loc}`
          }
        ]
      })

    return [...staticPaths, ...projectPaths]
  }
}
