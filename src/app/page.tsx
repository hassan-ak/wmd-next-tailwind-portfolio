// Home Page
'use client';

import Hero from '@/components/Hero';
import { useSelector } from 'react-redux';
import { selectedTheme } from '@/slices/themeSlice';

export default function Home() {
  const darkTheme = useSelector(selectedTheme);

  return (
    <div
      className={`section-min-height ${
        darkTheme ? 'bg-[#1D2521] text-gray-300' : 'bg-[#FBFEFD] text-gray-700'
      }`}
    >
      <Hero darkTheme={darkTheme} />
    </div>
  );
}
