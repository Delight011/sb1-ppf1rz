import React from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { useUserStore } from '../store/userStore';

const mockUser = {
  id: '1',
  name: 'Sofia Martinez',
  birthDate: new Date(1995, 5, 15),
  zodiacSign: 'Gemini',
  bio: 'Astrology enthusiast, yoga teacher, and coffee addict. Looking for someone who understands that Mercury retrograde is a valid excuse for being late.',
  profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
  interests: ['Astrology', 'Yoga', 'Travel', 'Photography', 'Meditation'],
  email: 'sofia@example.com'
};

export function DiscoverPage() {
  const { addMatch } = useUserStore();

  const handleLike = () => {
    addMatch(mockUser);
  };

  const handlePass = () => {
    // In a real app, we would fetch the next profile
  };

  return (
    <div className="flex justify-center">
      <ProfileCard
        user={mockUser}
        onLike={handleLike}
        onPass={handlePass}
      />
    </div>
  );
}