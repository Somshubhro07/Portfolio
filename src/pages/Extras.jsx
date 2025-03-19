import { useState } from 'react';
import { motion } from 'framer-motion';

const Extras = () => {
  // Memory Game State
  const [cards, setCards] = useState([
    { id: 1, value: '💾', flipped: false },
    { id: 2, value: '💾', flipped: false },
    { id: 3, value: '🚀', flipped: false },
    { id: 4, value: '🚀', flipped: false },
  ]);
  const [flipped, setFlipped] = useState([]);

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

  // Feedback Form State
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted! (Simulated)');
    setFormData({ name: '', message: '' });
  };

  return (
    <section className="min-h-screen pt-20 pb-10 bg-gradient-to-tr from-gray-900 to-indigo-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Extras
        </motion.h2>

        {/* Mini Game */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-4 text-indigo-300">Memory Challenge</h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {cards.map(card => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick(card.id)}
                className={`h-20 flex items-center justify-center bg-gray-800 rounded-lg cursor-pointer shadow-md ${card.flipped ? 'bg-indigo-600' : 'bg-gray-700'}`}
              >
                {card.flipped ? card.value : '?'}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feedback Form */}
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-center mb-4 text-indigo-300">Drop a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded bg-gray-700 text-white border border-indigo-500/30 focus:outline-none focus:border-indigo-500"
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded bg-gray-700 text-white border border-indigo-500/30 focus:outline-none focus:border-indigo-500"
              rows="4"
              required
            />
            <button type="submit" className="w-full p-3 bg-indigo-600 rounded hover:bg-indigo-700 transition shadow-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Extras;