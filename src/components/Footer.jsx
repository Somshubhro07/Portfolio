import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#1a001a] text-white py-6 text-center border-t border-[#00eaff]/50 shadow-[0_0_30px_#ffd700] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ff00ff10,#00eaff20,#8a2be210)] animate-pulse" />
      <p className="text-sm md:text-lg relative z-10">
        Crafted by{' '}
        <motion.span
          className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff]"
          animate={{ textShadow: ['0 0 20px #ff00ff', '0 0 40px #00eaff'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Somshubhro Guha
        </motion.span>{' '}
        © 2025 with{' '}
        <motion.span
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" alt="MERN" className="inline h-6 md:h-8" loading="lazy" />
        </motion.span>
      </p>
    </motion.footer>
  );
};

export default Footer;