import { useNavigate } from 'react-router';

import { useAuthStore } from '@/stores/authStore';

export function useLogin() {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  // TODO: implement actual login logic with API call and error handling and loading state
  function login(email: string) {
    setUser({ email, username: 'John Doe' });

    navigate('/dashboard', { replace: true });
  }

  return { login };
}
