import { create } from 'zustand';

import type { AuthState } from '@/types/user';

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export { useAuthStore };
