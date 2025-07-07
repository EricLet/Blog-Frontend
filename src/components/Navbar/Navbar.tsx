import React from 'react';
import Link from 'next/link';
import { BiPlus, BiSolidUserCircle, BiSearchAlt } from 'react-icons/bi';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/pages/profile">
          <BiSolidUserCircle className="icon" />
        </Link>
        <Link href="/search">
          <BiSearchAlt className="icon" />
        </Link>
        <Link href="/pages/addblog">
          <BiPlus className="icon" />
        </Link>
      </div>
      <div className="navbar-middle">
        <Link href="/">
          <Image
            className="logo"
            src={logo}
            alt="Picture of the comapany"
          />
        </Link>
      </div>
      <div className="navbar-right">
        <Link href="/">Home</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
