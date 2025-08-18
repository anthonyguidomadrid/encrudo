interface GoogleMapsProps {
  googleMapsUrl: string
}
export const GoogleMap: React.FC<GoogleMapsProps> = ({ googleMapsUrl }) => (
  <iframe
    src={googleMapsUrl}
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
