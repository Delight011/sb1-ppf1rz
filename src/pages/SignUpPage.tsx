import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../components/auth/SignUpForm';

export function SignUpPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Create Your Account</h1>
      <SignUpForm />
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-purple-600 hover:text-purple-500">
          Log in
        </Link>
      </p>
    </div>
  );
}