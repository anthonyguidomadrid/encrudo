import { Splide, SplideSlide } from 'splide-nextjs/react-splide'

export type HomeSliderProps = {
  items: { url: string }[]
  title: string
  subtitle: string
}

export const SliderBackground = ({
  items,
  title,
  subtitle
}: HomeSliderProps) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 sm:px-10 sm:pb-12">
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
            {!!title && (
              <h1 className="font-sans text-balance text-2xl font-light tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] sm:text-4xl lg:text-5xl">
                {title}
              </h1>
            )}
            {!!subtitle && (
              <p className="mt-3 text-pretty text-lg text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] sm:text-xl lg:text-2xl font-thin">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

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
                className="h-[80vh] bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${image?.url})`
                }}
              />
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}
