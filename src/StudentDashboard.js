import React, { useState } from 'react';

const StudentDashboard = ({ onBack, onNavigateToBalance, onNavigateToHistory, onNavigateToAssets, onNavigateToProfile }) => {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'joinClass'
  const [selectedClass, setSelectedClass] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock class data - in real app this would come from API
  const availableClasses = [
    'Mathematics 101',
    'Physics Advanced', 
    'Chemistry Basics',
    'English Literature',
    'Computer Science'
  ];

  const handleClassSelect = (className) => {
    setSelectedClass(className);
    setIsDropdownOpen(false);
    console.log('Class selected:', className);
  };

  const handleJoinClass = () => {
    if (selectedClass) {
      console.log('Joining class:', selectedClass);
      alert(`Successfully joined "${selectedClass}"!`);
      setCurrentView('home'); // Return to home after joining
    } else {
      alert('Please select a class to join');
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleJoinClassClick = () => {
    setCurrentView('joinClass');
  };

  const handleBackFromJoinClass = () => {
    setCurrentView('home');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked!');
    onNavigateToProfile && onNavigateToProfile();
  };

  // Render Join Class Screen
  const renderJoinClass = () => (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <div className="user-info">
          <button className="home-button" onClick={handleBackFromJoinClass}>
            <span>🏠</span>
          </button>
          <div className="user-details">
            <h2>Join a Class</h2>
            <p>Student</p>
          </div>
        </div>
        <div className="notification-icon">
          <span className="notification-bell">🔔</span>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="form-group">
          <label className="form-label">Class Name</label>
          <div className="dropdown-container">
            <button 
              className="dropdown-button"
              onClick={toggleDropdown}
            >
              {selectedClass || 'Select a class'}
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                ▼
              </span>
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {availableClasses.map((className, index) => (
                  <button
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleClassSelect(className)}
                  >
                    {className}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="class-preview">
          {selectedClass && (
            <div className="selected-class-info">
              <div className="class-icon">
                <div className="book-icon">📚</div>
              </div>
              <div className="class-details">
                <h3 className="class-name">{selectedClass}</h3>
                <p className="class-info">Ready to join</p>
              </div>
            </div>
          )}
        </div>

        <button 
          className="confirm-button dashboard-confirm"
          onClick={handleJoinClass}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );

  // Render Home Screen
  const renderHome = () => (
    <div className="student-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="user-info">
          <button 
            className="user-avatar"
            onClick={handleProfileClick}
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
          >
            <span>👤</span>
          </button>
          <div className="user-details">
            <h2>Alex Thompson</h2>
            <p>Student</p>
          </div>
        </div>
        <div className="notification-icon">
          <span className="notification-bell">🔔</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
          </div>
        </div>

        {/* Join Class Button */}
        <div className="section">
          <button 
            className="join-class-button"
            onClick={handleJoinClassClick}
          >
            <div className="join-icon">
              <span>➕</span>
            </div>
            <div className="join-content">
              <h4>Join a Class</h4>
              <p>Connect with your teachers and classmates</p>
            </div>
          </button>
        </div>

        {/* Rewards & Penalties Section */}
        <div className="section">
          <h3 className="section-title">Rewards & Penalties</h3>
          
          <div className="reward-card" onClick={() => {
            console.log('History card clicked!');
            console.log('onNavigateToHistory function:', onNavigateToHistory);
            onNavigateToHistory && onNavigateToHistory();
          }}>
            <div className="card-icon">
              <span>🔄</span>
            </div>
            <div className="card-content">
              <h4>Rewards/Penalty History</h4>
              <p>View your activity record</p>
            </div>
          </div>
        </div>

        {/* Account Balance Section */}
        <div className="section">
          <h3 className="section-title">Account Balance</h3>
          
          <div className="balance-card" onClick={onNavigateToBalance}>
            <div className="card-icon">
              <span>💳</span>
            </div>
            <div className="card-content">
              <h4>Balance & Transaction History</h4>
              <p>View your sendos balance</p>
            </div>
          </div>
        </div>

        {/* Assets Section */}
        <div className="section">
          <h3 className="section-title">Assets</h3>
          
          <div className="asset-card" onClick={() => {
            console.log('Assets card clicked!');
            console.log('onNavigateToAssets function:', onNavigateToAssets);
            onNavigateToAssets && onNavigateToAssets();
          }}>
            <div className="card-icon">
              <span>📋</span>
            </div>
            <div className="card-content">
              <h4>Asset List</h4>
              <p>View your available assets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentView === 'home' ? renderHome() : renderJoinClass()}
    </>
  );
};

export default StudentDashboard;