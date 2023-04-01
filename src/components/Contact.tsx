// Contact

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profile from '../../public/profile.png';
import { SocialIcon } from 'react-social-icons';

type Props = { darkTheme: boolean };

export default function Contact({ darkTheme }: Props) {
  return (
    // ********************** //
    // Contatct Page main div //
    // ********************** //
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
        Contact
      </h3>

      {/* ************ */}
      {/* Page Content */}
      {/* ************ */}
      <div className='flex flex-grow items-center justify-center'>
        <div className='flex w-full flex-col items-stretch justify-center  space-y-5 p-1 sm:flex-row sm:space-y-0 sm:space-x-5 sm:p-5'>
          {/* ********** */}
          {/* Left / Top */}
          {/* ********** */}
          <div
            className={`flex w-full flex-col items-center justify-center rounded-xl border  p-2 shadow-2xl sm:w-[40%] ${
              darkTheme ? 'bg-[#27302C]' : 'bg-[#ffffff]'
            }
          `}
          >
            {/* ***** */}
            {/* Image */}
            {/* ***** */}
            <div>
              <Image
                className='rounded-full duration-300 ease-in hover:scale-105'
                src={profile}
                width={72}
                alt='/'
                priority={true}
              />
            </div>
            {/* ******* */}
            {/* Details */}
            {/* ******* */}
            <div className='flex-grow'>
              <h2 className='py-4 font-semibold'>Hassan Ali Khan</h2>
              <p>Software Developer</p>
              <p className='py-4'>
                I am available for freelance or full-time positions. Contact me
                and let&apos;s talk.
              </p>
            </div>
            {/* ************ */}
            {/* Social Icons */}
            {/* ************ */}
            <div className='flex w-full justify-evenly'>
              <SocialIcon
                className='cursor-pointer'
                url='https://pk.linkedin.com/in/hassanak92'
                bgColor='transparent'
                fgColor='grey'
                target='_blank'
              />
              <SocialIcon
                className='cursor-pointer'
                url='https://www.facebook.com/hassanali.khan3958'
                bgColor='transparent'
                fgColor='grey'
                target='_blank'
              />
              <SocialIcon
                className='cursor-pointer'
                url='https://twitter.com/hassanak92'
                bgColor='transparent'
                fgColor='grey'
                target='_blank'
              />
              <SocialIcon
                className='cursor-pointer'
                url='https://github.com/hassan-ak'
                bgColor='transparent'
                fgColor='grey'
                target='_blank'
              />
            </div>
          </div>
          {/* ************** */}
          {/* Right / Bottom */}
          {/* ************** */}
          <div
            className={`w-full rounded-xl border  p-2 shadow-2xl sm:w-[60%] ${
              darkTheme ? 'bg-[#27302C]' : 'bg-[#ffffff]'
            }`}
          >
            <form action='' method='POST' encType=''>
              {/* **** */}
              {/* Form */}
              {/* **** */}
              <div className='grid w-full gap-4 py-1 md:grid-cols-2'>
                {/* ************* */}
                {/* Name + number */}
                {/* ************* */}
                <div className='flex flex-col'>
                  <label className='py-1 text-sm uppercase'>Name</label>
                  <input
                    className='flex rounded-lg border-2 border-gray-300 p-2 text-gray-700'
                    type='text'
                    name='name'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='py-1 text-sm uppercase'>Phone Number</label>
                  <input
                    className='flex rounded-lg border-2 border-gray-300 p-2 text-gray-700'
                    type='text'
                    name='phone'
                  />
                </div>
              </div>
              {/* ***** */}
              {/* Email */}
              {/* ***** */}
              <div className='flex flex-col py-1'>
                <label className='py-1 text-sm uppercase'>Email</label>
                <input
                  className='flex rounded-lg border-2 border-gray-300 p-2 text-gray-700'
                  type='email'
                  name='email'
                />
              </div>
              {/* ******* */}
              {/* Subject */}
              {/* ******* */}
              <div className='flex flex-col py-1'>
                <label className='py-1 text-sm uppercase'>Subject</label>
                <input
                  className='flex rounded-lg border-2 border-gray-300 p-2 text-gray-700'
                  type='text'
                  name='subject'
                />
              </div>
              {/* ******* */}
              {/* Message */}
              {/* ******* */}
              <div className='flex flex-col py-1'>
                <label className='py-1 text-sm uppercase'>Message</label>
                <textarea
                  className='rounded-lg border-2 border-gray-300 p-2 text-gray-700'
                  rows={5}
                  name='message'
                ></textarea>
              </div>
              {/* *********** */}
              {/* Send Button */}
              {/* *********** */}
              <div className='flex justify-center'>
                <button className='w-fill mt-4 rounded-lg bg-teal-300 p-2 text-center text-gray-700'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
