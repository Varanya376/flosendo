import React, { useState } from 'react';

const StudentProfile = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('profile'); // 'profile' or 'leaderboard'

  // Mock student data
  const studentData = {
    name: 'Alex Thompson',
    email: 'alex@london.edu',
    avatar: '👤',
    stats: {
      points: 2425,
      assets: 3,
      credits: 137
    },
    details: {
      batch: '2025-2026',
      grade: 'Grade 5A',
      school: 'London School',
      class: 'Mathematics'
    }
  };

  // Mock leaderboard data
  const leaderboardData = [
    { id: 1, name: 'Jennie', points: 2850, rank: 1, avatar: '👩' },
    { id: 2, name: 'Katia', points: 2600, rank: 2, avatar: '👧' },
    { id: 3, name: 'Alex', points: 2425, rank: 3, avatar: '👤', isCurrentUser: true },
    { id: 4, name: 'Zoe', points: 2200, rank: 4, avatar: '👩‍🦱' },
    { id: 5, name: 'Loopy', points: 2050, rank: 5, avatar: '👨' },
    { id: 6, name: 'Brian', points: 1900, rank: 6, avatar: '👦' }
  ];

  // Profile View
  const renderProfile = () => (
    <div className="profile-scroll-content">
      <div className="profile-main">
        <div className="profile-avatar-section">
          <div className="profile-avatar-large">
            <span className="avatar-icon-large">{studentData.avatar}</span>
          </div>
          <h2 className="profile-name">{studentData.name}</h2>
          <p className="profile-email">{studentData.email}</p>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-icon">❤️</div>
            <div className="stat-value">{studentData.stats.points}</div>
            <div className="stat-label">Sendos</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏠</div>
            <div className="stat-value">{studentData.stats.assets}</div>
            <div className="stat-label">Assets</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❤️</div>
            <div className="stat-value">{studentData.stats.credits}</div>
            <div className="stat-label">Total Credits</div>
          </div>
        </div>

        <button 
          className="leaderboard-button"
          onClick={() => setCurrentView('leaderboard')}
        >
          Browse Leaderboard
        </button>

        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Batch:</span>
            <span className="detail-value">{studentData.details.batch}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Grade:</span>
            <span className="detail-value">{studentData.details.grade}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">School:</span>
            <span className="detail-value">{studentData.details.school}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Class:</span>
            <span className="detail-value">{studentData.details.class}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="help-button">
            ❓ Help and Support
          </button>
        </div>
      </div>
    </div>
  );

  // Leaderboard View
  const renderLeaderboard = () => (
    <div className="profile-scroll-content">
      <div className="leaderboard-main">
        <h2 className="leaderboard-title">Leader Board</h2>

        <div className="leaderboard-list">
          {leaderboardData.map((student) => (
            <div 
              key={student.id} 
              className={`leaderboard-item ${student.isCurrentUser ? 'current-user' : ''}`}
            >
              <div className="leaderboard-rank">{student.rank}</div>
              <div className="leaderboard-avatar">
                <span className="leaderboard-avatar-icon">{student.avatar}</span>
              </div>
              <div className="leaderboard-info">
                <div className="leaderboard-name">{student.name}</div>
                <div className="leaderboard-points">{student.points} Sendos</div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-summary">
          <h3 className="summary-title">My Summary</h3>
          <div className="summary-stats">
            <div className="summary-stat">
              <div className="summary-icon">💎</div>
              <div className="summary-value">{studentData.stats.points}</div>
              <div className="summary-label">Sendos</div>
            </div>
            <div className="summary-stat">
              <div className="summary-icon">🏠</div>
              <div className="summary-value">{studentData.stats.assets}</div>
              <div className="summary-label">Assets</div>
            </div>
            <div className="summary-stat">
              <div className="summary-icon">❤️</div>
              <div className="summary-value">{studentData.stats.credits}</div>
              <div className="summary-label">Total Credits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getCurrentContent = () => {
    switch (currentView) {
      case 'profile':
        return renderProfile();
      case 'leaderboard':
        return renderLeaderboard();
      default:
        return renderProfile();
    }
  };

  return (
    <div className="student-profile-container">
      {/* Header */}
      <div className="profile-header">
        <button 
          className="back-button" 
          onClick={() => {
            if (currentView === 'profile') {
              onBack();
            } else {
              setCurrentView('profile');
            }
          }}
        >
          ←
        </button>
        <span className="header-title">
          {currentView === 'leaderboard' ? 'Leader Board' : 'Profile'}
        </span>
      </div>

      {/* Scrollable Content */}
      <div className="profile-content">
        {getCurrentContent()}
      </div>
    </div>
  );
};

export default StudentProfile;