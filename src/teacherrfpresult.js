import React, { useState } from 'react';
import './App.css';

const TeacherRFPResults = ({ onBack, selectedRFP }) => {
  const [projectName, setProjectName] = useState('Elementary School Construction');
  const [winningTeam, setWinningTeam] = useState('');
  const [agreedPrice, setAgreedPrice] = useState('');
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);

  // Mock team data
  const teams = [
    'Team Alpha',
    'Team Beta',
    'Team Gamma',
    'Team Delta',
    'Team Epsilon',
    'The Builders',
    'Creative Constructors',
    'Future Architects'
  ];

  const handleTeamSelect = (team) => {
    setWinningTeam(team);
    setShowTeamDropdown(false);
  };

  const handleConfirm = () => {
    if (!winningTeam) {
      alert('Please select a winning team');
      return;
    }
    if (!agreedPrice) {
      alert('Please enter the agreed price');
      return;
    }

    console.log('RFP Result Confirmed:', {
      projectName,
      winningTeam,
      agreedPrice
    });
    
    alert(`RFP Result confirmed!\nProject: ${projectName}\nWinning Team: ${winningTeam}\nAgreed Price: ${agreedPrice} Sendos`);
    onBack();
  };

  return (
    <div className="teacher-rfp-results-container">
      {/* Status Bar */}
      <div className="teacher-rfp-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="teacher-rfp-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="teacher-rfp-results-content">
        <h1 className="rfp-results-title">Confirm RFP Resut</h1>

        {/* Form Fields */}
        <div className="rfp-results-form">
          {/* Project Name */}
          <div className="form-field">
            <label className="field-label">Project Name</label>
            <input
              type="text"
              className="text-input"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
            />
          </div>

          {/* Winning Team Name */}
          <div className="form-field">
            <label className="field-label">Winning Team Name</label>
            <div className="dropdown-container">
              <button
                className={`dropdown-button ${winningTeam ? 'selected' : ''}`}
                onClick={() => setShowTeamDropdown(!showTeamDropdown)}
              >
                <span className="dropdown-text">
                  {winningTeam || 'Select winning team...'}
                </span>
                <svg 
                  className={`dropdown-arrow ${showTeamDropdown ? 'rotated' : ''}`}
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {showTeamDropdown && (
                <div className="dropdown-menu">
                  {teams.map((team, index) => (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleTeamSelect(team)}
                    >
                      {team}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Agreed Price */}
          <div className="form-field">
            <label className="field-label">Agreed Price (Sendos)</label>
            <input
              type="text"
              className="text-input"
              value={agreedPrice}
              onChange={(e) => setAgreedPrice(e.target.value)}
              placeholder="Enter winning offer price"
            />
          </div>
        </div>

        {/* Confirm Button */}
        <button className="confirm-button" onClick={handleConfirm}>
          CONFIRM
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </div>
  );
};

export default TeacherRFPResults;