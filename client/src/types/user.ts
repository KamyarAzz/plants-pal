type User = {
  id?: string;
  username?: string;
  email: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export type { AuthState, User };
