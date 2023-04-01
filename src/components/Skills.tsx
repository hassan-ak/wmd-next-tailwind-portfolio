// Skills

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SingleSkill from './SingleSkill';
import ts from '../../public/ts.png';
import css from '../../public/css.png';
import next from '../../public/next.png';
import js from '../../public/js.png';
import html from '../../public/html.webp';
import react from '../../public/react.png';
import sol from '../../public/solidity.png';
import python from '../../public/python.png';
import chkara from '../../public/chakra.png';
import tailwind from '../../public/tailwind.jpg';
import gatsby from '../../public/gatsby.png';
import github from '../../public/github.png';

type Props = {
  darkTheme: boolean;
};

export default function Skills({ darkTheme }: Props) {
  return (
    // ******************** //
    // Skills Page main div //
    // ******************** //
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
      className='section-min-height mx-auto flex max-w-7xl flex-col items-center justify-between px-10 pb-10'
    >
      {/* ************ */}
      {/* Page Heading */}
      {/* ************ */}
      <div className={darkTheme ? 'text-gray-400' : 'text-gray-600'}>
        <h3
          className={`pt-10 pl-[20px] text-center text-2xl uppercase tracking-[20px]`}
        >
          Skills
        </h3>
        <p className='pt-2 pb-10 text-center text-xs'>hover over a skill to check proficiency</p>
      </div>
      {/* *************************** */}
      {/* Page Content / Skills Cards */}
      {/* *************************** */}
      <div className='flex flex-grow flex-col items-center justify-center'>
        <div
          className={`grid grid-cols-2 gap-8 rounded-2xl p-8 shadow-2xl sm:grid-cols-4 ${
            darkTheme ? 'bg-[#27302C]' : 'bg-[#ffffff]'
          }`}
        >
          <SingleSkill
            image={html}
            animRight={true}
            prof={80}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={js}
            animRight={true}
            prof={84}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={css}
            animRight={true}
            prof={75}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={ts}
            animRight={true}
            prof={84}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={react}
            animRight={true}
            prof={75}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={python}
            animRight={true}
            prof={50}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={next}
            animRight={false}
            prof={70}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={sol}
            animRight={false}
            prof={10}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={chkara}
            animRight={false}
            prof={70}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={tailwind}
            animRight={false}
            prof={60}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={gatsby}
            animRight={false}
            prof={25}
            darkTheme={darkTheme}
          />
          <SingleSkill
            image={github}
            animRight={false}
            prof={75}
            darkTheme={darkTheme}
          />
        </div>
      </div>
    </motion.div>
  );
}
