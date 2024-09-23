import React, { useEffect } from 'react';
import FeatureCard from './FeatureCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import T20 from '../../assets/T20.png';
import ODI from '../../assets/ODI.png';
import TestMatch from '../../assets/TestMatch.png';
import TheHundreds from '../../assets/TheHundreds.png';
import Champions from '../../assets/Champions.png';


// Move data array to Formats component
const data = [
  {
    heading: 'T20',
    description:
      'Experience cricket at its most electrifying! With every ball, the intensity rises, and the boundaries are pushed. T20 is where speed meets skill, delivering fast-paced entertainment that keeps you on the edge of your seat.',
    image:T20,
  },
  {
    heading: 'Test',
    description:
      'Cricket in its purest form, where true grit, patience, and skill are tested. Test matches are where legends are born, with epic battles over five days, showcasing the finest elements of the game—timeless, enduring, and historic.',
      image:TestMatch,
  },
  {
    heading: 'ODI',
    description:
      'A battle of endurance and strategy, ODI cricket brings you the perfect balance between Test cricket\'s patience and T20\'s adrenaline. Each over counts, and every decision shapes the outcome in this ultimate one-day showdown.',
      image:ODI,
  },
  {
    heading: 'The Hundred',
    description:
      'A new era of cricket where every ball counts! In The Hundred, the excitement is condensed, and strategies evolve with fast-paced action. It\'s cricket reimagined—100 balls of non-stop thrills that deliver a unique experience for fans.',
      image:TheHundreds,
  },
  {
    heading: 'Champions Trophy',
    description:
      'The battleground for the best of the best! The Champions Trophy unites the world\'s elite teams in a high-stakes contest where every match is a final in its own right. This is where champions are crowned, and only the finest rise to the top.',
      image:Champions
  },
];

const Formats = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='w-full flex flex-col gap-20 pt-20 overflow-x-hidden'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <p className='font-semibold text-4xl lg:text-6xl text-white text-center'>
        Discover the Thrill of Every Format
        </p>
        <div className='flex flex-row justify-center items-center gap-3'>
          <div className='bg-white w-16 h-1'></div>
          <div className='bg-white w-1 h-1'></div>
        </div>
      </div>
      <div className='flex flex-col gap-16'>
        {data.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            className={`w-full lg:w-2/3 mx-auto h-full ${index % 2 !== 0 ? 'self-end' : ''} mx-0 `}
          >
            <FeatureCard isLeft={index % 2 === 0} index={index} data={data[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Formats;
