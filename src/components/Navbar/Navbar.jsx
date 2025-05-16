"use client"
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '@/Context/auth';
import './Navbar.css';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">E.D.I.T.H </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/home" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/explore" className="nav-link">Explore</Link>
        <Link href="/dashboard" className="nav-link">Dashboard</Link>
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link href="/auth/login" className="logout-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
