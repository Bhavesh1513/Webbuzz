// import React, { useEffect, useState } from 'react';
// import { COUNTRY_LOGO } from '../../data/CountryLogo';
// import { INDIA, ENGLAND, SRI_LANKA, WEST_INDIES, AUSTRALIA, PAKISTAN, NEW_ZEALAND } from '../../data/TeamsData';
// import '../../Util.css'


// const Cards = () => {

//     const [country, setCountry] = useState("IND");
//     const [team, setTeam] = useState(INDIA);

//     const teamHandler = () => {
//         if (country === "IND") {
//             setTeam(INDIA);
//         }
//         else if (country === "AUS") {
//             setTeam(AUSTRALIA);
//         }
//         else if (country === "PAK") {
//             setTeam(PAKISTAN);
//         }
//         else if (country === "WI") {
//             setTeam(WEST_INDIES);
//         }
//         else if (country === "ENG") {
//             setTeam(ENGLAND);
//         }
//         else if (country === "LK") {
//             setTeam(SRI_LANKA);
//         }
//         else if (country === 'NZ') {
//             setTeam(NEW_ZEALAND)
//         }
//     }

//     useEffect(() => {
//         teamHandler();
//     }, [country])

//     return (
//         <div className='mt-10 w-11/12'>
//             <div className='flex flex-row flex-wrap gap-7 justify-center'>
//                 {
//                     COUNTRY_LOGO.map((item) => (
//                         <button
//                             key={item.id}
//                             onClick={() => setCountry(item.Name)}
//                             className={`relative pb-2 ${country === item.Name ? 'border-b-4 border-white' : 'border-b-2 border-transparent'
//                                 }`}
//                         >
//                             <div className='w-64 h-64 hidden md:block'>
//                                 <img className='rounded-full w-full h-full object-cover shadow-2xl' src={item.image} alt="logo" />
//                             </div>

//                             <div className='w-24 h-24 md:hidden rounded-full flex justify-center items-center bg-white text-gray-800'>
//                                 <div className='text-3xl font-bold'>{item.Name}</div>
//                             </div>

//                             <div className='text-2xl font-semibold  flex-col hidden md:block'>
//                                 <div className=''>{item.Name}</div>
//                                 <div>Cricket Board: {item.CrickerBoard}</div>
//                             </div>
//                         </button>
//                     ))
//                 }
//             </div>



//             <div className='flex flex-wrap gap-8 mt-5 p-5 justify-center items-center'>
//                 {team.map((player) => (
//                     <div key={player.id} className='rounded-3xl bg-[#212023] text-richwhite-4 p-4 w-96 h-96 flex flex-col items-center shadow-white-custom card-container'

//                     >
//                         <div className='card-overlay'></div>
//                         <div className='jersey-number text-9xl font-bold'>
//                             {player.jerseyNo}
//                         </div>
//                         <div className='w-32 h-32 mb-4'>
//                             <img className='rounded-full w-full h-full object-cover shadow-2xl' src={player.image} alt={player.Name} />
//                         </div>
//                         <div className='text-3xl flex flex-col justify-center items-center leading-10 gap-2'>
//                             <h3 className='font-bold'>{player.Name}</h3>
//                             <p>Age: {player.Age}</p>
//                             <div className='flex flex-row justify-center items-center gap-2'>
//                                 <div>Role:</div>
//                                 <div>{player.profession}</div>
//                             </div>
//                             <p>Jersey No.: {player.jerseyNo}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Cards;





///----------------------------------------------
import React, { useEffect, useState } from 'react';
import { COUNTRY_LOGO } from '../../data/CountryLogo';
import { INDIA, ENGLAND, SRI_LANKA, WEST_INDIES, AUSTRALIA, PAKISTAN, NEW_ZEALAND } from '../../data/TeamsData';
import '../../Util.css';

const Cards = () => {
    const [country, setCountry] = useState("IND");
    const [team, setTeam] = useState(INDIA);
    const [loading, setLoading] = useState(true);

    const teamMapping = {
        "IND": INDIA,
        "AUS": AUSTRALIA,
        "PAK": PAKISTAN,
        "WI": WEST_INDIES,
        "ENG": ENGLAND,
        "LK": SRI_LANKA,
        "NZ": NEW_ZEALAND
    };

    useEffect(() => {
        setTeam(teamMapping[country] || []);
    }, [country]);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className='mt-10 w-11/12'>
            <div className='flex flex-row flex-wrap gap-7 justify-center'>
                {
                    COUNTRY_LOGO.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setCountry(item.Name)}
                            aria-label={`Select ${item.Name} team`}
                            className={`relative pb-2 ${country === item.Name ? 'border-b-4 border-white' : 'border-b-2 border-transparent'}`}
                        >
                            <div className='w-64 h-64 hidden md:block'>
                                <img className='rounded-full w-full h-full object-cover shadow-2xl' src={item.image} alt="logo" />
                            </div>

                            <div className='w-24 h-24 md:hidden rounded-full flex justify-center items-center bg-white text-gray-800'>
                                <div className='text-3xl font-bold'>{item.Name}</div>
                            </div>

                            <div className='text-2xl font-semibold flex-col hidden md:block'>
                                <div className=''>{item.Name}</div>
                                <div>Cricket Board: {item.CrickerBoard}</div>
                            </div>
                        </button>
                    ))
                }
            </div>

            <div className='flex flex-wrap gap-8 mt-5 p-5 justify-center items-center'>
                {team.map((player) => (
                    <div key={player.id} className='rounded-3xl bg-[#212023] text-richwhite-4 p-4 w-96 h-96 flex flex-col items-center shadow-white-custom card-container'>
                        <div className='card-overlay'></div>
                        <div className='jersey-number text-9xl font-bold'>
                            {player.jerseyNo}
                        </div>
                        <div className='w-32 h-32 mb-4'>
                            <img 
                                className='rounded-full w-full h-full object-cover shadow-2xl' 
                                src={player.image} 
                                alt={player.Name} 
                                onLoad={handleImageLoad} 
                                style={{ display: loading ? 'none' : 'block' }} 
                            />
                        </div>
                        <div className='text-3xl flex flex-col justify-center items-center leading-10 gap-2'>
                            <h3 className='font-bold'>{player.Name}</h3>
                            <p>Age: {player.Age}</p>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <div>Role:</div>
                                <div>{player.profession}</div>
                            </div>
                            <p>Jersey No.: {player.jerseyNo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
