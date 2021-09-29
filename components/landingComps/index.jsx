import Dialog from './dialog'

function Container({ children }) {
  return (
    <div className="w-screen h-screen bg-black">
      {children}
    </div>
  )

}


function Footer({ children }) {
  return (
      <div className="absolute flex w-screen h-screen justify-center items-end">
          <div className="bg-white w-full h-20">
            {children}
          </div>
      </div>
  )
}

export {
  Container,
  Dialog,
  Footer,
}
