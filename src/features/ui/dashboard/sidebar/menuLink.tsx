'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Item {
  title: string;
  path: string;
  icon: React.ReactNode;
}

interface MenuLinkProps {
  item: Item;
}

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={item.path}
        className={`flex flex-row items-center gap-3 rounded-lg p-2 transition duration-300 ease-in-out hover:bg-[--bgSoft] ${pathname === item.path && 'bg-[--bgSoft]'}`}
      >
        {item.icon}
        <span
          className={`text-[--text] ${pathname === item.path && 'font-semibold'} `}
        >
          {item.title}
        </span>
      </Link>
    </>
  );
};

export default MenuLink;
