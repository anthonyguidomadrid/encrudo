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
  return (
    <header
      role="banner"
      className={`h-screen flex flex-col justify-center text-center text-white p-10 drop-shadow bg-gray-400 bg-blend-multiply\tbg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage: `url(${image?.url})`
      }}
    >
      <h1 className="pb-3">{title}</h1>
      <h2 className="pb-4 text-lg uppercase">{subtitle}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="max-w-4xl mx-auto space-y-4"
      />
    </header>
  )
}
