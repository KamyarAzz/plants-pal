import { Link } from 'react-router';

import { useAuthStore } from '@/stores/authStore';

// import HeaderInfoBox from './HeaderInfoBox';

export default function DashboardTitle() {
  const user = useAuthStore((state) => state.user);

  // const headerInfoData = [s
  //   {
  //     title: 'Total Collection',
  //     value: '24',
  //     color: 'green',
  //     icon: <span>🌱</span>,
  //     valueType: 'Plants',
  //   },
  //   {
  //     title: 'Needs Care',
  //     value: '5',
  //     color: 'yellow',
  //     icon: <span>🌱</span>,
  //     valueType: 'Plants Overdue',
  //   },
  //   {
  //     title: 'Upcomming Tasks',
  //     value: 'Water Changiz',
  //     color: 'blue',
  //     icon: <span>🌱</span>,
  //   },
  //   {
  //     title: 'Active Susbscription',
  //     value: '10',
  //     color: '',
  //     icon: <span>🌱</span>,
  //     valueType: 'Days Left',
  //   },
  // ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">Welcome back, {user?.username} 🌱</h1>
          <p className="text-slate-600">Here's what's happening in your digital garden today!</p>
        </div>
        <Link
          to="/plants/add"
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 cursor-pointer"
        >
          + Add Plant
        </Link>
      </div>
      {/* <div className="flex gap-2 w-full">
        {headerInfoData.map((info) => (
          <HeaderInfoBox
            key={info.title}
            title={info.title}
            value={info.value}
            icon={info.icon}
            color={info.color}
            valueType={info.valueType}
          />
        ))}
      </div> */}
    </div>
  );
}
