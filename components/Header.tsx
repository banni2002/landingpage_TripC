"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserRound, ShoppingBag, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        // Chỉ áp dụng cho desktop (md trở lên)
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // Cuộn xuống -> Ẩn header
        } else {
          setIsVisible(true); // Cuộn lên -> Hiện header
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-pink-50 py-4 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <Image src="/images/Logo-tripc.png" alt="Logo TripC" width={155} height={50} />
        </div>
        {/* Mobile logo */}
        <div className="md:hidden flex items-center gap-2">
          <Image src="/images/Logo-tripc.png" alt="Logo TripC" width={130} height={52} />
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-6 mr-6">
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/about" className="font-medium">About</Link>
          <Link href="/blog" className="font-medium">Blog</Link>
          <Link href="/pages" className="font-medium">Pages</Link>
          <Link href="/support" className="font-medium">Support</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/account" aria-label="Account">
            <UserRound className="h-5 w-5" />
          </Link>
          <Link href="/cart" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

            {/* Overlay */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 backdrop-blur-sm bg-white/30 z-20"
                onClick={toggleMenu} // Đóng menu khi bấm ra ngoài
              />
            )}

            {/* Mobile menu slide-in */}
            {/* Mobile menu slide-in */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/3 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close Menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6">
          <Link href="/" className="font-medium" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="font-medium" onClick={toggleMenu}>About</Link>
          <Link href="/blog" className="font-medium" onClick={toggleMenu}>Blog</Link>
          <Link href="/pages" className="font-medium" onClick={toggleMenu}>Pages</Link>
          <Link href="/support" className="font-medium" onClick={toggleMenu}>Support</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
