import React, { useState } from 'react';

const TeacherHistory = ({ onBack }) => {
  // Mock teacher history data showing rewards/penalties given to students
  const historyData = [
    {
      id: 1,
      type: 'Excellent Participation',
      studentName: 'Sarah Johnson',
      date: 'Jan 15, 2025',
      amount: '+50 Sendos',
      icon: '🏆',
      category: 'reward'
    },
    {
      id: 2,
      type: 'Late Assignment',
      studentName: 'Mike Chen',
      date: 'Jan 14, 2025',
      amount: '-10 Sendos',
      icon: '⚠️',
      category: 'penalty'
    },
    {
      id: 3,
      type: 'Outstanding Project',
      studentName: 'Emma Davis',
      date: 'Jan 13, 2025',
      amount: '+75 Sendos',
      icon: '⭐',
      category: 'reward'
    },
    {
      id: 4,
      type: 'Tardiness',
      studentName: 'Alex Rodriguez',
      date: 'Jan 12, 2025',
      amount: '-10 Sendos',
      icon: '⏰',
      category: 'penalty'
    },
    {
      id: 5,
      type: 'Helping Classmates',
      studentName: 'Olivia Wilson',
      date: 'Jan 11, 2025',
      amount: '+30 Sendos',
      icon: '🤝',
      category: 'reward'
    },
    {
      id: 6,
      type: 'Disruptive Behavior',
      studentName: 'James Thompson',
      date: 'Jan 10, 2025',
      amount: '-40 Sendos',
      icon: '🚫',
      category: 'penalty'
    }
  ];

  return (
    <div className="teacher-history-container">
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
            <div key={item.id} className="teacher-history-item">
              <div className="history-icon">
                <span className={`icon ${item.category}`}>
                  {item.icon}
                </span>
              </div>
              <div className="history-details">
                <div className="history-type">{item.type}</div>
                <div className="history-student">{item.studentName}</div>
                <div className="history-date">{item.date}</div>
              </div>
              <div className="history-amount-section">
                <div className={`history-amount ${item.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                  {item.amount}
                </div>
                <button className="edit-history-button">
                  ✏️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherHistory;