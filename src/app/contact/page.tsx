// Contact Page
'use client';

import Contact from '@/components/Contact';
import { useSelector } from 'react-redux';
import { selectedTheme } from '@/slices/themeSlice';

export default function ContactPage() {
  const darkTheme = useSelector(selectedTheme);

  return (
    <div
      className={`section-min-height ${
        darkTheme ? 'bg-[#1D2521] text-gray-300' : 'bg-[#FBFEFD] text-gray-700'
      }`}
    >
      <Contact darkTheme={darkTheme} />
    </div>
  );
}
