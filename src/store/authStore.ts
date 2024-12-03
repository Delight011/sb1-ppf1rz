import { create } from 'zustand';
import { User } from '../types/user';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

interface AuthStore {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  isLoading: boolean;
}

export const useAuthStore = create<AuthStore>((set) => {
  // Listen to auth state changes
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      try {
        // Fetch additional user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data() as Omit<User, 'id'>;
          set({
            currentUser: {
              id: firebaseUser.uid,
              ...userData,
              birthDate: userData.birthDate.toDate(), // Convert Firestore Timestamp to Date
            },
            isLoading: false,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        set({ currentUser: null, isLoading: false });
      }
    } else {
      set({ currentUser: null, isLoading: false });
    }
  });

  return {
    currentUser: null,
    setCurrentUser: (user) => set({ currentUser: user }),
    isLoading: true,
  };
});