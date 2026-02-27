import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import Script from 'next/script'
import { GA_TRACKING_ID, GTAG_TRACKING_ID } from '@src/helpers/gtag'

export default function Document(props: DocumentProps) {
  const locale = props?.__NEXT_DATA__?.locale

  return (
    <Html lang={locale || 'es'} className="scroll-smooth">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <Script
          id={GA_TRACKING_ID}
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id={GA_TRACKING_ID}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_TRACKING_ID}`}
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_TRACKING_ID}');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
