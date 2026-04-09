import React, { useState } from 'react';
import { Priest, Confession } from '../types';
import { mockPriests } from '../data/mockData';
import PriestCard from '../components/PriestCard';
import Modal from '../components/Modal';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConfession, setSelectedConfession] = useState<Confession | 'Все'>('Все');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [selectedPriest, setSelectedPriest] = useState<Priest | null>(null);
  const [messageText, setMessageText] = useState('');

  const confessions: (Confession | 'Все')[] = ['Все', 'Православие', 'Католицизм', 'Протестантизм'];

  const filteredPriests = mockPriests.filter(priest => {
    const matchesSearch = priest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         priest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         priest.denomination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesConfession = selectedConfession === 'Все' || priest.confession === selectedConfession;
    return matchesSearch && matchesConfession;
  });

  const handleToggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleMessage = (priest: Priest) => {
    setSelectedPriest(priest);
    setMessageModalOpen(true);
  };

  const handleSendMessage = () => {
    alert(`Сообщение отправлено ${selectedPriest?.name}!\n\n${messageText}`);
    setMessageText('');
    setMessageModalOpen(false);
    setSelectedPriest(null);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Найдите своего духовного наставника</h1>
          <p>Христианские священники и пасторы готовы помочь вам на духовном пути</p>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Поиск по имени, городу или деноминации..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            {confessions.map(confession => (
              <button
                key={confession}
                className={`filter-tab ${selectedConfession === confession ? 'active' : ''}`}
                onClick={() => setSelectedConfession(confession)}
              >
                {confession}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">
          {selectedConfession === 'Все' 
            ? 'Все священники' 
            : `Священники (${selectedConfession})`
          } ({filteredPriests.length})
        </h2>
        <div className="priests-grid">
          {filteredPriests.map(priest => (
            <PriestCard
              key={priest.id}
              priest={priest}
              onMessage={handleMessage}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.includes(priest.id)}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={messageModalOpen}
        onClose={() => {
          setMessageModalOpen(false);
          setSelectedPriest(null);
          setMessageText('');
        }}
        title={`Написать: ${selectedPriest?.name}`}
      >
        <div className="auth-form">
          <div className="form-group">
            <label className="form-label">Ваше сообщение</label>
            <textarea
              className="form-input form-textarea message-area"
              placeholder="Напишите ваше сообщение..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSendMessage}>
            ✉️ Отправить
          </button>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
