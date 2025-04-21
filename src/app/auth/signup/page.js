'use client';

import { signup } from '@/services/auth';
import React, { useState } from 'react';
import Link from 'next/link';
import './styles.css'; // Reuse this or rename to something like AuthForm.css

const Signup = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      const response = await signup({ email: form.email, password: form.password });
      console.log('Signup successful:', response);
      // Optional: redirect or success feedback
    } catch (err) {
      console.error('Signup failed:', err);
      alert('Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Signup Page</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button className="button" type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
      <p className="text">
        Already have an account? <Link href="/auth/login" className="link">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
