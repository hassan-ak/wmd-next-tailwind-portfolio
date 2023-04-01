// Navbar / Header

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import profile from '../../public/profile.png';
import { SocialIcon } from 'react-social-icons';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

import { useSelector, useDispatch } from 'react-redux';
import { changeTheme, selectedTheme } from '@/slices/themeSlice';

type Props = {};

export default function Header({}: Props) {
  const darkTheme = useSelector(selectedTheme);
  const dispatch = useDispatch();

  // ******************** //
  // List of navbar items //
  // ******************** //
  const menuFixed = [
    'home',
    'about',
    // 'education',
    // 'experience',
    'skills',
    'projects',
    'contact',
  ];
  const [menu, setMenu] = useState<string[]>(menuFixed);

  // ************************************ //
  // Flag for opening and closing mbl nav //
  // ************************************ //
  const [openMbl, setopenMbl] = useState(false);

  // ************* //
  // Hacker effect //
  // ************* //
  function hackerEffect(i: number, value: string) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let iterations = 0;
    const interval = setInterval(() => {
      let newMenu = [...menu];
      newMenu[i] = value
        .split('')
        .map((letter, index) => {
          if (index < iterations) {
            return value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
      if (iterations > value.length) {
        clearInterval(interval);
        newMenu = [...menuFixed];
      }
      iterations += 1 / 3;
      setMenu(newMenu);
    }, 40);
  }

  return (
    <header className='sticky top-0 z-50'>
      {/* ******* */}
      {/* Nav bar */}
      {/* ******* */}
      <section
        className={`flex h-24 flex-wrap items-center justify-between px-5 py-2 sm:py-4 sm:px-10 ${
          darkTheme
            ? 'bg-[#1D2521] text-gray-300'
            : 'bg-[#FBFEFD] text-gray-700'
        }`}
      >
        {/* ************ */}
        {/* Navbar Image */}
        {/* ************ */}
        <motion.div
          className='flex-1'
          initial={{ x: -300, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Link href='.'>
            <Image
              src={profile}
              alt='profile'
              className='inline-flex w-[50px] rounded-full'
              priority={true}
            ></Image>
          </Link>
        </motion.div>

        {/* *********** */}
        {/* Navbar Menu */}
        {/* *********** */}
        <motion.nav
          className='order-last mx-5 mt-2 hidden flex-[300%] justify-center space-x-5 text-center font-mono sm:flex md:space-x-7 md:text-lg 2md:order-none 2md:mx-0 2md:mt-0 2md:flex-auto lg:space-x-10 lg:text-xl'
          aria-label='desktop'
          initial={{ y: -300, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {menu.map((menuItem) => (
            <Link
              href={
                menuFixed[menu.indexOf(menuItem)] === 'home'
                  ? '.'
                  : `./` + menuFixed[menu.indexOf(menuItem)]
              }
              key={menu.indexOf(menuItem)}
              onMouseEnter={() => {
                hackerEffect(menu.indexOf(menuItem), menuItem);
              }}
            >
              {menuItem[0].toUpperCase() + menuItem.slice(1)}
            </Link>
          ))}
        </motion.nav>

        {/* ************* */}
        {/* Linkedin Icon */}
        {/* ************* */}
        <motion.div
          className='hidden flex-1 items-center justify-end space-x-4 sm:inline-flex'
          initial={{ x: 300, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div
            onClick={() => {
              dispatch(changeTheme());
            }}
            className='hover:scale-[1.2] hover:cursor-pointer'
          >
            {darkTheme ? <span>☀️</span> : <span>🌑</span>}
          </div>
          <SocialIcon
            className='cursor-pointer'
            url='https://pk.linkedin.com/in/hassanak92'
            bgColor='transparent'
            fgColor='grey'
            target='_blank'
          />
        </motion.div>

        {/* ******** */}
        {/* MbL Icon */}
        {/* ******** */}
        <motion.div
          className='flex flex-1 items-center justify-end space-x-3 sm:hidden'
          initial={{ x: 300, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div
            onClick={() => {
              dispatch(changeTheme());
            }}
            className='hover:scale-[1.2] hover:cursor-pointer'
          >
            {darkTheme ? <span>☀️</span> : <span>🌑</span>}
          </div>
          <motion.div
            whileTap={{
              scale: 1.2,
              rotate: -90,
            }}
            onClick={() => {
              setopenMbl(!openMbl);
            }}
          >
            {openMbl ? <RxCross2 /> : <RxHamburgerMenu />}
          </motion.div>
        </motion.div>
      </section>

      {/* ******** */}
      {/* MbL Menu */}
      {/* ******** */}
      <section
        id='mobile-menu'
        className={openMbl ? `absolute w-full origin-top` : `hidden`}
      >
        <nav
          className={`flex flex-col items-center justify-around space-y-5 py-4 shadow-2xl
          ${
            darkTheme
              ? 'bg-[#1D2521] text-gray-300'
              : 'bg-[#FBFEFD] text-gray-700'
          }
          `}
          aria-label='mobile'
          onClick={() => {
            setopenMbl(!openMbl);
          }}
        >
          {menu.map((menuItem) => (
            <Link
              className='w-full text-center text-lg  hover:opacity-90'
              href={
                menuFixed[menu.indexOf(menuItem)] === 'home'
                  ? '.'
                  : `./` + menuFixed[menu.indexOf(menuItem)]
              }
              key={menu.indexOf(menuItem)}
              onClick={() => {
                setopenMbl(!openMbl);
              }}
            >
              {menuItem[0].toUpperCase() + menuItem.slice(1)}
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
}
