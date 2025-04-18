"use client"

import { AuthContext } from '@/Context/auth';
import React, { useContext } from 'react';

const Dashboard = () => {
  const globalData = useContext(AuthContext);
  const isLoggedIn = globalData.isLoggedIn;

  if (!isLoggedIn) {
    return <>Please login first</>;
  }

  return (
    <div>Dashboard</div>
  );
};

export default Dashboard;
