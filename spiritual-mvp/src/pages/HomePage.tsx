import { useState } from 'react';
import { priests as allPriests } from '../data/mockData';
import PriestCard from '../components/PriestCard';
import Modal from '../components/Modal';
import { Priest } from '../types';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDenomination, setSelectedDenomination] = useState<string>('Все');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPriest, setSelectedPriest] = useState<Priest | null>(null);

  const filteredPriests = allPriests.filter(priest => {
    const matchesSearch = priest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         priest.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDenomination = selectedDenomination === 'Все' || 
                                priest.denomination === selectedDenomination;
    return matchesSearch && matchesDenomination;
  });

  const handleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleMessage = (priest: Priest) => {
    setSelectedPriest(priest);
    setModalOpen(true);
  };

  const handleSendMessage = (message: string) => {
    alert(`Сообщение отправлено ${selectedPriest?.name}:\n${message}`);
  };

  return (
    <div className="home-page">
      <header className="hero">
        <h1>🙏 Поиск духовного наставника</h1>
        <p>Найдите священника для духовного окормления</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Поиск по имени или городу..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <div className="denomination-filters">
          {['Все', 'Православие', 'Католицизм', 'Протестантизм'].map(denom => (
            <button
              key={denom}
              className={`filter-btn ${selectedDenomination === denom ? 'active' : ''}`}
              onClick={() => setSelectedDenomination(denom)}
            >
              {denom}
            </button>
          ))}
        </div>
      </div>

      <div className="priests-grid">
        {filteredPriests.map(priest => (
          <PriestCard
            key={priest.id}
            priest={priest}
            onMessage={handleMessage}
            onFavorite={handleFavorite}
            isFavorite={favorites.includes(priest.id)}
          />
        ))}
      </div>

      {filteredPriests.length === 0 && (
        <p className="no-results">Ничего не найдено</p>
      )}

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        priest={selectedPriest}
        onSend={handleSendMessage}
      />
    </div>
  );
}
