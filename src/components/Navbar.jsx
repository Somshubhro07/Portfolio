import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-[#1a001a]/80 backdrop-blur-md text-white p-4 z-50 shadow-[0_0_20px_#ff00ff]"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.2, boxShadow: '0 0 40px #ffd700' }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff]"
        >
          Somshubhro
        </motion.div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <ul className={`md:flex md:space-x-10 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-[#1a001a]/90 md:bg-transparent p-6 md:p-0`}>
          {['/', '/about', '/portfolio', '/extras'].map((path, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className="block py-2 text-xl font-semibold hover:text-[#ffd700] transition relative group"
                onClick={() => setIsOpen(false)}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                <motion.span
                  className="absolute left-0 bottom-0 w-0 h-1 bg-[#00eaff] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%', background: '#ff00ff' }}
                />
              </NavLink>
            </li>
          ))}
          <li>
            <motion.button
              whileHover={{ scale: 1.3, boxShadow: '0 0 30px #00eaff' }}
              onClick={toggleDarkMode}
              className="py-2 text-2xl"
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;