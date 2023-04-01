// Skill Button / element

import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
  animRight: boolean;
  prof: number;
  darkTheme: boolean;
};

export default function SingleSkill({
  image,
  animRight,
  prof,
  darkTheme,
}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      {/* ***** */}
      {/* Image */}
      {/* ***** */}
      <motion.div
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border p-1 filter transition duration-300 ease-in-out group-hover:grayscale xs:h-12 xs:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 ${
          darkTheme
            ? 'border-gray-300 bg-gradient-to-br from-[#F6D365] to-[#FDA085]'
            : 'border-gray-700 bg-gradient-to-r from-[#a1ffd9] to-[#f3ff77]'
        }`}
        initial={{
          x: animRight ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={image}
          alt='skill'
          className='rounded-full object-cover'
          priority={true}
        ></Image>
      </motion.div>
      {/* **** */}
      {/* Text */}
      {/* **** */}
      <motion.div
        initial={{
          x: animRight ? -100 : 100,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
        }}
        className='absolute z-0 h-10 w-10 rounded-full p-1 opacity-0 transition duration-300 ease-in-out group-hover:bg-[#3a4dc9] group-hover:opacity-80 xs:h-12 xs:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20'
      >
        <div className='flex h-full items-center justify-center'>
          <p className='text-md font-semibold text-gray-50  opacity-100 sm:text-2xl'>
            {prof}%
          </p>
        </div>
      </motion.div>
    </div>
  );
}
