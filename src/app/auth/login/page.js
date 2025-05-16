'use client';

import { login } from '@/services/auth.js';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import './styles.css'; // Make sure your styles match this file
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/Context/auth';

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext)
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!form.email || !form.password) {
        alert('Please fill in both fields.');
        return;
      }

      const response = await login({
        email: form.email,
        password: form.password,
      });
      console.log('Response:', response);
      const token = response.token
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      router.push("/dashboard")
      console.log('Login successful:', response);

      // TODO: Add redirect or set context/global state here
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Login Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="text">
        Don&apos;t have an account?{' '}
        <Link href="/auth/signup" className="link">
          Signup here
        </Link>
      </p>
    </div>
  );
};

export default Login;

