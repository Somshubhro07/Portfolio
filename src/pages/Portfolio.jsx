import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  const projects = [
    { title: 'Portfolio Flex', link: 'https://github.com/Somshubhro07/portfolio-stunning', desc: 'This site—next-level heat!' },
    { title: 'LeetCode Grind', link: 'https://leetcode.com/u/Somshubhro_7', desc: 'Algo domination.' },
    { title: 'GitHub Vibes', link: 'https://github.com/Somshubhro07', desc: 'Where I flex my code.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="min-h-screen pt-20 pb-10 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500"
      >
        My Dope Creations
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px #ff00ff' }}
              className="bg-gradient-to-br from-gray-900 to-pink-950 p-6 rounded-xl border border-pink-500/50"
            >
              <h3 className="text-3xl font-bold text-pink-400">{project.title}</h3>
              <p className="text-lg text-gray-300 mt-2">{project.desc}</p>
              <a href={project.link} target="_blank" className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition font-semibold">
                Peep This
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;