"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="fixed w-full z-20 top-0 start-0 backdrop-blur bg-white/30">
        <nav className="flex justify-between w-full p-4 bg-transparent">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={isMobileMenuOpen ? toggleMobileMenu : () => ""}
            >
              <Image
                src="/images/logos/w3-l.png"
                alt="W3 StackStudio"
                width={260}
                height={68}
              />
            </Link>
          </div>

          {/* Desktop Top Banner & Navigation Section */}
          <div className="hidden md:flex flex-col justify-between">
            {/* Top Banner */}
            <div className="flex justify-end items-center py-1">
              <div className="social-media-icons">
                <button type="button"></button>
              </div>
            </div>

            {/* Navigation Menu */}
            <ul className="flex justify-end items-center">
              <li>
                <Link href="/services" className="navbar-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="navbar-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="navbar-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="navbar-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="navbar-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Top Banner & Navigation Section */}
          <span className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </span>
        </nav>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="overflow-hidden md:hidden"
        >
          <nav className="flex flex-col items-center space-y-4 p-4">
            <Link href="/services" onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link href="/portfolio" onClick={toggleMobileMenu}>
              Portfolio
            </Link>
            <Link href="/about" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
            <Link href="/blog" onClick={toggleMobileMenu}>
              Blog
            </Link>
          </nav>
        </motion.div>
      </header>
    </>
  );
};
export default Navbar;
