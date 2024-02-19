export const GoogleMap = () => (
  <iframe
    src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL}
    width="100%"
    height="450"
    style={{
      border: 0,
      outline: 0
    }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Encrudo Google Map"
  />
)
