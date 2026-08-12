import { useState } from 'react';

import type { InputType } from '@/types';

import ShowButton from './ShowButton';

type Props = {
  disabled?: boolean;
  title?: string;
  name: string;
  type: InputType;
  placeholder?: string;
  imgSrc?: string;
  imgAlt?: string;
  value: string;
  setValue: (value: string) => void;
};

export default function Input({
  title,
  name,
  type,
  placeholder,
  imgSrc,
  imgAlt,
  disabled,
  value,
  setValue,
}: Props) {
  const [typeState, setTypeState] = useState(type);
  const hidePassword = (isHidden: boolean) => {
    setTypeState(isHidden ? 'password' : 'text');
  };

  return (
    <div className="flex flex-col gap-2">
      {title && (
        <label htmlFor={name} className="text-sm font-medium text-stone-700">
          {title}
        </label>
      )}
      <div className="flex h-9 items-center rounded-lg border border-stone-300 bg-white px-3 transition-colors focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20">
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="mr-3 h-5 w-5 shrink-0" />}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={name}
          type={typeState}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none"
        />
        {type === 'password' && <ShowButton className="ml-2 shrink-0" onClick={hidePassword} />}
      </div>
    </div>
  );
}
