import AuthForm from '../components/AuthForm';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-100">
      <AuthForm type="login" />
    </div>
  );
}
