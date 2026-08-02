import FormInput from '@/components/ui/FormInput';

type Props = { type: 'login' | 'register' };

export default function AuthForm({ type }: Props) {
  return (
    <form className="flex flex-col gap-2 bg-stone-200 p-4">
      <FormInput title="Email" name="email" type="email" placeholder="Email" />
      <FormInput title="Password" name="password" type="password" placeholder="Password" />
      <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
}
