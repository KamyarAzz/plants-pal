import type { InputType } from '@/types';

import ShowButton from './ShowButton';

type Props = {
  title?: string;
  name: string;
  type: InputType;
  placeholder?: string;
  imgSrc?: string;
  imgAlt?: string;
};

export default function FormInput({ title, name, type, placeholder, imgSrc, imgAlt }: Props) {
  const hidePassword = (isHidden: boolean) => {
    console.log(isHidden);
  };

  return (
    <div className="flex flex-col gap-2">
      {title && (
        <label htmlFor={name} className="text-sm font-medium text-stone-700">
          {title}
        </label>
      )}
      <div className="flex h-9 items-center rounded-lg border border-stone-300 bg-white px-3 transition-colors focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="mr-3 h-5 w-5 shrink-0" />}
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none"
        />
        {type === 'password' && (
          <div className="ml-2 shrink-0">
            <ShowButton onClick={hidePassword} />
          </div>
        )}
      </div>
    </div>
  );
}
