// Hero / Gome Page

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profile from '../../public/profile.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

type Props = { darkTheme: boolean };

export default function Hero({ darkTheme }: Props) {
  // ********************* //
  // TypeWriter initilizer //
  // ********************* //
  const [text, count] = useTypewriter({
    delaySpeed: 2000,
    loop: true,
    words: [
      `Hi, I'm Hassan Ali Khan`,
      '<webDeveloper/>',
      'Web3 and Metaverse Aspirant',
    ],
  });

  return (
    <div className='section-height flex flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
      {/* ******************* */}
      {/* Back Ground Circles */}
      {/* ******************* */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ['20%', '20%', '50%', '80%', '100%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className='relative flex items-center justify-center'
      >
        <div
          className={`absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333e0]`}
        />
        <div
          className={`absolute mt-52 h-[300px] w-[300px] rounded-full border ${
            darkTheme
              ? 'border-[#33333387] opacity-100'
              : 'border-gray-200 opacity-60'
          }`}
        />
        <div
          className={`absolute mt-52 h-[500px] w-[500px] rounded-full border ${
            darkTheme
              ? 'border-[#33333387] opacity-100'
              : 'border-gray-200 opacity-60'
          }`}
        />
        <div
          className={`absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border ${
            darkTheme
              ? 'border-[#f7ac0a60] opacity-20'
              : 'border-[#486cbb] opacity-10'
          }`}
        />
        <div
          className={`absolute mt-52 h-[800px] w-[800px] rounded-full border ${
            darkTheme
              ? 'border-[#33333387] opacity-100'
              : 'border-gray-200 opacity-60'
          }`}
        />

        <div />
      </motion.div>

      {/* *************** */}
      {/* Profile Picture */}
      {/* *************** */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={profile}
          priority={true}
          alt='profile'
          className={`z-40 h-20 w-20 flex-shrink-0 rounded-full object-cover sm:h-28 sm:w-28 ${
            darkTheme ? 'bg-slate-50' : 'bg-[#1D2521]'
          }`}
          width={128}
        />
      </motion.div>

      {/* ********************* */}
      {/* Title and Description */}
      {/* ********************* */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className='z-40 flex min-w-full flex-col items-center justify-center'
      >
        <h2 className='pb-4 pl-3 text-center text-sm uppercase tracking-[15px]'>
          Software Developer
        </h2>
        <h1 className='text-xl font-semibold sm:text-4xl lg:text-6xl'>
          <span>{text}</span>
          <span className=''>
            <Cursor cursorColor='#F7AB0A' />
          </span>
        </h1>
      </motion.div>
    </div>
  );
}
