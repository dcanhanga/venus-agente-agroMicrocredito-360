export function Footer() {
  return (
    <footer className=" bg-blue-200 ">
      <div className="container p-10">
        <div className=" flex items-center flex-wrap gap-20 justify-center">
          <ImageWrapper>
            {' '}
            <img src="/sme.jpeg" alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src="/sic.jpeg" alt="" />
          </ImageWrapper>
          <ImageWrapper>
            {' '}
            <img src="/pna.jpeg" alt="" />
          </ImageWrapper>
          <ImageWrapper>
            {' '}
            <img src="/lex.jpeg" alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src="/bombeiros.jpeg" alt="" />
          </ImageWrapper>
        </div>
      </div>
      <p className="border-t-2 border-divider p-5 flex justify-center">
        Copyright {new Date().getFullYear()} - Ministério do Interior
      </p>
    </footer>
  )
}
type ImageWrapperProps = {
  children: React.ReactNode
}
function ImageWrapper(props: Readonly<ImageWrapperProps>) {
  const { children } = props
  return (
    <div className="w-20 h-20 overflow-hidden rounded-full">{children}</div>
  )
}
