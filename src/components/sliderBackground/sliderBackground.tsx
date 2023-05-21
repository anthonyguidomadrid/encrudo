import { Splide, SplideSlide } from 'splide-nextjs/react-splide'

export type HomeSliderProps = {
  items: { url: string }[]
}

export const SliderBackground = ({ items }: HomeSliderProps) => {
  return (
    <Splide
      aria-label="Home Slider"
      options={{
        type: 'fade',
        rewind: true,
        autoplay: true,
        interval: 3000,
        speed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false
      }}
    >
      {items?.map((image, idx) => {
        console.log({ image })
        return (
          <SplideSlide key={idx}>
            <div
              className="h-screen"
              style={{
                backgroundImage: `url(${image?.url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </SplideSlide>
        )
      })}
    </Splide>
  )
}
