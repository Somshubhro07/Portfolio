import { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'web', link: '#', desc: 'A sleek online store.' },
    { id: 2, title: 'Art Gallery', category: 'design', link: '#', desc: 'A minimalist gallery UI.' },
    { id: 3, title: 'Task Manager', category: 'web', link: '#', desc: 'A productivity app.' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-gray-800 to-blue-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Portfolio
        </motion.h2>
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'web', 'design'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${filter === category ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition`}
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
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.desc}</p>
              <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;