export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string
export const GTAG_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID

type CustomEvent = 'form_contact'
type CustomParams = {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * This function is used to track page views.
 * https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 * */
export const pageView = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })

}

/**
 * https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * If you want to track events, you can use the gtag.js event method.
 * */
export const event = (action: Gtag.EventNames | CustomEvent, { event_category, event_label, value }: Gtag.EventParams & CustomParams) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value
  })
}
