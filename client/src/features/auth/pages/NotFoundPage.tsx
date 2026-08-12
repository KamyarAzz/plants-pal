import { Link } from 'react-router';

import deadPlant from '@/assets/icons/dead_plant.jpg';

export default function NotFoundPage() {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <img src={deadPlant} alt="Not Found" className="w-32 h-32" />
      <h3 className="text-2xl font-bold">Page Not Found</h3>
      <p>The page you are looking for does not exist.</p>
      <Link to="/home" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
