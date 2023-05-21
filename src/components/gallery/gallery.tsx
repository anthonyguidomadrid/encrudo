import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'

import { Picture } from '../types'

export type GalleryProps = {
  photos: Picture[]
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
  const photoLinks = photos.map(photo => photo.url)
  const [isLightBoxOpen, setLightBoxOpen] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)

  return (
    <>
      {isLightBoxOpen && (
        <Lightbox
          mainSrc={photoLinks[currentIdx]}
          nextSrc={photoLinks[(currentIdx + 1) % photoLinks.length]}
          prevSrc={
            photoLinks[(currentIdx + photoLinks.length - 1) % photoLinks.length]
          }
          onCloseRequest={() => setLightBoxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentIdx(
              (currentIdx + photoLinks.length - 1) % photoLinks.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentIdx((currentIdx + 1) % photoLinks.length)
          }
          enableZoom={false}
          imageCaption={photos[currentIdx].description}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
        {photosColumns.map((photoArray, idx) => (
          <div className="grid gap-10" key={idx}>
            {photoArray.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setLightBoxOpen(true)
                  setCurrentIdx(
                    photos.findIndex(picture => picture.url === photo.url) ?? 0
                  )
                }}
              >
                <Image
                  className="h-full w-full object-cover object-center hover:scale-105 transition duration-500 ease-in-out"
                  src={photo.url}
                  alt={photo.description}
                  width={1200}
                  height={900}
                />
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
