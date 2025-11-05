import { useState } from "react";
import assets from "../assets/assets";
import ThemetoggleBtn from "./ThemetoggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-20 sticky top-0 z-20 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70">
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.real_logo : assets.real_logo}
        className="w-32 sm:w-40"
        alt="Reliant Technology software development company"
      />

      {/* Navigation Links */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm max-sm:w-60 max-sm:pl-10
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full 
        max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
        flex sm:items-center gap-5 transition-all duration-500
        ${sidebarOpen ? "max-sm:right-0" : "max-sm:-right-64"}`}
      >
        {/* Close Icon */}
        <img
          src={assets.close_icon}
          alt="close icon"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Menu Links */}
        <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">
          Home
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className="sm:hover:border-b">
          Services
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work" className="sm:hover:border-b">
          Our Works
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b">
          Contact Us
        </a>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex items-center gap-4">
        {/* Contact Button (Hidden on Mobile) */}
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 
          bg-primary text-white px-6 py-2 rounded-full cursor-pointer 
          hover:scale-105 transition-all"
        >
          Connect
          <img
            src={assets.arrow_icon}
            alt="Contact us for software development"
            width={14}
          />
        </a>

      <ThemetoggleBtn theme={theme} setTheme={setTheme}/>

        {/* Hamburger Menu (Visible on Mobile) */}
        <img
          src={assets.menu_icon}
          alt="menu icon"
          className="w-6 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
    </div>
  )
}

export default Navbar;
