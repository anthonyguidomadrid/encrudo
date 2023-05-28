export type FooterWrapperProps = React.PropsWithChildren & {
  title: string
}

export const FooterWrapper = ({ children, title }: FooterWrapperProps) => (
  <div className="flex flex-col gap-2">
    <p className="uppercase font-medium">{title}</p>
    {children}
  </div>
)
