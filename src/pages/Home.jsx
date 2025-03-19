import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Load the slim version of tsParticles
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 60 },
      size: { value: 4 },
      move: { enable: true, speed: 3 },
      links: { enable: true, opacity: 0.4, distance: 150 },
      color: { value: '#ff00ff' },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-7xl font-extrabold tracking-wide glitch"
          animate={{ textShadow: ['0 0 10px #ff00ff', '0 0 20px #00eaff', '0 0 10px #ff00ff'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Somshubhro Guha
        </motion.h1>
        <p className="text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
          BCA @ The Heritage Academy | Code Beast
        </p>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px #ff00ff' }}
          className="mt-8 inline-block px-10 py-4 bg-transparent border-2 border-pink-500 rounded-full text-pink-500 hover:bg-pink-500 hover:text-black transition font-bold"
        >
          Witness the Flex
        </motion.a>
      </motion.div>
      <style>{`
        .glitch {
          position: relative;
          animation: glitch 1s infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(3px, -3px); }
          60% { transform: translate(-3px, 0); }
          80% { transform: translate(3px, 0); }
          100% { transform: translate(0); }
        }
      `}</style>
    </section>
  );
};

export default Home;