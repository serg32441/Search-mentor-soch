import React from 'react';
import { Priest } from '../types';

interface PriestCardProps {
  priest: Priest;
  onMessage: (priest: Priest) => void;
  onToggleFavorite: (id: number) => void;
  isFavorite: boolean;
}

const PriestCard: React.FC<PriestCardProps> = ({ 
  priest, 
  onMessage, 
  onToggleFavorite, 
  isFavorite 
}) => {
  return (
    <div className="priest-card">
      <div className="priest-image">
        👨‍✝️
      </div>
      <div className="priest-info">
        <h3 className="priest-name">{priest.name}</h3>
        <p className="priest-confession">{priest.confession}</p>
        <p className="priest-denomination">{priest.denomination}</p>
        <p className="priest-location">📍 {priest.location}</p>
        <p className="priest-bio">{priest.bio}</p>
        
        <div className="priest-stats">
          <span className="priest-rating">⭐ {priest.rating}</span>
          <span className="priest-experience">{priest.experienceYears} лет опыта</span>
        </div>
        
        <div className="card-actions">
          <button 
            className="btn btn-primary"
            onClick={() => onMessage(priest)}
          >
            ✉️ Написать
          </button>
          <button 
            className={`btn btn-favorite ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(priest.id)}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriestCard;
