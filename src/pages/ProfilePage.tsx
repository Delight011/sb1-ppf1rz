import React from 'react';
import { useAuthStore } from '../store/authStore';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export function ProfilePage() {
  const { currentUser } = useAuthStore();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-24 w-24 rounded-full"
            src={currentUser?.profileImage}
            alt={currentUser?.name}
          />
          <div>
            <h2 className="text-2xl font-bold">{currentUser?.name}</h2>
            <p className="text-gray-600">{currentUser?.zodiacSign}</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p className="text-gray-700">{currentUser?.bio}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {currentUser?.interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}