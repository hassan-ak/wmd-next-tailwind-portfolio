// Projects

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import proj1 from '../../public/proj1.png';
import proj2 from '../../public/proj2.png';
import proj3 from '../../public/proj3.png';
import proj4 from '../../public/proj4.png';
import SingleProject from './SingleProject';
import next from '../../public/next.png';
import tailwind from '../../public/tailwind.jpg';
import chakra from '../../public/chakra.png';

type Props = { darkTheme: boolean };

export default function About({ darkTheme }: Props) {
  return (
    // ********************** //
    // Projects Page main div //
    // ********************** //
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className='section-min-height mx-auto flex max-w-full flex-col items-center justify-between overflow-hidden px-0 sm:px-10'
    >
      {/* ************ */}
      {/* Page Heading */}
      {/* ************ */}
      <div className={darkTheme ? 'text-gray-400' : 'text-gray-600'}>
        <h3
          className={`pt-10 pl-[20px] text-center text-2xl uppercase tracking-[20px]`}
        >
          Projects
        </h3>
        <p className='pt-2 pb-10 text-center text-xs'>
          slide left to explore more projects
        </p>
      </div>

      {/* **************************** */}
      {/* Page Content / Project Cards */}
      {/* **************************** */}
      <div className='flex max-w-full flex-grow items-center justify-evenly overflow-hidden py-10 '>
        <div
          className={`flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll pb-10 scrollbar ${
            darkTheme
              ? 'scrollbar-track-[#f3ff77]/20 scrollbar-thumb-[#a1ffd9]/60'
              : 'scrollbar-track-[#FDA085]/40 scrollbar-thumb-[#F6D365]/80'
          }`}
        >
          <SingleProject
            proj={proj2}
            title='Todo App'
            tech1={next}
            tech2={chakra}
            description='An app to save, update and delete todos'
            link1={
              'https://github.com/hassan-ak/wmd-tailwind-article-preview/tree/main'
            }
            darkTheme={darkTheme}
          />
          <SingleProject
            proj={proj1}
            title='Article Review Card'
            tech1={next}
            tech2={tailwind}
            description='A webiste to display preview card of an article'
            link1={'https://github.com/hassan-ak/wmd-next-chakra-todo'}
            darkTheme={darkTheme}
          />
          <SingleProject
            proj={proj3}
            title='Pricing UI'
            tech1={next}
            tech2={chakra}
            description='A project to get started with Chakra UI'
            link1={'https://github.com/hassan-ak/wmd-chakra-pricing-ui'}
            darkTheme={darkTheme}
          />
          <SingleProject
            proj={proj4}
            title='Acme Rocket'
            tech1={next}
            tech2={tailwind}
            description='A project to get started with Tailwind CSS'
            link1={'https://github.com/hassan-ak/next-tailwind-acme-rocket'}
            darkTheme={darkTheme}
          />
        </div>
      </div>
    </motion.div>
  );
}
