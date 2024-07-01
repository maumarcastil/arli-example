'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ListItem, ListItemPrefix } from '@material-tailwind/react';

import { cn } from '@/features/ui/utils/index';

import { SidebarItem } from '@/features/ui/types/sidebar';

interface MenuLinkProps {
  item: SidebarItem;
  handlePress?: () => void;
}

const MenuLink = ({ item, handlePress }: MenuLinkProps) => {
  const pathname = usePathname();

  return (
    <>
      <Link href={item.path} onClick={handlePress}>
        <ListItem
          className={cn(
            `${pathname === item.path && 'bg-[--bgSoft] focus:bg-[--bgSoft]'} transition-all`,
          )}
        >
          <ListItemPrefix>{item.icon}</ListItemPrefix>
          {item.title}
        </ListItem>
      </Link>
    </>
  );
};

export default MenuLink;
