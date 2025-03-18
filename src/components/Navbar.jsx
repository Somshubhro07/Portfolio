import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white p-4 z-10"
    >
      <ul className="flex justify-center space-x-8">
        <li><NavLink to="/" className="hover:text-blue-300 transition">Home</NavLink></li>
        <li><NavLink to="/about" className="hover:text-blue-300 transition">About</NavLink></li>
        <li><NavLink to="/portfolio" className="hover:text-blue-300 transition">Portfolio</NavLink></li>
        <li><NavLink to="/extras" className="hover:text-blue-300 transition">Extras</NavLink></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;