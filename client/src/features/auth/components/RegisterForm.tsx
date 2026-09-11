import { useState } from 'react';
import { Link } from 'react-router';

import emailImg from '@/assets/icons/email.svg';
import passwordImg from '@/assets/icons/lock.svg';
import Button from '@/components/inputs/Button';
import Input from '@/components/inputs/Input';

import { useLogin } from '../hooks/useLogin';
import SocialsLogin from './SocialsLogin';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      <Input
        imgSrc={passwordImg}
        title="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      <Button className="mt-2" onClick={handleSubmit}>
        Register
      </Button>
      <SocialsLogin />
      <div className="text-sm flex w-full justify-center mt-2 gap-1">
        <p>Already have an account?</p>
        <Link to="/auth/login" className="hover:underline text-green-600">
          Login
        </Link>
      </div>
    </form>
  );
}
