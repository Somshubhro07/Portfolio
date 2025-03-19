import { useState } from 'react';
import { motion } from 'framer-motion';

const Extras = () => {
  const [cards, setCards] = useState([
    { id: 1, value: '💾', flipped: false },
    { id: 2, value: '💾', flipped: false },
    { id: 3, value: '🚀', flipped: false },
    { id: 4, value: '🚀', flipped: false },
  ]);
  const [flipped, setFlipped] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleCardClick = (id) => {
    if (flipped.length < 2) {
      const newCards = cards.map(card =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setCards(newCards);
      setFlipped([...flipped, id]);
      if (flipped.length === 1) {
        const [firstId] = flipped;
        const firstCard = cards.find(c => c.id === firstId);
        const secondCard = cards.find(c => c.id === id);
        if (firstCard.value !== secondCard.value) {
          setTimeout(() => {
            setCards(cards.map(c => (c.flipped && (c.id === firstId || c.id === id)) ? { ...c, flipped: false } : c));
            setFlipped([]);
          }, 1000);
        } else {
          setFlipped([]);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cosmic message sent!');
    setFormData({ name: '', message: '' });
  };

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-[#1a001a] via-[#000000] to-[#001a1a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ff00ff20,#00eaff30,#8a2be220)] animate-pulse" />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff] shadow-[0_0_30px_#ffd700]"
      >
        Cosmic Extras
      </motion.h2>
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#ffd700]">Memory Nebula</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
            {cards.map(card => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px #ff00ff' }}
                onClick={() => handleCardClick(card.id)}
                className={`h-20 md:h-24 flex items-center justify-center bg-[#1a001a]/80 rounded-lg cursor-pointer border ${card.flipped ? 'bg-[#8a2be2] border-[#00eaff]' : 'border-[#ffd700]/50'} shadow-[0_0_15px_#ff00ff]`}
              >
                {card.flipped ? card.value : '?'}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-md mx-auto bg-[#1a001a]/80 backdrop-blur-md p-6 rounded-xl border border-[#00eaff]/50 shadow-[0_0_40px_#ffd700]"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00eaff]">Beam Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded bg-[#000000]/80 text-white border border-[#00eaff]/50 focus:outline-none focus:border-[#ffd700] shadow-[0_0_20px_#ff00ff]"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded bg-[#000000]/80 text-white border border-[#00eaff]/50 focus:outline-none focus:border-[#ffd700] shadow-[0_0_20px_#ff00ff]"
              rows="4"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ff00ff' }}
              type="submit"
              className="w-full p-3 bg-[#8a2be2] rounded hover:bg-[#ffd700] transition shadow-[0_0_30px_#00eaff]"
            >
              Transmit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Extras;