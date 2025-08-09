import React, { useState } from 'react';
import StudentRFPJoin from './studentrfpjoin';
import StudentRFPCreate from './studentrfpcreate';
import './App.css';

const StudentRFP = ({ onBack }) => {
  const [selectedRFP, setSelectedRFP] = useState(null);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'detail', 'results', 'join', 'create'
  const [expandedSections, setExpandedSections] = useState({
    goals: false,
    scopes: false,
    deadline: false,
    obstacles: false
  });

  // Mock RFP data
  const rfpProjects = [
    {
      id: 1,
      title: 'Build a Railway Station',
      deadline: 'March 15, 2025',
      description: 'Design and build a model railway station with platforms and tracks.',
      illustration: '🚊',
      backgroundColor: '#ffffff',
      accentColor: '#4CAF50',
      badge: 'K',
      detailDescription: "You're going to build a fantastic train station just like the ones you see in real life! Your station will have platforms where trains stop, a big building where people buy tickets and wait, and walkways to help everyone move around safely. You'll use cardboard, paper, and other fun materials from school to make it look amazing!",
      goals: "You'll learn how trains help people travel to different places and how train stations are like busy community centers where lots of things happen. You'll also practice being creative, solving problems when things don't work the first time, and understanding how buildings are designed to help everyone.",
      scopes: [
        "Main building with a ticket counter and comfy waiting area",
        "2-3 train platforms with safety fences so no one falls",
        "Bridges and stairs to connect everything together",
        "Ramps and elevators for people who use wheelchairs",
        "Signs to help people find where they need to go",
        "Parking lot and bus stops for people arriving by car or bus"
      ],
      deadlineInfo: {
        dueDate: "March 15, 2025",
        daysRemaining: "21 days"
      },
      obstacles: [
        {
          title: "Making it Strong",
          description: "Your model needs to be sturdy so it doesn't fall down when you move it."
        },
        {
          title: "Getting the Size Right",
          description: "Making sure your trains, people, and buildings look like they belong together."
        },
        {
          title: "Working with Materials",
          description: "Using cardboard and paper in creative ways when they don't do exactly what you want."
        },
        {
          title: "Time Management",
          description: "Making sure you have enough time to build everything you planned."
        }
      ]
    },
    {
      id: 2,
      title: 'Design Your Dream School',
      deadline: 'March 15, 2025',
      description: 'Create a model of an innovative school building with classrooms and playground.',
      illustration: '🏫👧',
      backgroundColor: '#ffffff',
      accentColor: '#FF9800',
      badge: 'K',
      detailDescription: "Create a model of an innovative school building with classrooms and playground.",
      goals: "Learn about architectural design and space planning while creating an educational environment.",
      scopes: [
        "Include at least 4 classrooms",
        "Design a playground area",
        "Add administrative offices",
        "Include parking and green spaces"
      ],
      deadlineInfo: {
        dueDate: "March 15, 2025",
        daysRemaining: "21 days"
      },
      obstacles: [
        {
          title: "Space Planning",
          description: "Organizing different areas effectively within the model."
        },
        {
          title: "Material Constraints",
          description: "Working within the available materials and budget."
        }
      ]
    }
  ];

  const handleRFPClick = (rfp) => {
    setSelectedRFP(rfp);
    setCurrentView('detail');
    setExpandedSections({
      goals: false,
      scopes: false,
      deadline: false,
      obstacles: false
    });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleJoinRFPTeam = () => {
    console.log('Join RFP Team clicked');
    setCurrentView('join');
  };

  const handleCreateRFPTeam = () => {
    console.log('Create RFP Team clicked');
    setCurrentView('create');
  };

  // RFP Create View
  if (currentView === 'create') {
    return (
      <StudentRFPCreate 
        onBack={() => setCurrentView('detail')}
        selectedRFP={selectedRFP}
      />
    );
  }

  // RFP Join View
  if (currentView === 'join') {
    return (
      <StudentRFPJoin 
        onBack={() => setCurrentView('detail')}
        selectedRFP={selectedRFP}
      />
    );
  }

  // RFP Results View (placeholder until StudentRFPResults.js is created)
  if (currentView === 'results') {
    return (
      <div className="teacher-rfp-container">
        <div className="teacher-rfp-status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>
        <div className="teacher-rfp-header">
          <button className="back-button" onClick={() => setCurrentView('detail')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="teacher-rfp-content">
          <h1 className="rfp-page-title">Confirm RFP Result</h1>
          <p>StudentRFPResults component coming soon...</p>
          <button 
            className="input-rfp-results-button"
            onClick={() => setCurrentView('detail')}
          >
            Back to Detail
          </button>
        </div>
      </div>
    );
  }

  // RFP Detail View
  if (currentView === 'detail' && selectedRFP) {
    return (
      <div className="teacher-rfp-container">
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
          <button className="back-button" onClick={() => setCurrentView('list')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Detail Content */}
        <div className="teacher-rfp-detail-content">
          <h1 className="rfp-detail-title">{selectedRFP.title}</h1>
          <p className="rfp-detail-subtitle">📅 Deadline: {selectedRFP.deadline}</p>

          <div className="rfp-illustration-detail" style={{ backgroundColor: selectedRFP.backgroundColor }}>
            <span className="illustration-icon-large">{selectedRFP.illustration}</span>
            <div className="rfp-badge-large" style={{ backgroundColor: selectedRFP.accentColor }}>
              {selectedRFP.badge}
            </div>
          </div>

          {/* Description Section */}
          <div className="rfp-description-section">
            <div className="description-header">
              <span className="description-icon">ℹ️</span>
              <h3>Description</h3>
            </div>
            <p>{selectedRFP.detailDescription}</p>
          </div>

          {/* Goals Section */}
          <div className="rfp-expandable-section">
            <button 
              className="section-header" 
              onClick={() => toggleSection('goals')}
            >
              <div className="section-title">
                <span className="section-icon">🎯</span>
                <span>Goal</span>
              </div>
              <span className={`expand-icon ${expandedSections.goals ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.goals && (
              <div className="section-content">
                <p>{selectedRFP.goals}</p>
              </div>
            )}
          </div>

          {/* Scopes Section */}
          <div className="rfp-expandable-section">
            <button 
              className="section-header" 
              onClick={() => toggleSection('scopes')}
            >
              <div className="section-title">
                <span className="section-icon">📋</span>
                <span>Scopes</span>
              </div>
              <span className={`expand-icon ${expandedSections.scopes ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.scopes && (
              <div className="section-content">
                <ul className="scopes-list">
                  {selectedRFP.scopes.map((scope, index) => (
                    <li key={index}>{scope}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Deadline Section */}
          <div className="rfp-expandable-section">
            <button 
              className="section-header" 
              onClick={() => toggleSection('deadline')}
            >
              <div className="section-title">
                <span className="section-icon">📅</span>
                <span>Deadline</span>
              </div>
              <span className={`expand-icon ${expandedSections.deadline ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.deadline && (
              <div className="section-content">
                <div className="deadline-info">
                  <div className="deadline-item">
                    <span className="deadline-label">Due Date</span>
                    <span className="deadline-value">{selectedRFP.deadlineInfo.dueDate}</span>
                  </div>
                  <div className="deadline-item">
                    <span className="deadline-label">Days Remaining</span>
                    <span className="deadline-value">{selectedRFP.deadlineInfo.daysRemaining}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Potential Obstacles Section */}
          <div className="rfp-expandable-section">
            <button 
              className="section-header" 
              onClick={() => toggleSection('obstacles')}
            >
              <div className="section-title">
                <span className="section-icon">⚠️</span>
                <span>Potential Obstacles</span>
              </div>
              <span className={`expand-icon ${expandedSections.obstacles ? 'expanded' : ''}`}>▼</span>
            </button>
            {expandedSections.obstacles && (
              <div className="section-content">
                <div className="obstacles-list">
                  {selectedRFP.obstacles.map((obstacle, index) => (
                    <div key={index} className="obstacle-item">
                      <h4 className="obstacle-title">{obstacle.title}</h4>
                      <p className="obstacle-description">{obstacle.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RFP Action Buttons */}
          <div className="rfp-action-buttons">
            <button className="rfp-action-button join-team" onClick={handleJoinRFPTeam}>
              <span className="button-icon">👥</span>
              <span>Join RFP Team</span>
            </button>
            
            <button className="rfp-action-button create-team" onClick={handleCreateRFPTeam}>
              <span className="button-icon">✓</span>
              <span>Create RFP Team</span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-indicator">
          <div className="nav-line"></div>
        </div>
      </div>
    );
  }

  // RFP List View
  return (
    <div className="teacher-rfp-container">
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
      <div className="teacher-rfp-content">
        <h1 className="rfp-page-title">RFPs to Submit</h1>

        <div className="rfp-projects-list">
          {rfpProjects.map((rfp) => (
            <div 
              key={rfp.id} 
              className="rfp-project-card"
              onClick={() => handleRFPClick(rfp)}
            >
              <div className="rfp-illustration" style={{ backgroundColor: rfp.backgroundColor }}>
                <span className="illustration-icon">{rfp.illustration}</span>
                <div className="rfp-badge" style={{ backgroundColor: rfp.accentColor }}>
                  {rfp.badge}
                </div>
              </div>
              
              <div className="rfp-project-info">
                <h3 className="rfp-project-title">{rfp.title}</h3>
                <div className="rfp-deadline">
                  <span className="deadline-icon">📅</span>
                  <span className="deadline-text">Deadline: {rfp.deadline}</span>
                </div>
                <p className="rfp-project-description">{rfp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </div>
  );
};

export default StudentRFP;