import React, { useState } from 'react';
import './App.css';

const StudentRFPCreate = ({ onBack, selectedRFP }) => {
  const [projectTitle, setProjectTitle] = useState('Build a Railway Station');
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Smith', avatar: '👤' },
    { id: 2, name: 'Sarah Johnson', avatar: '👤' }
  ]);

  const handleAddTeamMember = () => {
    const newMemberName = prompt('Enter team member name:');
    if (newMemberName && newMemberName.trim()) {
      const newMember = {
        id: Date.now(),
        name: newMemberName.trim(),
        avatar: '👤'
      };
      setTeamMembers([...teamMembers, newMember]);
    }
  };

  const handleRemoveTeamMember = (memberId) => {
    setTeamMembers(teamMembers.filter(member => member.id !== memberId));
  };

  const handleConfirm = () => {
    if (!teamName.trim()) {
      alert('Please enter a team name');
      return;
    }

    if (teamMembers.length === 0) {
      alert('Please add at least one team member');
      return;
    }

    console.log('Creating RFP Team:', {
      projectTitle,
      teamName,
      teamMembers
    });
    
    alert(`Team "${teamName}" created successfully with ${teamMembers.length} members!`);
    onBack();
  };

  return (
    <div className="student-rfp-create-container">
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
      <div className="student-rfp-create-content">
        <h1 className="create-title">Create a Team</h1>

        {/* Project Title Section */}
        <div className="create-form-section">
          <label className="create-field-label">Project Title</label>
          <input
            type="text"
            className="create-text-input"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="Enter project title"
          />
        </div>

        {/* Team Name Section */}
        <div className="create-form-section">
          <label className="create-field-label">Team Name</label>
          <input
            type="text"
            className="create-text-input"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter your team name"
          />
        </div>

        {/* Team Members Section */}
        <div className="create-form-section">
          <label className="create-field-label">Team Members</label>
          <div className="team-members-list">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-item">
                <div className="member-avatar">{member.avatar}</div>
                <span className="member-name">{member.name}</span>
                <button 
                  className="remove-member-btn"
                  onClick={() => handleRemoveTeamMember(member.id)}
                >
                  ✕
                </button>
              </div>
            ))}
            
            <button className="add-member-btn" onClick={handleAddTeamMember}>
              <span className="add-icon">+</span>
              <span>Add Team Member</span>
            </button>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="create-confirm-button" onClick={handleConfirm}>
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

export default StudentRFPCreate;