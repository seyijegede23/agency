import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";
import ThemetoggleBtn from "./ThemetoggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-20 sticky top-0 z-20 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 shadow-sm"
    >
      {/* Logo */}
      <motion.img
        src={theme === "dark" ? assets.real_logo : assets.real_logo}
        className="w-32 sm:w-40 cursor-pointer"
        alt="Reliant Technology software development company"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Navigation Links (Desktop + Sidebar) */}
      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 640) && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
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
            {["Home", "Services", "Our Works", "Contact Us"].map((item, i) => (
              <motion.a
                key={i}
                onClick={() => setSidebarOpen(false)}
                href={
                  item === "Home"
                    ? "#"
                    : `#${item.toLowerCase().replace(" ", "-")}`
                }
                className="sm:hover:border-b cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Side - Buttons */}
      <div className="flex items-center gap-4">
        {/* Contact Button (Hidden on Mobile) */}
        <motion.a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 
          bg-primary text-white px-6 py-2 rounded-full cursor-pointer 
          hover:scale-105 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect
          <img
            src={assets.arrow_icon}
            alt="Contact us for software development"
            width={14}
          />
        </motion.a>

        {/* Theme Toggle */}
        <ThemetoggleBtn theme={theme} setTheme={setTheme} />

        {/* Hamburger Menu (Visible on Mobile) */}
        <motion.img
          src={assets.menu_icon}
          alt="menu icon"
          className="w-6 sm:hidden cursor-pointer"
          whileTap={{ scale: 0.8 }}
          onClick={() => setSidebarOpen(true)}
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
