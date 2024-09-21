import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useTypewriter } from 'react-simple-typewriter'

const IntroText = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, [])
    const [text] = useTypewriter({
        words: ['Intense T20 Thrillers', 'Strategic ODI Battles', 'Timeless Test Match Duels'],
        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (

        <div className=' tex-3xl pt-80 flex flex-row  items-center w-11/12 mx-auto p-5 rounded-r-full'>
            <div className='text-3xl leading-[2em]'>
                <span className='text-7xl font-semibold italic'> Welcome to the Cricket Arena! </span>
                <div>
                  Where legends <span className='text-red-600 text-5xl font-semibold'>clash</span>, champions <span className='text-green-400 text-5xl font-semibold' >rise</span>, and fans <span className='text-fuchsia-700 text-5xl font-semibold'>roar</span>  with excitement.
                </div> 
                <div>
                    Prepare for an exhilarating journey through the world of cricket, featuring <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10% @apply font-Oswald text-6xl font-bold'>{text}</span>
                </div>
                <div>
                Join us as we celebrate the spirit of the game, where every boundary, wicket, and run counts.
                Let the games begin!
                </div>
            </div>
            {/* <div className='m-10 rounded-sm'>
                <img src={cricketManImg} alt="image" className='' />
            </div> */}
        </div>
    )
}

export default IntroText