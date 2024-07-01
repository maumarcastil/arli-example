'use client';

import { Card, List, Typography } from '@material-tailwind/react';

import MenuLink from '@/features/ui/components/sidebar/menuLink';

import { SIDEBAR_ITEMS } from '@/features/ui/constants/sidebarItems';

const Sidebar = () => {
  return (
    <>
      <Card className="sticky top-0 hidden h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 lg:block">
        <div className="mb-2 flex items-center gap-4 p-4">
          <img
            alt="brand"
            className="h-8 w-8"
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          />
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          {SIDEBAR_ITEMS.map((item) => (
            <MenuLink item={item} key={item.path} />
          ))}
        </List>
      </Card>
    </>
  );
};

export default Sidebar;
