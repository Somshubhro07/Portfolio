import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  const projects = [
    { title: 'Portfolio Flex', link: 'https://github.com/Somshubhro07/portfolio-stunning', desc: 'This site—cosmic explosion!' },
    { title: 'LeetCode Grind', link: 'https://leetcode.com/u/Somshubhro_7', desc: 'Algo annihilation.' },
    { title: 'GitHub Galaxy', link: 'https://github.com/Somshubhro07', desc: 'My code universe.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-[#1a001a] via-[#000000] to-[#001a1a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ff00ff20,#00eaff30,#8a2be220)] animate-pulse" />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff] shadow-[0_0_30px_#ffd700]"
      >
        Galactic Creations
      </motion.h2>
      <div className="max-w-3xl mx-auto px-4">
        <Slider {...settings}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ff00ff, 0 0 60px #00eaff' }}
              className="bg-[#1a001a]/80 backdrop-blur-md p-6 rounded-xl border border-[#00eaff]/50 shadow-[0_0_20px_#ffd700]"
            >
              <h3 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#8a2be2]">{project.title}</h3>
              <p className="text-base md:text-xl text-gray-300 mt-2">{project.desc}</p>
              <motion.a
                href={project.link}
                target="_blank"
                whileHover={{ scale: 1.1, color: '#ffd700' }}
                className="inline-block mt-4 text-[#00eaff] hover:text-[#ffd700] transition font-semibold"
              >
                Explore Now
              </motion.a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;