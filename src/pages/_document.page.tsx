import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GA_TRACKING_ID, GTAG_TRACKING_ID } from '@src/helpers/gtag'

export default function Document(props) {
  const favicons =
    props?.__NEXT_DATA__?.props?.data?.assetsCollection?.items?.[0].favicons ||
    {}

  const faviconUrls = {
    appleTouchIcon: favicons?.appleTouchIcon?.url,
    favicon96X96: favicons?.favicon96X96?.url,
    faviconIco: favicons?.faviconIco?.url,
    faviconSvg: favicons?.faviconSvg?.url,
    webAppManifest192: favicons?.webAppManifest192?.url,
    webAppManifest512: favicons?.webAppManifest512?.url,
    manifestUrl: favicons?.manifestUrl || null
  }

  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Apple Touch Icon */}
        {faviconUrls.appleTouchIcon ? (
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={faviconUrls.appleTouchIcon}
          />
        ) : null}
        {/* PNG Favicons */}
        {faviconUrls.favicon96X96 ? (
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={favicons.favicon96X96}
          />
        ) : null}
        {/* SVG Favicon */}
        {faviconUrls.faviconSvg ? (
          <link rel="icon" type="image/svg+xml" href={faviconUrls.faviconSvg} />
        ) : null}
        {/* ICO Favicon */}
        {faviconUrls.faviconIco ? (
          <link rel="icon" type="image/x-icon" href={faviconUrls.faviconIco} />
        ) : null}
        {/* Web App Manifest */}
        {faviconUrls.manifestUrl ? (
          <link rel="manifest" href={faviconUrls.manifestUrl} />
        ) : null}
        {/* Web App Manifest PNGs */}
        {faviconUrls.webAppManifest192 ? (
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={faviconUrls.webAppManifest192}
          />
        ) : null}
        {faviconUrls.webAppManifest512 ? (
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href={faviconUrls.webAppManifest512}
          />
        ) : null}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
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
