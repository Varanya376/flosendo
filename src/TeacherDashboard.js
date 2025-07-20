import React, { useState } from 'react';

const TeacherDashboard = ({ onBack, onNavigateToRewards, onNavigateToPenalties, onNavigateToTeacherHistory, onNavigateToProfile, onNavigateToTeacherBalance, onNavigateToAssets }) => {
  const [view, setView] = useState('home'); // 'create' or 'home'
  const [className, setClassName] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('Emma Johnson');

  const handleCreateClass = () => {
    if (className.trim()) {
      console.log('Creating class:', className);
      console.log('Students:', students);
      alert(`Class "${className}" created successfully!`);
      // After creating class, switch to home view
      setView('home');
    } else {
      alert('Please enter a class name');
    }
  };

  const handleAddFromList = () => {
    console.log('Add from list clicked');
    alert('Add from list functionality would open here');
  };

  const handleProfileClick = () => {
    console.log('Teacher Profile clicked!');
    onNavigateToProfile && onNavigateToProfile();
  };

  // Create Class View
  if (view === 'create') {
    return (
      <div className="teacher-dashboard">
        <div className="dashboard-header">
          <div className="user-info">
            <button className="home-button" onClick={() => setView('home')}>
              <span>🏠</span>
            </button>
            <div className="user-details">
              <h2>Create a Class</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div className="notification-icon">
            <span className="notification-bell">🔔</span>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="form-group">
            <label className="form-label">Class Name</label>
            <input
              type="text"
              placeholder="Enter class name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="dashboard-input"
            />
          </div>

          <div className="students-section">
            <label className="form-label">Students</label>
            <div className="students-container">
              <div className="students-placeholder">
                <div className="students-icon">
                  <div className="icon-group">
                    <div className="student-avatar"></div>
                    <div className="student-avatar"></div>
                    <div className="student-avatar"></div>
                  </div>
                </div>
                <p className="students-text">No students added yet</p>
              </div>
              
              <button
                className="add-from-list-button"
                onClick={handleAddFromList}
              >
                <span className="list-icon">📋</span>
                Add from List
              </button>
            </div>
          </div>

          <button
            className="confirm-button dashboard-confirm"
            onClick={handleCreateClass}
          >
            CONFIRM
          </button>
        </div>
      </div>
    );
  }

  // Teacher Home View
  return (
    <div className="teacher-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="user-info">
          <button 
            className="user-avatar"
            onClick={handleProfileClick}
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
          >
            <span>👨‍🏫</span>
          </button>
          <div className="user-details">
            <h2>Sarah Johnson</h2>
            <p>Teacher</p>
          </div>
        </div>
        <div className="notification-icon">
          <span className="notification-bell">🔔</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Create Class Button */}
        <div className="section">
          <button 
            className="create-class-button"
            onClick={() => setView('create')}
          >
            <div className="create-icon">
              <span>➕</span>
            </div>
            <div className="create-content">
              <h4>Create New Class</h4>
              <p>Set up a new class with students</p>
            </div>
          </button>
        </div>

        {/* Task Management Section */}
        <div className="section">
          <h3 className="section-title">Task Management</h3>
          
          <div className="task-card rewarding-tasks" onClick={() => {
            console.log('Rewards card clicked!');
            console.log('onNavigateToRewards function:', onNavigateToRewards);
            onNavigateToRewards && onNavigateToRewards();
          }}>
            <div className="card-icon">
              <span>🎁</span>
            </div>
            <div className="card-content">
              <h4>Rewarding Tasks</h4>
              <p>Define positive rewards</p>
            </div>
          </div>

          <div className="task-card penalty-tasks" onClick={() => {
            console.log('Penalties card clicked!');
            console.log('onNavigateToPenalties function:', onNavigateToPenalties);
            onNavigateToPenalties && onNavigateToPenalties();
          }}>
            <div className="card-icon">
              <span>⚠️</span>
            </div>
            <div className="card-content">
              <h4>Penalty Tasks</h4>
              <p>Define disciplinary actions</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="section">
          <h3 className="section-title">History</h3>
          
          <div className="history-card" onClick={() => {
            console.log('Teacher History card clicked!');
            console.log('onNavigateToTeacherHistory function:', onNavigateToTeacherHistory);
            onNavigateToTeacherHistory && onNavigateToTeacherHistory();
          }}>
            <div className="card-icon">
              <span>🔄</span>
            </div>
            <div className="card-content">
              <h4>Rewards & Penalty History</h4>
              <p>View all assigned tasks</p>
            </div>
          </div>
        </div>

        {/* Sendos Accounts Section */}
        <div className="section">
          <h3 className="section-title">Sendos Accounts</h3>
          
          <div className="sendos-card" onClick={() => {
            console.log('Student Balance card clicked!');
            console.log('onNavigateToTeacherBalance function:', onNavigateToTeacherBalance);
            onNavigateToTeacherBalance && onNavigateToTeacherBalance();
          }}>
            <div className="card-icon">
              <span>💳</span>
            </div>
            <div className="card-content">
              <h4>Balance & Transaction History</h4>
              <p>View student sendos records</p>
            </div>
          </div>
        </div>

        {/* Asset Management Section */}
        <div className="section">
          <h3 className="section-title">Asset Management</h3>
          
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
              <p>View and purchase available assets</p>
            </div>
          </div>
        </div>

        {/* Class Profile Section */}
        <div className="section">
          <h3 className="section-title">Class Profile</h3>
          
          <div className="profile-card">
            <div className="card-icon">
              <span>⚙️</span>
            </div>
            <div className="card-content">
              <h4>Manage Class Profile</h4>
              <p>Edit class settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;