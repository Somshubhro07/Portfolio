import { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const projects = [
    { id: 1, title: 'Portfolio Website', category: 'web', link: 'https://github.com/Somshubhro07/portfolio-stunning', desc: 'This very site! Built with React and Tailwind.' },
    { id: 2, title: 'LeetCode Solutions', category: 'coding', link: 'https://leetcode.com/u/Somshubhro_7', desc: 'Optimized algorithms and solutions.' },
    { id: 3, title: 'GitHub Projects', category: 'web', link: 'https://github.com/Somshubhro07', desc: 'Collection of my coding experiments.' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          My Portfolio
        </motion.h2>
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'web', 'coding'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full ${filter === category ? 'bg-indigo-600' : 'bg-gray-700'} hover:bg-indigo-500 transition shadow-md`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-indigo-500/20"
            >
              <h3 className="text-2xl font-semibold text-blue-300">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.desc}</p>
              <a href={project.link} target="_blank" className="inline-block mt-4 text-indigo-400 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;