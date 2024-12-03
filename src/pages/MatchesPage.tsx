import React from 'react';
import { useUserStore } from '../store/userStore';
import { ProfileCard } from '../components/ProfileCard';

export function MatchesPage() {
  const { matches } = useUserStore();

  if (matches.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">No matches yet</h2>
        <p className="mt-2 text-gray-600">Keep exploring to find your astrological match!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match) => (
        <ProfileCard
          key={match.id}
          user={match}
          onMessage={() => {/* Handle message */}}
        />
      ))}
    </div>
  );
}