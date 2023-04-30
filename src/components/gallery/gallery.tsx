import Image from 'next/image'

export type GalleryProps = {
  photos: {
    url: string
    description: string
  }[]
  columnAmount: number
}

export const Gallery = ({ photos, columnAmount }: GalleryProps) => {
  const photosPerColumn = Math.round(photos.length / columnAmount)
  const photosColumns = Array.from(Array(columnAmount).keys()).map(idx =>
    photos.slice(
      idx * photosPerColumn,
      idx === columnAmount - 1 ? photos.length : photosPerColumn * (idx + 1)
    )
  )
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
        {photosColumns.map((photoArray, idx) => (
          <div className="grid gap-10" key={idx}>
            {photoArray.map((photo, idx) => (
              <div key={idx}>
                <Image
                  className="h-full w-full hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
                  src={photo.url}
                  alt={photo.description}
                  width={1200}
                  height={900}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
