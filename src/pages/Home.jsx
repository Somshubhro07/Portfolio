import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-blue-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Brom Valdez</h1>
        <p className="text-xl">A Creative Developer crafting stunning experiences.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;