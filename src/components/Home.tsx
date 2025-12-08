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
    <>
      <div className='relative overflow-hidden z-0'>
        <div className='h-screen'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/NZ-en-20251110-TRIFECTA-perspective_ee4298de-74ac-42aa-90ee-d9371f1a1965_large.jpg" alt="netflix background" className='w-full h-full object-cover' />
        </div>
        <div className='absolute bg-linear-to-b from-black/60  to-black/90 inset-0' />

        {/* Banner signup input */}
        <div className='absolute flex items-center justify-center w-full text-center text-white inset-0 z-1'>
          <div className='min-w-4/10 xl:w-1/2'>
            <h1 className='text-[2.5rem]/12 xl:text-6xl font-extrabold'>
              Unlimited movies, TV
              <br />
              <span className='inline-block xl:py-3'>
                shows and more
              </span>
            </h1>

            <h3 className='py-1.5 xl:py-1 xl:text-xl xl:font-bold'>
              Starts at $17.99. Cancel at any time.
            </h3>

            <div className='pt-6'>
              Ready to watch Netflix? Enter your email to create or restart your membership.
            </div>

            <div className='flex justify-center gap-2 w-9/10 m-auto pt-4'>
              <div className='relative flex-1'>
                <input id="get-started-input" type="email" ref={getStartedInputRef} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='w-full px-4 pt-6 pb-2 border border-zinc-500 bg-black/25 rounded-sm focus:outline-2 focus:outline-white focus:outline-offset-2 peer'/>
                <label id="get-started-input-label" htmlFor="get-started-input" className='absolute top-4 left-4 text-neutral-300 peer-focus:top-3 peer-focus:text-xs transition-all'>Email address</label>
              </div>

              <button className='flex items-center gap-2 p-3 px-6 bg-red-600 hover:bg-red-700 transition duration-300 ease-[cubic-bezier(0.4, 0, 0.68, 0.06)] rounded font-bold text-lg xl:text-2xl cursor-pointer'>
                Get started

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="inline size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* TV screen effect */}
        <div className='absolute w-full h-25 bottom-0'>
          <div className='absolute top-0 h-full w-134/100 -left-17/100 bg-radial-[ellipse_109%_539%_at_50%_-143%] from-blue-400 from-[0px] to-black to-50% rounded-tl-[50%_100%] rounded-tr-[50%_100%] z-10'></div>
          <div className='absolute h-full w-130/100 -left-15/100 -mt-1 bg-linear-[to_right,rgba(33,13,22,1)_16%,rgba(184,39,105,1),rgba(229,9,20,1),rgba(184,40,105,1),rgba(33,13,22,1)_84%] rounded-tl-[50%_100%] rounded-tr-[50%_100%] z-9'></div>
        </div>
      </div>

    </>
  )
}

export default Home