
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import Navbar from '@/components/Navbar';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
