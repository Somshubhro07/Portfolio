import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black text-white py-4 text-center border-t border-pink-500/50"
    >
      <p className="text-sm">
        Made with{' '}
        <img
          src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs"
          alt="MERN Stack"
          className="inline h-6"
        />{' '}
        by Somshubhro Guha © 2025
      </p>
    </motion.footer>
  );
};

export default Footer;