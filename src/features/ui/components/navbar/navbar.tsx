'use client';

import { useEffect, useState } from 'react';

import { Navbar, IconButton } from '@material-tailwind/react';

import LanguageButton from '@/features/ui/components/language/languageButton';
import SidebarMobile from '@/features/ui/components/sidebar/sidebarMobile';

const StickyNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsSidebarOpen(false),
    );
  }, []);

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-b border-gray-200 px-4 py-2 shadow-none lg:px-8 lg:py-4">
        <div className="flex flex-row-reverse items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <LanguageButton />
          </div>
          <div className="flex items-center gap-4">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </Navbar>
      <SidebarMobile
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default StickyNavbar;
