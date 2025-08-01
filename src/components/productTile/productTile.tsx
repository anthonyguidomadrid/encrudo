import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Picture } from '../types'
import { LINKS } from '@src/constants/links'

export type ProductTileProps = {
  project: {
    title: string
    subtitle: string
    slug: string
    thumbnail: Picture
  }
}

export const ProductTile = ({ project }: ProductTileProps) => {
  return (
    <article className="flex items-center justify-center">
      <Link
        href={`${LINKS.PROJECTS}/${project.slug}`}
        tabIndex={-1}
        aria-label={`Ver proyecto: ${project.title}`}
        className="block w-full h-full"
      >
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="overflow-hidden cursor-pointer relative group uppercase text-center m-0"
        >
          <Image
            alt={project.thumbnail.description}
            className="object-cover aspect-square sm:group-hover:scale-110 transition duration-300 ease-in-out"
            src={project.thumbnail.url}
            width={500}
            height={500}
          />
          <figcaption className="z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white h-full flex justify-center items-end">
            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out w-full">
              <h2>{project.title}</h2>
              <div className="opacity-60 text-sm">{project.subtitle}</div>
            </div>
          </figcaption>
        </motion.figure>
      </Link>
    </article>
  )
}
