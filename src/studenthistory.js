import React, { useState } from 'react';

const StudentHistory = ({ onBack }) => {
  const [expandedItems, setExpandedItems] = useState({});

  // Mock history data based on the image
  const historyData = [
    {
      id: 1,
      type: 'Excellent Participation',
      date: 'Jan 15, 2025',
      amount: '+50 Sendos',
      icon: '🏆',
      category: 'reward',
      details: 'Actively participated in class discussion and asked thoughtful questions.'
    },
    {
      id: 2,
      type: 'Late Assignment',
      date: 'Jan 14, 2025',
      amount: '-10 Sendos',
      icon: '⚠️',
      category: 'penalty',
      details: 'Assignment submitted 2 days after the deadline.'
    },
    {
      id: 3,
      type: 'Outstanding Project',
      date: 'Jan 13, 2025',
      amount: '+75 Sendos',
      icon: '⭐',
      category: 'reward',
      details: 'Exceptional work on the science project presentation.'
    },
    {
      id: 4,
      type: 'Missing Homework',
      date: 'Jan 12, 2025',
      amount: '-5 Sendos',
      icon: '📝',
      category: 'penalty',
      details: 'Failed to submit math homework on time.'
    },
    {
      id: 5,
      type: 'Helping Classmates',
      date: 'Jan 11, 2025',
      amount: '+30 Sendos',
      icon: '🤝',
      category: 'reward',
      details: 'Helped struggling classmates understand difficult concepts.'
    },
    {
      id: 6,
      type: 'Disruptive Behavior',
      date: 'Jan 10, 2025',
      amount: '-40 Sendos',
      icon: '🚫',
      category: 'penalty',
      details: 'Disrupted class during lesson time despite warnings.'
    }
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="history-container">
      {/* Header */}
      <div className="history-header">
        <button className="back-button" onClick={onBack}>
          ←
        </button>
        <h1 className="history-title">History</h1>
      </div>

      {/* History List */}
      <div className="history-content">
        <div className="history-list">
          {historyData.map((item) => (
            <div key={item.id} className="history-item">
              <div 
                className="history-item-main"
                onClick={() => toggleExpanded(item.id)}
              >
                <div className="history-icon">
                  <span className={`icon ${item.category}`}>
                    {item.icon}
                  </span>
                </div>
                <div className="history-details">
                  <div className="history-type">{item.type}</div>
                  <div className="history-date">{item.date}</div>
                </div>
                <div className="history-amount-section">
                  <div className={`history-amount ${item.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                    {item.amount}
                  </div>
                  <div className={`expand-arrow ${expandedItems[item.id] ? 'expanded' : ''}`}>
                    ▼
                  </div>
                </div>
              </div>
              
              {expandedItems[item.id] && (
                <div className="history-item-expanded">
                  <div className="history-description">
                    {item.details}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentHistory;