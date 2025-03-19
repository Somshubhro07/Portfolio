import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 60 },
      size: { value: { min: 2, max: 6 }, random: true },
      move: { enable: true, speed: 3, direction: 'random' },
      color: { value: ['#ff00ff', '#00eaff', '#ffd700'] },
      shape: { type: ['circle', 'triangle'] },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'bubble' } },
      modes: { repulse: { distance: 150 }, bubble: { distance: 200, size: 10 } },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a001a] via-[#000000] to-[#001a1a] text-white relative overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 object-cover w-full h-full opacity-20 mix-blend-overlay">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-matrix-code-animated-background-13747-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff00ff10,#00eaff20,#8a2be220)] animate-pulse" />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-5xl md:text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00eaff] animate-glitch"
          animate={{ textShadow: ['0 0 20px #ff00ff', '0 0 40px #00eaff', '0 0 60px #ffd700'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Somshubhro Guha
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
          className="text-xl md:text-3xl mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#ffd700]"
        >
          BCA @ The Heritage Academy | Code Deity
        </motion.p>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.3, boxShadow: '0 0 50px #ff00ff, 0 0 80px #00eaff' }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block px-10 py-4 bg-[#1a001a]/80 border-2 border-[#00eaff] rounded-full text-[#00eaff] hover:bg-[#00eaff] hover:text-[#1a001a] transition shadow-[0_0_30px_#ffd700]"
        >
          Enter the Realm
        </motion.a>
      </motion.div>
      <style>{`
        .animate-glitch {
          animation: glitch 0.8s infinite;
          position: relative;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(5px, -5px); }
          60% { transform: translate(-3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Home;