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

import { SidebarItem } from '../types/sidebar';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'General',
    path: '/dashboard',
    icon: <FiHome />,
  },
  {
    title: 'Generadores',
    path: '/dashboard/generators',
    icon: <FiHome />,
  },
  {
    title: 'Usuarios',
    path: '/dashboard/users',
    icon: <FiUser />,
  },
  /* {
    title: 'Recolecciones',
    path: '/dashboard/collections',
    icon: <FiTruck />,
  }, */
  /* {
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
  }, */
];
