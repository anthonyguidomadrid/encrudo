import React from 'react'
import { JsonLdScript } from 'next-seo'

export type WebPageJsonLdProps = {
  id: string
  url: string
  name?: string | null
  description?: string | null
  scriptId?: string
  scriptKey?: string
}

export const WebPageJsonLd: React.FC<WebPageJsonLdProps> = ({
  id,
  url,
  name,
  description,
  scriptId,
  scriptKey
}) => {
  return (
    <JsonLdScript
      id={scriptId}
      scriptKey={scriptKey || 'webpage-jsonld'}
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': id,
        url,
        ...(name ? { name } : {}),
        ...(description ? { description } : {})
      }}
    />
  )
}
