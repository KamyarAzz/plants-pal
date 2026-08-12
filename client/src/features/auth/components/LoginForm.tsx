import { useState } from 'react';
import { Link } from 'react-router';

import emailImg from '@/assets/icons/email.svg';
import passwordImg from '@/assets/icons/lock.svg';
import Button from '@/components/inputs/Button';
import Input from '@/components/inputs/Input';

import { useLogin } from '../hooks/useLogin';
import SocialsLogin from './SocialsLogin';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useLogin();

  const handleSubmit = () => {
    login(email);
  };

  return (
    <form className="flex flex-col shadow-lg gap-2 bg-white rounded-lg p-5">
      <Input
        imgSrc={emailImg}
        title="Email"
        name="email"
        type="email"
        placeholder="name@email.com"
        value={email}
        setValue={setEmail}
      />
      <Input
        imgSrc={passwordImg}
        title="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
      />
      <Button className="mt-2" onClick={handleSubmit}>
        Login
      </Button>
      <Link
        to="/auth/forgot-password"
        className="text-sm w-full text-right text-gray-500 hover:underline"
      >
        Forgot Password?
      </Link>
      <SocialsLogin />
      <div className="text-sm flex w-full justify-center mt-2 gap-1">
        <p>Don't have an account?</p>
        <Link to="/auth/register" className="hover:underline text-green-600">
          Register
        </Link>
      </div>
    </form>
  );
}
