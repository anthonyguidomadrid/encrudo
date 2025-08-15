import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { LINKS } from '@src/constants/links'
import {
  BreadcrumbItem,
  Breadcrumbs
} from '@src/components/breadcrumbs/breadcrumbs'

export type ProjectHeaderProps = {
  image: {
    url: string
  }
  title: string
  subtitle: string
  description: string
}

export const ProjectHeader = ({
  image,
  title,
  subtitle,
  description
}: ProjectHeaderProps) => {
  const { t } = useTranslation()
  const { asPath } = useRouter()
  const BREADCRUMBS: BreadcrumbItem[] = [
    { label: t('link.home'), href: LINKS.HOME },
    { label: t('link.projects'), href: LINKS.PROJECTS },
    { label: title, href: asPath }
  ]
  return (
    <>
      <header
        role="banner"
        className={`relative h-[80vh] flex flex-col justify-center text-center text-white p-10 bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${image?.url})`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="pb-3">{title}</h1>
          <h2 className="pb-4 text-lg uppercase">{subtitle}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="max-w-4xl mx-auto space-y-4"
          />
        </div>
      </header>
      <Breadcrumbs items={BREADCRUMBS} />
    </>
  )
}
