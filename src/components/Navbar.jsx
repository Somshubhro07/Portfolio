import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-gradient-to-r from-gray-900 to-indigo-900 text-white p-4 z-10 shadow-lg"
    >
      <ul className="flex justify-center space-x-10">
        <li>
          <NavLink to="/" className="text-lg hover:text-indigo-300 transition font-semibold">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-lg hover:text-indigo-300 transition font-semibold">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="text-lg hover:text-indigo-300 transition font-semibold">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/extras" className="text-lg hover:text-indigo-300 transition font-semibold">Extras</NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;