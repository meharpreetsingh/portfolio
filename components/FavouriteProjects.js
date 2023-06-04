import React from 'react';
import Link from 'next/link';

// importing project images
import forkifySs from '../public/images/projects/forkify.png';
import remySs from '../public/images/projects/remybot.JPG';
import natoursSs from '../public/images/projects/natours.JPG';

import bankistSs from '../public/images/projects/bankist-app.png';

export default function FavouriteProjects() {
  const topThreeProjects = {
    first: {
      title: 'Forkify',
      link: 'https://forkify-sepia.vercel.app/',
      image: forkifySs.src,
    },
    second: {
      title: 'Bankist App',
      link: 'https://meharpreetsingh.github.io/bankist-app/',
      image: bankistSs.src,
    },
    third: {
      title: 'Natours',
      link: 'https://meharpreetsingh.github.io/natours/',
      image: natoursSs.src,
    },
    // third: {
    //   title: 'Server Protector Discord Bot',
    //   link: 'https://discord.com/oauth2/authorize?client_id=1087420589137989763&scope=bot',
    //   image: remySs.src,
    // },
  };

  return (
    <div className='bg-[#F1F1F1] -mt-40 dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <header className='flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0'>
          <h1 className='text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center'>
            Featured Projects
          </h1>
          <Link
            href='/projects'
            className='mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-arrow-up-right-square'
              stroke='4'
              strokeWidth='4'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z'
              />
            </svg>
            <p>View all</p>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className='grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40'>
          {/* Single card */}
          <a
            href={topThreeProjects.first.link}
            className='w-full block col-span-3 shadow-2xl'
            target={'_blank'}
          >
            <div className='relative overflow-hidden'>
              <img
                src={topThreeProjects.first.image}
                alt={topThreeProjects.first.title}
                className='transform hover:scale-125 transition duration-2000 ease-out'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                {topThreeProjects.first.title}
              </h1>
              <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>01</h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href={topThreeProjects.second.link}
            className='w-full block col-span-3  sm:col-span-2 shadow-2xl'
            target={'_blank'}
          >
            <div className='relative overflow-hidden'>
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src={topThreeProjects.second.image}
                alt={topThreeProjects.second.title}
                className='transform hover:scale-125 transition duration-2000 ease-out'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                {topThreeProjects.second.title}
              </h1>
              <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>02</h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href={topThreeProjects.third.link}
            className='w-full block col-span-3 sm:col-span-1  object-cover'
            target={'_blank'}
          >
            <div className='relative overflow-hidden shadow-2xl'>
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src={topThreeProjects.third.image}
                alt={topThreeProjects.third.title}
                className='transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl'
              />
              <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                {topThreeProjects.third.title}
              </h1>
              <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>03</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
