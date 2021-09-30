import telegram from './telegram.png';

function ArrowRight ({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2 12L15.7 21H12.2L17.7 13.5H2V10.5H17.7L12.2 3H15.7L22.2 12Z" />
    </svg>
  )
}

function ArrowDown({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6.66675V9.8334L10 13.6667L5 9.8334V6.66675L10 10.5001L15 6.66675Z" />
    </svg>

  )
}

function Telegram({ className }) {
  return <img
           className={className}
           src={telegram.src}
         />
}

const Heading = () => <h1 className="font-bold text-4xl lg:text-6xl">Teach yourself anything.</h1>

function Message() {
  return (
    <>
      <p>
        Our mission is to provide games that empower every child in the world to learn, create, and inspire.
      </p>
      <br/>
      <p>
        Learn the core subjects through games that boosts imagination, spark creativity, and encorage problem solving.
      </p>
    </>
  )
}

function InsideButton() {
  return (
    <>
      <span></span> <span>Join the waitlist</span>
      <span>
        <ArrowRight className="hidden md:hidden lg:block w-4 h-4 text-white fill-current"/>
        <ArrowDown className="md:hidden w-4 h-4 text-white fill-current"/>
        <div className="hidden md:block lg:hidden">
          <Telegram className="w-4 h-4" />
        </div>
      </span>
    </>

  )
}

function Button () {
  return (
    <button className="flex bg-black md:bg-white lg:bg-black text-white md:text-black lg:text-white px-3 py-2 md:px-10 lg:px-3 rounded text-sm items-center justify-between space-x-7 md:space-x-2 lg:space-x7 md:border md:border-black md:border-2 lg:border-0 md:border-opacity-100 md:shadow-btn lg:shadow-none">
      <InsideButton/>
    </button>
  )
}


export default function Dialog() {
  return (
      <div className="absolute flex w-screen h-screen justify-center items-center">
        <div className="bg-white w-3/4 lg:w-1/2 rounded-xl">
          <div className="flex flex-col p-12 space-y-8 h-full">
            <div><Heading/></div>
            <div><Message /></div>
            <div className="flex justify-center lg:justify-start"><Button /></div>
          </div>
        </div>
      </div>
  )
}
