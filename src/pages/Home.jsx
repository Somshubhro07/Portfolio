/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white relative overflow-hidden">
      {/* Flying Object */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 text-4xl opacity-50"
      >
        💻
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Hi, I'm Somshubhro Guha
        </h1>
        <p className="text-2xl mb-6">BCA Student | The Heritage Academy</p>
        <p className="text-lg max-w-md mx-auto">
          Aspiring developer passionate about coding, problem-solving, and building impactful projects.
        </p>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05 }}
          className="mt-6 inline-block px-8 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition shadow-lg"
        >
          See My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;