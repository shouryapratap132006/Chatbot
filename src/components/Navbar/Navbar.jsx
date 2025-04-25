"use client"
import Link from 'next/link';
import "./Navbar.css"
import { AuthContext } from '@/Context/auth';
import { useContext } from 'react';
const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="navbar">
      <div className="logo">Chatify</div>

      <div className="nav-items">
        <Link href="/home" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/explore" className="nav-link">Explore</Link>
        <Link href="/dashboard" className="nav-link">Dashboard</Link>
        {isLoggedIn ?
          <button className="logout-btn" onClick={handleLogout}>Logout</button> :
          <Link href="/auth/login" className="logout-btn">
            Login
          </Link>
        }

      </div>
    </div>
  );
}

export default Navbar