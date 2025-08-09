import React, { useState } from 'react';
import './App.css';

const StudentRFPJoin = ({ onBack, selectedRFP }) => {
  const [projectTitle, setProjectTitle] = useState('Build a Railway Station');
  const [selectedTeam, setSelectedTeam] = useState('Builder Team');
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);

  // Mock team data
  const availableTeams = [
    'Builder Team',
    'Creative Constructors',
    'Future Architects',
    'Design Masters',
    'Engineering Squad',
    'Innovation Team'
  ];

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    setShowTeamDropdown(false);
  };

  const handleConfirm = () => {
    if (!selectedTeam) {
      alert('Please select a team to join');
      return;
    }

    console.log('Joining RFP Team:', {
      projectTitle,
      selectedTeam
    });
    
    alert(`Successfully joined "${selectedTeam}" for project "${projectTitle}"!`);
    onBack();
  };

  return (
    <div className="student-rfp-join-container">
      {/* Status Bar */}
      <div className="student-rfp-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="student-rfp-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="student-rfp-join-content">
        <div className="join-page-header">
          <span className="page-label">Student-RFP join</span>
          <h1 className="join-title">Confirm</h1>
        </div>

        {/* Project Title Section */}
        <div className="join-form-section">
          <label className="join-field-label">Project Title</label>
          <input
            type="text"
            className="join-text-input"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="Enter project title"
          />
        </div>

        {/* Team Name Section */}
        <div className="join-form-section">
          <label className="join-field-label">Team Name</label>
          <div className="join-dropdown-container">
            <button
              className={`join-dropdown-button ${selectedTeam ? 'selected' : ''}`}
              onClick={() => setShowTeamDropdown(!showTeamDropdown)}
            >
              <span className="join-dropdown-text">
                {selectedTeam || 'Select team to join...'}
              </span>
              <svg 
                className={`join-dropdown-arrow ${showTeamDropdown ? 'rotated' : ''}`}
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {showTeamDropdown && (
              <div className="join-dropdown-menu">
                {availableTeams.map((team, index) => (
                  <button
                    key={index}
                    className="join-dropdown-item"
                    onClick={() => handleTeamSelect(team)}
                  >
                    {team}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Confirm Button */}
        <button className="join-confirm-button" onClick={handleConfirm}>
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

export default StudentRFPJoin;