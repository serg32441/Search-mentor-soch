import { Priest } from '../types';

interface PriestCardProps {
  priest: Priest;
  onMessage: (priest: Priest) => void;
  onFavorite: (id: number) => void;
  isFavorite: boolean;
}

export default function PriestCard({ priest, onMessage, onFavorite, isFavorite }: PriestCardProps) {
  return (
    <div className="priest-card">
      <div className="priest-avatar">{priest.avatar}</div>
      <div className="priest-info">
        <h3>{priest.name}</h3>
        <span className={`denomination ${priest.denomination.toLowerCase()}`}>
          {priest.denomination}
        </span>
        <p className="city">📍 {priest.city}</p>
        <p className="experience">⏳ {priest.experience} лет опыта</p>
        <p className="rating">⭐ {priest.rating}</p>
        <p className="description">{priest.description}</p>
        <div className="priest-actions">
          <button className="btn-message" onClick={() => onMessage(priest)}>
            ✉️ Написать
          </button>
          <button 
            className={`btn-favorite ${isFavorite ? 'active' : ''}`} 
            onClick={() => onFavorite(priest.id)}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
}
