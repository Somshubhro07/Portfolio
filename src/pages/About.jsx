import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt'; // Fixed import

const About = () => {
  const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Algorithms', 'Git'];

  return (
    <section className="min-h-screen pt-20 pb-10 bg-black text-white flex items-center justify-center">
      <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-gray-900 to-pink-950 p-8 rounded-xl shadow-2xl max-w-lg border border-pink-500/50"
        >
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
            The Code King
          </h2>
          <p className="text-lg mb-6">
            I’m Somshubhro Guha, a BCA student at The Heritage Academy. I code hard, solve problems on LeetCode, and flex projects on GitHub. Hit me up!
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-pink-900 rounded-full text-sm hover:bg-pink-700 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/Somshubhro07" target="_blank">
              <img src="https://simpleicons.org/icons/github.svg" alt="GitHub" className="w-8 h-8 hover:brightness-150 transition" />
            </a>
            <a href="https://www.linkedin.com/in/somshubhro-guha-46b892272" target="_blank">
              <img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:brightness-150 transition" />
            </a>
            <a href="https://leetcode.com/u/Somshubhro_7" target="_blank">
              <img src="https://simpleicons.org/icons/leetcode.svg" alt="LeetCode" className="w-8 h-8 hover:brightness-150 transition" />
            </a>
            <a href="mailto:guha.somshubhro07@gmail.com">
              <img src="https://simpleicons.org/icons/gmail.svg" alt="Gmail" className="w-8 h-8 hover:brightness-150 transition" />
            </a>
          </div>
          <p className="text-sm text-center text-gray-400">guha.somshubhro07@gmail.com</p>
        </motion.div>
      </Tilt>
    </section>
  );
};

export default About;