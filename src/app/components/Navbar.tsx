"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/car-logo.png"
              alt="car hub logo"
              width={115}
              height={10}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center mx-auto justify-center space-x-10">
          <Link href="/Cars" className="text-violet-600 hover:text-violet-900">
            Cars
          </Link>
          <Link href="/about" className="text-violet-600 hover:text-violet-900">
            About
          </Link>
          <Link href="/contact" className="text-violet-600 hover:text-violet-900">
            Contact
          </Link>
          <Link href="/signin">
            <CustomButton
              btnType="button"
              title="Sign In"
              containerStyles="text-violet-600 hover:text-violet-900 rounded-full bg-sky-100 hover:bg-sky-200"
            />
          </Link>
        </div>
        <div className="md:hidden">
          {/* Sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div className={`md:hidden ${isSidebarOpen ? '' : 'transform -translate-x-full'} bg-gray-100 py-2 px-4 fixed top-0 left-0 w-1/2 h-full z-50 transition-transform duration-300`}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center mb-3">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="car hub logo"
                width={118}
                height={18}
                className="object-contain"
              />
            </Link>
          </div>
          <Link
            href="#"
            className="text-violet-600 hover:text-violet-900"
          >
            Cars
          </Link>
          <Link
            href="#"
            className="text-violet-600 hover:text-violet-900"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-violet-600 hover:text-violet-900"
          >
            Contact
          </Link>
          <Link href="#">
            <CustomButton
              btnType="button"
              title="Sign In"
              containerStyles="text-violet-600 hover:text-violet-900 rounded-full bg-sky-100 hover:bg-sky-200"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

