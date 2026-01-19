import React from 'react'
import { JsonLdScript } from 'next-seo'

export type LogoJsonLdProps = {
  url: string
  logo: string
  scriptId?: string
  scriptKey?: string
}

export const LogoJsonLd: React.FC<LogoJsonLdProps> = ({
  url,
  logo,
  scriptId,
  scriptKey
}) => {
  return (
    <JsonLdScript
      id={scriptId}
      scriptKey={scriptKey || 'logo-jsonld'}
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url,
        logo
      }}
    />
  )
}
