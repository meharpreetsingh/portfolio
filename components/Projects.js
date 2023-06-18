import React from 'react';
import userData from '@constants/data';

export default function Projects() {
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
        <h1 className=' text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>Projects</h1>
      </div>
      {/* Grid starts here */}
      <div className='bg-[#F1F1F1] dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40 px-4'>
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              description={proj.description}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, description }) => {
  return (
    <a target='_blank' href={link} className='w-full block shadow-2xl'>
      <div className='relative overflow-hidden rounded-lg'>
        <div className='h-72 object-cover'>
          <img
            src={imgUrl}
            alt='portfolio'
            className='transform hover:scale-125 transition duration-2000 ease-out object-cover object-top h-full w-full object-center'
          />
        </div>
        <h1 className='absolute top-5 left-5 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
          {title}
        </h1>
        <h1 className='absolute bottom-5 left-5 text-gray-800  md:text-gray-50 font-bold text-xl drop-shadow-lg'>
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
      {description ? (
        <div className='px-2 my-4 dark:text-gray-50 text-black text-md drop-shadow-lg'>
          {description}
        </div>
      ) : (
        ''
      )}
    </a>
  );
};
