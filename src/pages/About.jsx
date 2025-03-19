import { motion } from 'framer-motion';

const About = () => {
  const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Problem Solving', 'Git'];

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-t from-gray-900 to-indigo-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I’m Somshubhro Guha, a BCA student at The Heritage Academy, passionate about technology and software development. I enjoy tackling coding challenges on LeetCode, building projects on GitHub, and exploring modern web technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 bg-indigo-700 rounded-full text-sm shadow-md hover:bg-indigo-600 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/somshubhro-guha-46b892272" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="https://github.com/Somshubhro07" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
          <a href="https://leetcode.com/u/Somshubhro_7" target="_blank" className="text-blue-400 hover:underline">LeetCode</a>
        </div>
      </div>
    </section>
  );
};

export default About;