import React, { useState } from 'react';

const TeacherRewards = ({ onBack, onNavigateToPenalties }) => {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'rewardsList', 'assignReward', 'createReward'
  const [selectedReward, setSelectedReward] = useState(null);

  // Mock rewards data
  const [rewards, setRewards] = useState([
    {
      id: 1,
      title: 'Perfect Attendance',
      sendos: '50',
      date: 'Jan 15, 2025',
      icon: '🏆',
      category: 'attendance'
    },
    {
      id: 2,
      title: 'Excellent Homework',
      sendos: '30',
      date: 'Jan 15, 2025',
      icon: '⭐',
      category: 'homework'
    },
    {
      id: 3,
      title: 'Class Participation',
      sendos: '25',
      date: 'Jan 22, 2025',
      icon: '✅',
      category: 'participation'
    },
    {
      id: 4,
      title: 'Helping Others',
      sendos: '40',
      date: 'Jan 23, 2025',
      icon: '🤝',
      category: 'collaboration'
    },
    {
      id: 5,
      title: 'Creative Thinking',
      sendos: '35',
      date: 'Jan 25, 2025',
      icon: '💡',
      category: 'creativity'
    }
  ]);

  // Form states
  const [assignForm, setAssignForm] = useState({
    title: '',
    sendos: '',
    student: '',
    date: '',
    time: ''
  });

  const [createForm, setCreateForm] = useState({
    title: '',
    description: '',
    sendosValue: '',
    recurrentState: '',
    date: ''
  });

  const students = [
    'Alex Thompson',
    'Emma Johnson',
    'Michael Chen',
    'Sarah Wilson',
    'David Brown'
  ];

  const handleAssignReward = (reward) => {
    setSelectedReward(reward);
    setAssignForm({
      title: reward.title,
      sendos: `+${reward.sendos} Sendos`,
      student: '',
      date: '2025-01-15',
      time: '14:30'
    });
    setCurrentView('assignReward');
  };

  const handleCreateReward = () => {
    setCreateForm({
      title: '',
      description: '',
      sendosValue: '',
      recurrentState: '',
      date: ''
    });
    setCurrentView('createReward');
  };

  const handleValidateAssign = () => {
    if (assignForm.title && assignForm.sendos && assignForm.student && assignForm.date && assignForm.time) {
      alert(`Reward "${assignForm.title}" assigned to ${assignForm.student} successfully!`);
      setCurrentView('rewardsList');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleValidateCreate = () => {
    if (createForm.title && createForm.description && createForm.sendosValue) {
      const newReward = {
        id: rewards.length + 1,
        title: createForm.title,
        sendos: createForm.sendosValue,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        icon: '🎁',
        category: 'custom'
      };
      setRewards([...rewards, newReward]);
      alert(`Reward "${createForm.title}" created successfully!`);
      setCurrentView('rewardsList');
    } else {
      alert('Please fill in all required fields');
    }
  };

  // Dashboard View
  const renderDashboard = () => (
    <>
      <div className="rp-header">
        <button className="rp-back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <h1 className="rp-header-title">Rewards & Penalties</h1>
        <div className="rp-header-spacer"></div>
      </div>

      <div className="rp-dashboard-content">
        <div 
          className="rp-dashboard-card rp-rewards-card"
          onClick={() => setCurrentView('rewardsList')}
        >
          <div className="rp-card-icon">
            <span>🎁</span>
          </div>
          <h3 className="rp-card-title">Rewarding Tasks</h3>
        </div>

        <div 
          className="rp-dashboard-card rp-penalty-card"
          onClick={() => onNavigateToPenalties && onNavigateToPenalties()}
        >
          <div className="rp-card-icon">
            <span>📋</span>
          </div>
          <h3 className="rp-card-title">Penalty Tasks</h3>
        </div>

        <div className="rp-dashboard-card rp-history-card">
          <div className="rp-card-icon">
            <span>📊</span>
          </div>
          <h3 className="rp-card-title">Assigned History</h3>
        </div>
      </div>
    </>
  );

  // Rewards List View
  const renderRewardsList = () => (
    <>
      <div className="rp-header">
        <button className="rp-back-button" onClick={() => setCurrentView('dashboard')}>
          <span>←</span>
        </button>
        <h1 className="rp-header-title">Rewarding Tasks</h1>
        <button className="rp-add-button" onClick={handleCreateReward}>
          <span>+</span>
        </button>
      </div>

      <div className="rp-list-content">
        {rewards.map((reward) => (
          <div key={reward.id} className="rp-reward-item">
            <div className="rp-reward-icon">
              <span>{reward.icon}</span>
            </div>
            <div className="rp-reward-info">
              <h4 className="rp-reward-title">{reward.title}</h4>
              <p className="rp-reward-meta">{reward.sendos} Sendos • {reward.date}</p>
            </div>
            <div className="rp-button-group">
              <button 
                className="rp-assign-button"
                onClick={() => handleAssignReward(reward)}
              >
                Assign Reward
              </button>
              <button className="rp-edit-button">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Assign Reward View
  const renderAssignReward = () => (
    <>
      <div className="rp-header">
        <button className="rp-back-button" onClick={() => setCurrentView('rewardsList')}>
          <span>←</span>
        </button>
        <h1 className="rp-header-title">Assign Reward</h1>
        <div className="rp-header-spacer"></div>
      </div>

      <div className="rp-form-content">
        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Title</h3>
          <input
            type="text"
            value={assignForm.title}
            onChange={(e) => setAssignForm({...assignForm, title: e.target.value})}
            className="rp-form-input"
            placeholder="Excellent Performance in Mathematics"
          />
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Number of Sendos</h3>
          <input
            type="text"
            value={assignForm.sendos}
            onChange={(e) => setAssignForm({...assignForm, sendos: e.target.value})}
            className="rp-form-input"
            placeholder="+50 Sendos"
          />
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Student Name</h3>
          <select
            value={assignForm.student}
            onChange={(e) => setAssignForm({...assignForm, student: e.target.value})}
            className="rp-form-select"
          >
            <option value="">Select a student</option>
            {students.map((student, index) => (
              <option key={index} value={student}>{student}</option>
            ))}
          </select>
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Date</h3>
          <input
            type="date"
            value={assignForm.date}
            onChange={(e) => setAssignForm({...assignForm, date: e.target.value})}
            className="rp-form-input"
          />
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Time</h3>
          <input
            type="time"
            value={assignForm.time}
            onChange={(e) => setAssignForm({...assignForm, time: e.target.value})}
            className="rp-form-input"
          />
        </div>

        <button 
          className="rp-validate-button"
          onClick={handleValidateAssign}
        >
          <span className="rp-check-icon">✓</span> Validate
        </button>
      </div>
    </>
  );

  // Create Reward View
  const renderCreateReward = () => (
    <>
      <div className="rp-header">
        <button className="rp-back-button" onClick={() => setCurrentView('rewardsList')}>
          <span>←</span>
        </button>
        <h1 className="rp-header-title">Create Reward</h1>
        <div className="rp-header-spacer"></div>
      </div>

      <div className="rp-form-content">
        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Title</h3>
          <input
            type="text"
            value={createForm.title}
            onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
            className="rp-form-input"
            placeholder="Enter reward title"
          />
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Description</h3>
          <textarea
            value={createForm.description}
            onChange={(e) => setCreateForm({...createForm, description: e.target.value})}
            className="rp-form-textarea"
            placeholder="Enter reward description"
            rows="3"
          />
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Sendos Value</h3>
          <input
            type="number"
            value={createForm.sendosValue}
            onChange={(e) => setCreateForm({...createForm, sendosValue: e.target.value})}
            className="rp-form-input"
            placeholder="50"
          />
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Recurrent State</h3>
          <select
            value={createForm.recurrentState}
            onChange={(e) => setCreateForm({...createForm, recurrentState: e.target.value})}
            className="rp-form-select"
          >
            <option value="">Select frequency</option>
            <option value="once">One-time</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="rp-form-section">
          <h3 className="rp-form-subtitle">Date</h3>
          <input
            type="date"
            value={createForm.date}
            onChange={(e) => setCreateForm({...createForm, date: e.target.value})}
            className="rp-form-input"
          />
        </div>

        <p className="rp-form-note">
          Select specific date for one-time rewards or day of week for regular rewards.
        </p>

        <button 
          className="rp-validate-button"
          onClick={handleValidateCreate}
        >
          <span className="rp-check-icon">✓</span> Validate
        </button>
      </div>
    </>
  );

  const getCurrentContent = () => {
    switch (currentView) {
      case 'dashboard':
        return renderDashboard();
      case 'rewardsList':
        return renderRewardsList();
      case 'assignReward':
        return renderAssignReward();
      case 'createReward':
        return renderCreateReward();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="rp-container">
      {getCurrentContent()}
    </div>
  );
};

export default TeacherRewards;