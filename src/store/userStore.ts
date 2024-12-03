import { create } from 'zustand';
import { User } from '../types/user';

interface UserStore {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  matches: User[];
  addMatch: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
  matches: [],
  addMatch: (user) => set((state) => ({ matches: [...state.matches, user] })),
}));