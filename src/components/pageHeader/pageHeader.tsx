import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'

export type PageHeaderProps = {
  header: {
    url: string
  }
  title: string
  description: { json: Document }
}

export const PageHeader = ({
  header: { url },
  title,
  description: { json }
}: PageHeaderProps) => {
  return (
    <>
      <div
        className={`h-screen bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${url})`
        }}
      />
      <div className="text-center py-20 px-10">
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(json)
          }}
          className="max-w-2xl mx-auto pt-5"
        />
      </div>
    </>
  )
}