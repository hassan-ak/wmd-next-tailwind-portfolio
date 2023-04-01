// Single Project Card

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Image, { StaticImageData } from 'next/image';

type Props = {
  proj: StaticImageData;
  title: string;
  description: string;
  tech1: StaticImageData;
  tech2: StaticImageData;
  link1: string;
  darkTheme: boolean;
};

export default function SingleProject({
  proj,
  title,
  tech1,
  tech2,
  description,
  link1,
  darkTheme,
}: Props) {
  return (
    <div className='flex min-w-full justify-center'>
      <div
        className={`flex max-w-[250px] shrink-0  cursor-pointer snap-center flex-col items-center justify-center overflow-hidden rounded-xl opacity-60 shadow-2xl transition-opacity duration-200 hover:opacity-100  xs:max-w-[400px] sm:max-w-xl md:max-w-3xl md:flex-row ${
          darkTheme ? 'bg-[#27302C]' : 'bg-[#ffffff]'
        }`}
      >
        {/* **************** */}
        {/* Left / Top Image */}
        {/* **************** */}
        <div className='basis-2/5 object-cover'>
          <Image
            src={proj}
            alt='Furniture'
            width={500}
            height={500}
            className='rounded-t-xl md:rounded-r-none md:rounded-l-xl'
            priority={true}
          ></Image>
        </div>
        {/* ******************************** */}
        {/* Right/Bottom Description Section */}
        {/* ******************************** */}
        <div className='basis-3/5 p-9'>
          {/* ***************************** */}
          {/* Description Heading + Details */}
          {/* ***************************** */}
          <h2 className='text-base font-bold leading-snug sm:text-[1.4rem]'>
            {title}
          </h2>
          <p className='mt-3 text-sm'>{description}</p>
          {/* ***************** */}
          {/* Technologies used */}
          {/* ***************** */}
          <h4 className='mt-4 text-[14px] font-semibold'>
            Created using following Technologies{' '}
          </h4>
          <div className='justify-strat mt-2 flex items-center space-x-2 leading-none sm:space-x-6'>
            <Image
              priority={true}
              src={tech1}
              alt=''
              className='h-8 w-8 rounded-full'
              width={500}
              height={500}
            />
            <Image
              priority={true}
              src={tech2}
              alt=''
              className='h-8 w-8 rounded-full'
              width={500}
              height={500}
            />
          </div>
          {/* ************** */}
          {/* External Links */}
          {/* ************** */}
          <h4 className='mt-4 text-end text-[14px] font-semibold'>
            Have a look at the project
          </h4>
          <div className='mt-2 flex items-center justify-end space-x-2 leading-none sm:space-x-6'>
            <SocialIcon
              className='cursor-pointer'
              url={link1}
              bgColor='transparent'
              fgColor='grey'
              target='_blank'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
