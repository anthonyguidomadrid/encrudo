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
    <div
      className="h-screen flex flex-col justify-center text-center text-white p-10 drop-shadow"
      style={{
        backgroundColor: '#bfbfbf',
        backgroundBlendMode: 'multiply',
        backgroundImage: `url(${image?.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="pb-3">{title}</h1>
      <p className="pb-4 text-lg uppercase">{subtitle}</p>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="max-w-4xl mx-auto"
      />
    </div>
  )
}
