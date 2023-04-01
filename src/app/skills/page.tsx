// Skills Page
'use client';

import Skills from '@/components/Skills';
import { useSelector } from 'react-redux';
import { selectedTheme } from '@/slices/themeSlice';

export default function SkillsPage() {
  const darkTheme = useSelector(selectedTheme);

  return (
    <div
      className={`section-min-height ${
        darkTheme ? 'bg-[#1D2521] text-gray-300' : 'bg-[#FBFEFD] text-gray-700'
      }`}
    >
      <Skills darkTheme={darkTheme}/>
    </div>
  );
}
