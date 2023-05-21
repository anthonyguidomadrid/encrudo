import Link from 'next/link'
import { ReactElement } from 'react'

export type ButtonProps = {
  label: string
  icon?: ReactElement
  link: string
  additionalClasses?: string
}

export const Button = ({
  label,
  link,
  icon,
  additionalClasses
}: ButtonProps) => {
  return (
    <Link href={link} className="mx-auto">
      <button
        className={`flex items-center gap-3 hover:opacity-80 uppercase bg-transparent text-grey-dark py-2 px-4 hover:border-transparent ${additionalClasses}`}
      >
        {icon}
        {label}
      </button>
    </Link>
  )
}
