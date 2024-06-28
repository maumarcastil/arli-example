import Image from 'next/image';
import {
  FiCreditCard,
  FiDollarSign,
  FiEye,
  FiHome,
  FiMapPin,
  FiTag,
  FiTruck,
  FiUser,
} from 'react-icons/fi';

import styles from '@/features/ui/dashboard/sidebar/sidebar.module.css';

import MenuLink from '@/features/ui/dashboard/sidebar/menuLink';

import Logo from '@/public/LogoArli.png';

const menuItems = [
  {
    title: 'General',
    path: '/dashboard',
    icon: <FiHome />,
  },
  {
    title: 'Recolecciones',
    path: '/dashboard/collections',
    icon: <FiTruck />,
  },
  {
    title: 'Generadores',
    path: '/dashboard/generators',
    icon: <FiUser />,
  },
  {
    title: 'Retiros',
    path: '/dashboard/withdrawals',
    icon: <FiCreditCard />,
  },
  {
    title: 'Mapa',
    path: '/dashboard/map',
    icon: <FiMapPin />,
  },
  {
    title: 'Precio estándar',
    path: '/dashboard/standard-price',
    icon: <FiDollarSign />,
  },
  {
    title: 'Verificación',
    path: '/dashboard/verification',
    icon: <FiEye />,
  },
  {
    title: 'Transacciones',
    path: '/dashboard/transactions',
    icon: <FiTag />,
  },
];

const Sidebar = () => {
  return (
    <>
      <div
        className={`flex min-h-full flex-col gap-6 rounded-lg p-4 shadow-lg ${styles.customShadow}`}
      >
        <div className="gap flex justify-center">
          <Image src={Logo} alt="Logo" className="max-w-[60%]" />
        </div>
        <ul className="flex list-none flex-col gap-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              <MenuLink item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
