import Button from '@/components/inputs/Button';
import Search from '@/components/inputs/Search';

export default function PlantsPage() {
  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">My Plants</h1>
        <Button onClick={() => console.log('Add Plant')}>+ Add Plant</Button>
      </div>
      <div>
        <Search />
      </div>
    </>
  );
}
