import { Link } from 'react-router';

import FormInput from '@/components/ui/FormInput';
type Props = { type: 'login' | 'register' };
import emailImg from '@/assets/icons/email.svg';
import passwordImg from '@/assets/icons/lock.svg';
import Button from '@/components/ui/Button';

export default function AuthForm({ type }: Props) {
  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <form className="flex flex-col shadow-md gap-2 bg-white rounded-md p-4">
      <FormInput imgSrc={emailImg} title="Email" name="email" type="email" />
      <FormInput imgSrc={passwordImg} title="Password" name="password" type="password" />
      <div className="text-sm flex gap-1">
        <p> {type === 'login' ? "Don't have an account?" : 'Already have an account?'}</p>
        <Link to={type === 'login' ? '/register' : '/login'} className=" hover:underline">
          {type === 'login' ? 'Register' : 'Login'}
        </Link>
      </div>
      <Button className="mt-8" onClick={handleSubmit}>
        {type === 'login' ? 'Login' : 'Register'}
      </Button>
    </form>
  );
}
