import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const About = () => {
  const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Algorithms', 'Git'];

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-[#1a001a] via-[#000000] to-[#001a1a] text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ff00ff10,#00eaff20,#8a2be220)] animate-pulse" />
      <Tilt options={{ max: 25, scale: 1.05 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="bg-[#1a001a]/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-[0_0_40px_#ffd700] max-w-md border border-[#00eaff]/50"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff]">
            The Code Overlord
          </h2>
          <p className="text-base md:text-xl mb-6 text-gray-300">
            I’m Somshubhro Guha, a BCA student at The Heritage Academy. I code like a beast, shred LeetCode, and build galactic empires. Contact me!
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="px-3 py-1 md:px-4 md:py-2 bg-[#8a2be2]/70 rounded-full text-sm hover:bg-[#ffd700]/70 transition shadow-[0_0_15px_#ff00ff]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-center gap-4 md:gap-6 relative">
            {[
              { url: 'https://github.com/Somshubhro07', icon: 'https://simpleicons.org/icons/github.svg' },
              { url: 'https://www.linkedin.com/in/somshubhro-guha-46b892272', icon: 'https://simpleicons.org/icons/linkedin.svg' },
              { url: 'https://leetcode.com/u/Somshubhro_7', icon: 'https://simpleicons.org/icons/leetcode.svg' },
              { url: 'mailto:guha.somshubhro07@gmail.com', icon: 'https://simpleicons.org/icons/gmail.svg' },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                whileHover={{ scale: 1.3, boxShadow: '0 0 20px #00eaff' }}
                className="p-2 rounded-full bg-[#1a001a]/80"
              >
                <img src={link.icon} alt="" className="w-6 h-6 md:w-8 md:h-8" loading="lazy" />
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-center text-gray-400 mt-4">guha.somshubhro07@gmail.com</p>
        </motion.div>
      </Tilt>
    </section>
  );
};

export default About;