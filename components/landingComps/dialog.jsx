function ArrowRight ({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2 12L15.7 21H12.2L17.7 13.5H2V10.5H17.7L12.2 3H15.7L22.2 12Z" fill="white"/>
    </svg>
  )
}

function Button () {
  return (
    <button className="flex bg-black text-white px-3 py-2 rounded text-sm items-center justify-between space-x-7">
      <span></span> <span>Join the waitlist</span><span><ArrowRight className="w-4 h-4"/></span>
    </button>
  )
}


export default function Dialog() {
  return (
      <div className="absolute flex w-screen h-screen justify-center items-center">
        <div className="bg-white lg:w-1/2 md:w-3/4 sm:w-3/4 rounded-xl">
          <div className="flex flex-col p-12 space-y-8 h-full">
            <div> <h1 className="font-bold text-6xl">Teach yourself anything.</h1> </div>
            <div>
              <p>
                Our mission is to provide games that empower every child in the world to learn, create, and inspire.
              </p>
              <br/>
              <p>
                Learn the core subjects through games that boosts imagination, spark creativity, and encorage problem solving.
              </p>
            </div>
            <div> <Button /> </div>
          </div>
        </div>
      </div>
  )
}
