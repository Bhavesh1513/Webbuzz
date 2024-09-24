import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useTypewriter } from 'react-simple-typewriter';
import Banner from "../../assets/ArenaVideo.mp4";

const IntroText = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1220);

    useEffect(() => {
        Aos.init({ duration: 2000 });

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [text] = useTypewriter({
        words: ['Intense T20 Thrillers', 'Strategic ODI Battles', 'Timeless Test Match Duels'],
        loop: Infinity,
        onLoopDone: () => console.log("loop completed after 3 runs"),
    });

    if (isDesktop) {
        return (
            <div className=' tex-3xl mt-20 w-fit mx-auto flex flex-col items-center justify-center relative rounded-2xl '>
                <div className='opacity-30 shadow-white-spread w-[100%] h-[100%] rounded-2xl'>
                    <video
                        muted
                        loop
                        autoPlay
                        className='w-full h-auto object-cover rounded-2xl'
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>
                <div className='text-3xl leading-[2em] absolute top-[350px] left-[100px] 
                    md:top-[200px] md:left-[50px] sm:top-[150px] sm:left-[20px]'>
                    <span className='text-7xl font-semibold italic 
                        md:text-6xl sm:text-4xl'> Welcome to the Cricket Arena! </span>
                    <div className='mt-4'>
                        Where legends <span className='text-red-600 text-5xl font-semibold md:text-4xl sm:text-3xl'>clash</span>,
                        champions <span className='text-green-400 text-5xl font-semibold md:text-4xl sm:text-3xl'>rise</span>, and fans
                        <span className='text-fuchsia-700 text-5xl font-semibold md:text-4xl sm:text-3xl'>roar</span> with excitement.
                    </div>
                    <div className='mt-4'>
                        Prepare for an exhilarating journey through the world of cricket, featuring
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10% 
                        @apply font-Oswald text-6xl font-bold md:text-5xl sm:text-4xl'>{' ' + text}</span>
                    </div>
                    <div className='mt-4'>
                        Join us as we celebrate the spirit of the game, where every boundary, wicket, and run counts.
                        Let the games begin!
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className=' tex-3xl mt-20 flex flex-row  items-center w-11/12 mx-auto p-5 rounded-r-full'>
                <div className='text-3xl leading-[2em]'>
                    <span className='text-7xl font-semibold italic'> Welcome to the Cricket Arena! </span>
                    <div>
                        Where legends <span className='text-red-600 text-5xl font-semibold'>clash</span>, champions <span className='text-green-400 text-5xl font-semibold' >rise</span>, and fans <span className='text-fuchsia-700 text-5xl font-semibold'>roar</span>  with excitement.
                    </div>
                    <div>
                        Prepare for an exhilarating journey through the world of cricket, featuring <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10% @apply font-Oswald text-6xl font-bold'>{' ' + text}</span>
                    </div>
                    <div>
                        Join us as we celebrate the spirit of the game, where every boundary, wicket, and run counts.
                        Let the games begin!
                    </div>
                </div>
            </div>
        );
    }
};

export default IntroText;
