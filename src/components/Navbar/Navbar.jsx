import React from 'react'
import Link from 'next/link';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
          <div className="logo">Chatify</div>
      
          <div className="nav-items">
            <Link href="/home" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/auth/login" className="logout-btn">Login</Link>
          </div>
        </div>
      );
}

export default Navbar