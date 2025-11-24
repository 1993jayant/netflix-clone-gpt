import React, { useEffect, useRef, useState, type ChangeEvent } from 'react'

const Home = () => {
  const [email, setEmail] = useState("");
  const getStartedInputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = document.getElementById("get-started-input");
    const inputElementLabel = document.getElementById("get-started-input-label");
    
    inputElement?.addEventListener("blur", () => {
      if(getStartedInputRef?.current?.value !== "") {
        inputElementLabel?.classList.add("!top-3", "!text-xs")
      } else {
        inputElementLabel?.classList.remove("!top-3", "!text-xs")
      }
    })
  }, [])

  return (
    <div className='relative overflow-hidden z-0'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/NZ-en-20251110-TRIFECTA-perspective_ee4298de-74ac-42aa-90ee-d9371f1a1965_large.jpg" alt="netflix background" className='w-screen object-contain' />
      <div className='absolute bg-linear-to-b from-black/60  to-black/90 inset-0' />

      <div className='absolute flex items-center justify-center w-full text-center text-white inset-0 z-1'>
        <div className='w-1/2'>
          <h1 className='text-6xl font-extrabold'>
            Unlimited movies, TV
            <br />
            <span className='inline-block py-3'>
              shows and more
            </span>
          </h1>

          <h3 className='py-1 text-xl font-bold'>
            Starts at $17.99. Cancel at any time.
          </h3>

          <div className='pt-6'>
            Ready to watch Netflix? Enter your email to create or restart your membership.
          </div>

          <div className='flex justify-center gap-2 w-3/4 m-auto pt-4'>
            <div className='relative flex-1'>
              <input id="get-started-input" type="email" ref={getStartedInputRef} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='w-full px-4 pt-6 pb-2 border border-zinc-500 bg-black/25 rounded-sm focus:outline-2 focus:outline-white focus:outline-offset-2 peer'/>
              <label id="get-started-input-label" htmlFor="get-started-input" className='absolute top-4 left-4 text-neutral-300 peer-focus:top-3 peer-focus:text-xs transition-all'>Email address</label>
            </div>

            <button className='flex items-center gap-2 p-3 px-8 bg-red-600 hover:bg-red-700 transition duration-300 ease-[cubic-bezier(0.4, 0, 0.68, 0.06)] rounded font-bold text-2xl cursor-pointer'>
              Get Started

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="inline size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home