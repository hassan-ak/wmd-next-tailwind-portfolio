// About

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import about from '../../public/about.png';

type Props = { darkTheme: boolean };

export default function About({ darkTheme }: Props) {
  return (
    // ******************* //
    // About Page main div //
    // ******************* //
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='section-min-height mx-auto flex max-w-7xl flex-col items-center justify-between px-10'
    >
      {/* ************ */}
      {/* Page Heading */}
      {/* ************ */}
      <h3
        className={`pt-10 pb-10 pl-[20px] text-center text-2xl uppercase tracking-[20px] ${
          darkTheme ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        About
      </h3>
      {/* ************ */}
      {/* Page Content */}
      {/* ************ */}
      <div className='flex flex-grow flex-col items-center justify-center sm:flex-row'>
        {/* **************** */}
        {/* Left / Top Image */}
        {/* **************** */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className={`sm:mb:0 mb-10 h-48 w-48 flex-shrink-0 rounded-full p-2 sm:h-64 sm:w-64 sm:rounded-lg xl:h-[380px] xl:w-[380px] ${
            darkTheme
              ? 'bg-gradient-to-br from-[#F6D365] to-[#FDA085]'
              : 'bg-gradient-to-r from-[#a1ffd9] to-[#f3ff77]'
          }`}
        >
          <Image
            src={about}
            alt='about'
            className='rounded-full object-cover sm:rounded-lg'
            priority={true}
          ></Image>
        </motion.div>
        {/* ************************** */}
        {/* Right / Bottom Description */}
        {/* ************************** */}
        <div className='space-y-10 px-0 text-center sm:px-10 sm:text-left'>
          <h4 className='text-xl font-semibold sm:text-3xl lg:text-4xl'>
            A little Background
          </h4>
          <p className='text-justify text-base'>
            I am a motivated and results-driven Electrical Engineering graduate.
            Recently, I made the exciting decision to switch careers to software
            development, where I have quickly gained expertise in backend
            development with nodeJS and web development with nextJS. With a
            passion for solving complex problems and a dedication to mastering
            new skills I am excited to bring my analytical mindset and technical
            expertise to the field of software development. I am a fast learner
            with a strong work ethic and a proven track record of success in
            both my previous career and my new pursuit of software development.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
