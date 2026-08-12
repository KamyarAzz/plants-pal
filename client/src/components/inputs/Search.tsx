type Props = {
  onChange?: (value: string) => void;
  value?: string;
};

export default function Search({ onChange, value }: Props) {
  return (
    <input
      className="w-full rounded-md border bg-white border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-green-500/80"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
