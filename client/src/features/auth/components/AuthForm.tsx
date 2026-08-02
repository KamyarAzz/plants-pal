type Props = { type: 'login' | 'register' };

export default function AuthForm({ type }: Props) {
  return (
    <form>
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
}
