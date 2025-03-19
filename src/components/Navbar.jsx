import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full z-10 shadow-lg border border-pink-500/50"
    >
      <ul className="flex space-x-8">
        <li>
          <NavLink to="/" className="text-lg hover:text-pink-400 transition font-semibold">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-lg hover:text-pink-400 transition font-semibold">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="text-lg hover:text-pink-400 transition font-semibold">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/extras" className="text-lg hover:text-pink-400 transition font-semibold">Extras</NavLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;