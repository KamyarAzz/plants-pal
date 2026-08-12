import { Link } from 'react-router';

import historyImg from '@/assets/icons/sidebar/droplet.svg';
import homeImg from '@/assets/icons/sidebar/house.svg';
import plantsImg from '@/assets/icons/sidebar/leaf.svg';
import logoutImg from '@/assets/icons/sidebar/logout.svg';
import settingsImg from '@/assets/icons/sidebar/settings.svg';
import subscriptionImg from '@/assets/icons/sidebar/subscription.svg';
import logoImg from '@/assets/logos/plants-pal.jpg';
import { useLogout } from '@/features/auth/hooks/useLogout';

export default function Sidebar() {
  const sidebarItems = [
    { title: 'Home', path: '/home', icon: homeImg },
    { title: 'Plants', path: '/plants', icon: plantsImg },
    { title: 'Subscription', path: '/subscription', icon: subscriptionImg },
    { title: 'History', path: '/history', icon: historyImg },
    { title: 'Settings', path: '/settings', icon: settingsImg },
  ];

  const { logout } = useLogout();

  return (
    <div className="flex flex-col w-56 h-full gap-0.5 border-gray-300 bg-white p-4 border-r">
      <div className="flex flex-col gap-0.5 w-full h-full">
        <div className="flex items-center gap-2 p-2 mb-4">
          <img src={logoImg} alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-center">
            <span className="text-green-500">Plants</span>{' '}
            <span className="text-lime-500">Pal</span>
          </h1>
        </div>
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="hover:bg-green-600/15 w-full flex items-center p-2 gap-2 rounded-md"
          >
            <img src={item.icon} alt={item.title} className="w-6 h-6" />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
      <div
        onClick={logout}
        className="hover:bg-green-600/15 cursor-pointer flex items-center p-2 gap-2 rounded-md"
      >
        <img src={logoutImg} alt="Logout" className="w-6 h-6" />
        <p>Logout</p>
      </div>
    </div>
  );
}
