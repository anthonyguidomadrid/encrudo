import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import {
  BreadcrumbItem,
  Breadcrumbs
} from '@src/components/breadcrumbs/breadcrumbs'

export type PageHeaderProps = {
  header: {
    url: string
  }
  title: string
  description?: { json: Document }
}

export const PageHeader = ({
  header: { url },
  title,
  description
}: PageHeaderProps) => {
  const { asPath } = useRouter()
  const { t } = useTranslation()
  const BREADCRUMBS: BreadcrumbItem[] = [
    { label: t('link.home'), href: '/' },
    { label: title, href: asPath }
  ]
  return (
    <>
      <div
        className={`h-[80vh] bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${url})`
        }}
      />
      <Breadcrumbs items={BREADCRUMBS} />
      <div className="text-center py-20 px-10">
        <h1>{title}</h1>
        {description && (
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(description.json)
            }}
            className="max-w-2xl mx-auto pt-5 space-y-4"
          />
        )}
      </div>
    </>
  )
}
