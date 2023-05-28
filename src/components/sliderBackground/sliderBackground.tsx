import { Splide, SplideSlide } from 'splide-nextjs/react-splide'

export type HomeSliderProps = {
  items: { url: string }[]
}

export const SliderBackground = ({ items }: HomeSliderProps) => {
  return (
    <Splide
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
        return (
          <SplideSlide key={idx}>
            <div
              className="h-screen	bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${image?.url})`
              }}
            />
          </SplideSlide>
        )
      })}
    </Splide>
  )
}
