import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function AuthLayout() {
  const { currentUser } = useAuthStore();

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Outlet />
    </main>
  );
}