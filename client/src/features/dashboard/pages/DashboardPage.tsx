import Garden from '../components/garden/Garden';
import Header from '../components/header/Header';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      <Header />
      <Garden />
    </div>
  );
}
