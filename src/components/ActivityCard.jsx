import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      {/* ...existing card content... */}
      <div className="participants-section">
        <h4>Participantes</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul className="participants-list">
            {activity.participants.map((name, idx) => (
              <li key={idx} className="participant-item">
                <span role="img" aria-label="user">👤</span> {name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-participants">Nenhum participante inscrito ainda.</p>
        )}
      </div>
    </div>
  );
}

export default ActivityCard;