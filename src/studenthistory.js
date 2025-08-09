import React, { useState } from 'react';
import './App.css';

const StudentHistory = ({ onBack }) => {
  const [expandedItems, setExpandedItems] = useState({});

  // Mock history data with rewards and penalties
  const historyData = [
    {
      id: 1,
      type: 'reward',
      title: 'Excellent Participation',
      date: 'Jan 15, 2025',
      amount: '+50 Sendos',
      icon: '🏆'
    },
    {
      id: 2,
      type: 'penalty',
      title: 'Late Assignment',
      date: 'Jan 14, 2025',
      amount: '-10 Sendos',
      icon: '▲'
    },
    {
      id: 3,
      type: 'reward',
      title: 'Outstanding Project',
      date: 'Jan 13, 2025',
      amount: '+75 Sendos',
      icon: '⭐'
    },
    {
      id: 4,
      type: 'penalty',
      title: 'Missing Homework',
      date: 'Jan 12, 2025',
      amount: '-5 Sendos',
      icon: '😔'
    },
    {
      id: 5,
      type: 'reward',
      title: 'Helping Classmates',
      date: 'Jan 11, 2025',
      amount: '+30 Sendos',
      icon: '🤝'
    },
    {
      id: 6,
      type: 'penalty',
      title: 'Disruptive Behavior',
      date: 'Jan 10, 2025',
      amount: '-40 Sendos',
      icon: '🚫'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="student-history">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="time">8:15</div>
        <div className="signal-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="history-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="page-title">Rewards & Penalties</h1>
        <div className="header-spacer"></div>
      </div>

      {/* History List */}
      <div className="history-container">
        <div className="history-list">
          {historyData.map((item) => (
            <div key={item.id} className="history-list-item">
              <div className="item-header" onClick={() => toggleExpand(item.id)}>
                <div className="item-left">
                  <div className={`item-icon ${item.type}`}>
                    {item.icon}
                  </div>
                  <div className="item-info">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-date">{item.date}</p>
                  </div>
                </div>
                <div className="item-right">
                  <span className={`item-amount ${item.type}`}>
                    {item.amount}
                  </span>
                  <svg 
                    className={`chevron ${expandedItems[item.id] ? 'expanded' : ''}`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path d="M6 9L12 15L18 9" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {expandedItems[item.id] && (
                <div className="item-details">
                  <p className="detail-text">
                    {item.type === 'reward' 
                      ? `You earned ${item.amount} for ${item.title.toLowerCase()}.`
                      : `You were penalized ${item.amount} for ${item.title.toLowerCase()}.`
                    }
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </div>
  );
};

export default StudentHistory;