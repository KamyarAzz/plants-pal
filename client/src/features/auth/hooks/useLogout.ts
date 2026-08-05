import { useNavigate } from 'react-router';

import { useAuthStore } from '@/stores/authStore';

export function useLogout() {
  const navigate = useNavigate();
  const logoutUser = useAuthStore((state) => state.logout);

  // TODO: implement actual logout logic with API call and error handling and loading state
  function logout() {
    logoutUser();
    navigate('/login', { replace: true });
  }

  return { logout };
}
