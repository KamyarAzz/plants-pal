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
    <div className="flex flex-col gap-1">
      {title && <label htmlFor={name}>{title}</label>}
      <div className="flex items-center gap-2 rounded border border-stone-400 bg-stone-100">
        {imgSrc && <img src={imgSrc} alt={imgAlt} />}
        <div className="flex w-full items-center justify-between gap-2 px-2">
          <input
            className="bg-stone-100 text-stone-800 placeholder:text-stone-500 focus:outline-none"
            id={name}
            type={type}
            placeholder={placeholder}
          />
          {type === 'password' && <ShowButton onClick={hidePassword} />}
        </div>
      </div>
    </div>
  );
}
