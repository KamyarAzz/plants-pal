import FormInput from '@/components/ui/FormInput';
type Props = { type: 'login' | 'register' };
import emailImg from '@/assets/icons/email.svg';
import passwordImg from '@/assets/icons/lock.svg';

export default function AuthForm({ type }: Props) {
  return (
    <form className="flex flex-col gap-2 bg-stone-200 p-4">
      <FormInput imgSrc={emailImg} title="Email" name="email" type="email" />
      <FormInput imgSrc={passwordImg} title="Password" name="password" type="password" />
      <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
}
