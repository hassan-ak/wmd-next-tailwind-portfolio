// About Page
'use client';

import About from '@/components/About';
import { useSelector } from 'react-redux';
import { selectedTheme } from '@/slices/themeSlice';

export default function AboutPage() {
  const darkTheme = useSelector(selectedTheme);

  return (
    <div
      className={`section-min-height ${
        darkTheme ? 'bg-[#1D2521] text-gray-300' : 'bg-[#FBFEFD] text-gray-700'
      }`}
    >
      <About darkTheme={darkTheme} />
    </div>
  );
}
