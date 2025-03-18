import { motion } from 'framer-motion';

const About = () => {
  const skills = ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX Design', 'Animation'];

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-t from-gray-900 to-gray-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-lg mb-8">
          I'm Brom Valdez, a Creative Developer with a passion for building visually stunning and highly functional web experiences. With expertise in modern frameworks and design principles, I bring ideas to life with code.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 bg-blue-800 rounded-full text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <a
          href="/path-to-resume.pdf" // Replace with your actual resume file path
          download
          className="inline-block px-6 py-2 bg-green-600 rounded-full hover:bg-green-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;