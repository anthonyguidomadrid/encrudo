import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'

export type PageHeaderProps = {
  bannerUrl: string
  title: string
  description: Document
}

export const PageHeader = ({
  bannerUrl,
  title,
  description
}: PageHeaderProps) => {
  return (
    <>
      <div
        className={`h-screen bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${bannerUrl})`
        }}
      />
      <div className="text-center py-20 px-10">
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(description)
          }}
          className="max-w-2xl mx-auto pt-5"
        />
      </div>
    </>
  )
}
