import gridImg from '@/assets/icons/views/grid.svg';
import listImg from '@/assets/icons/views/list.svg';

type Props = {
  value: 'list' | 'grid';
  setValue: (value: 'list' | 'grid') => void;
};

export default function Views({ value, setValue }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-sm font-medium">View</p>
      <div
        className={`flex items-center justify-center gap-1 px-2 py-1 ${value === 'list' ? 'bg-green-600/15 rounded-lg' : 'cursor-pointer'}`}
        onClick={() => setValue('list')}
      >
        <img src={listImg} alt="list" className="h-5 w-5" />
        <p className="text-sm">List</p>
      </div>
      <div
        className={`flex items-center justify-center gap-1 px-2 py-1 ${value === 'grid' ? 'bg-green-600/15 rounded-lg' : 'cursor-pointer'}`}
        onClick={() => setValue('grid')}
      >
        <img src={gridImg} alt="grid" className="h-5 w-5" />
        <p className="text-sm">Grid</p>
      </div>
    </div>
  );
}
