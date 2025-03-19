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
    alert('Yo, feedback dropped—respect!');
    setFormData({ name: '', message: '' });
  };

  return (
    <section className="min-h-screen pt-20 pb-10 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500"
      >
        Extra Sauce
      </motion.h2>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-4 text-pink-400">Memory Flex</h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {cards.map(card => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px #ff00ff' }}
                onClick={() => handleCardClick(card.id)}
                className={`h-24 flex items-center justify-center bg-gray-900 rounded-lg cursor-pointer border ${card.flipped ? 'bg-pink-600 border-pink-500' : 'border-cyan-500/50'}`}
              >
                {card.flipped ? card.value : '?'}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="max-w-md mx-auto bg-gradient-to-br from-gray-900 to-pink-950 p-6 rounded-xl border border-pink-500/50">
          <h3 className="text-3xl font-bold text-center mb-4 text-cyan-400">Hit Me Up</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-pink-500/50 focus:outline-none focus:border-pink-500"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-pink-500/50 focus:outline-none focus:border-pink-500"
              rows="4"
              required
            />
            <button type="submit" className="w-full p-3 bg-pink-600 rounded hover:bg-pink-700 transition shadow-lg">
              Send It
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Extras;