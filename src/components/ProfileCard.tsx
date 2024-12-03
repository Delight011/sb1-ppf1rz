import React from 'react';
import { Heart, X, MessageCircle } from 'lucide-react';
import { User } from '../types/user';
import { format } from 'date-fns';

interface ProfileCardProps {
  user: User;
  onLike: () => void;
  onPass: () => void;
  onMessage?: () => void;
}

export function ProfileCard({ user, onLike, onPass, onMessage }: ProfileCardProps) {
  return (
    <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={user.profileImage}
        alt={user.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">
              {format(user.birthDate, 'PP')} • {user.zodiacSign}
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{user.bio}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {user.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={onPass}
            className="p-4 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
          >
            <X size={24} />
          </button>
          <button
            onClick={onLike}
            className="p-4 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
          >
            <Heart size={24} />
          </button>
          {onMessage && (
            <button
              onClick={onMessage}
              className="p-4 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <MessageCircle size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}