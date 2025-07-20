import React, { useState } from 'react';

const TeacherRewards = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('rewardsList'); // 'rewardsList', 'assignReward', 'createReward'
  const [selectedReward, setSelectedReward] = useState(null);

  // Mock rewards data
  const [rewards, setRewards] = useState([
    {
      id: 1,
      title: 'Perfect Attendance',
      sendos: '50 Sendos',
      date: 'Jan 15, 2025',
      icon: '🏆',
      category: 'attendance'
    },
    {
      id: 2,
      title: 'Excellent Homework',
      sendos: '30 Sendos',
      date: 'Jan 20, 2025',
      icon: '⭐',
      category: 'homework'
    },
    {
      id: 3,
      title: 'Class Participation',
      sendos: '25 Sendos',
      date: 'Jan 22, 2025',
      icon: '✅',
      category: 'participation'
    },
    {
      id: 4,
      title: 'Helping Others',
      sendos: '40 Sendos',
      date: 'Jan 18, 2025',
      icon: '🤝',
      category: 'collaboration'
    },
    {
      id: 5,
      title: 'Creative Thinking',
      sendos: '35 Sendos',
      date: 'Jan 16, 2025',
      icon: '💡',
      category: 'creativity'
    }
  ]);

  // Form states for creating/assigning rewards
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
      sendos: reward.sendos,
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
        sendos: `${createForm.sendosValue} Sendos`,
        date: createForm.date || new Date().toLocaleDateString(),
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

  // Rewards List View
  const renderRewardsList = () => (
    <div className="rewards-scroll-content">
      <div className="rewards-header-section">
        <h2 className="rewards-title">Rewarding Tasks</h2>
        <button 
          className="create-reward-button"
          onClick={handleCreateReward}
        >
          + Create New Reward
        </button>
      </div>

      <div className="rewards-list">
        {rewards.map((reward) => (
          <div key={reward.id} className="reward-item">
            <div className="reward-icon">
              <span className={`icon ${reward.category}`}>{reward.icon}</span>
            </div>
            <div className="reward-details">
              <div className="reward-title">{reward.title}</div>
              <div className="reward-meta">
                <span className="reward-sendos">{reward.sendos}</span>
                <span className="reward-date">{reward.date}</span>
              </div>
            </div>
            <button 
              className="assign-reward-button"
              onClick={() => handleAssignReward(reward)}
            >
              Assign Reward
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // Assign Reward View
  const renderAssignReward = () => (
    <div className="rewards-scroll-content">
      <div className="assign-header">
        <h2 className="rewards-title">Assign Reward</h2>
      </div>

      <div className="assign-form">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={assignForm.title}
            onChange={(e) => setAssignForm({...assignForm, title: e.target.value})}
            className="form-input"
            placeholder="Excellent Performance in Mathematics"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Number of Sendos</label>
          <input
            type="text"
            value={assignForm.sendos}
            onChange={(e) => setAssignForm({...assignForm, sendos: e.target.value})}
            className="form-input"
            placeholder="+50 Sendos"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Student Name</label>
          <select
            value={assignForm.student}
            onChange={(e) => setAssignForm({...assignForm, student: e.target.value})}
            className="form-select"
          >
            <option value="">Select a student</option>
            {students.map((student, index) => (
              <option key={index} value={student}>{student}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            type="date"
            value={assignForm.date}
            onChange={(e) => setAssignForm({...assignForm, date: e.target.value})}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Time</label>
          <input
            type="time"
            value={assignForm.time}
            onChange={(e) => setAssignForm({...assignForm, time: e.target.value})}
            className="form-input"
          />
        </div>

        <button 
          className="validate-button"
          onClick={handleValidateAssign}
        >
          ✓ Validate
        </button>
      </div>
    </div>
  );

  // Create Reward View
  const renderCreateReward = () => (
    <div className="rewards-scroll-content">
      <div className="create-header">
        <h2 className="rewards-title">Create Reward</h2>
      </div>

      <div className="create-form">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={createForm.title}
            onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
            className="form-input"
            placeholder="Enter reward title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            value={createForm.description}
            onChange={(e) => setCreateForm({...createForm, description: e.target.value})}
            className="form-textarea"
            placeholder="Enter reward description"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Sendos Value</label>
          <input
            type="number"
            value={createForm.sendosValue}
            onChange={(e) => setCreateForm({...createForm, sendosValue: e.target.value})}
            className="form-input"
            placeholder="Enter sendos amount"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Recurrent State</label>
          <select
            value={createForm.recurrentState}
            onChange={(e) => setCreateForm({...createForm, recurrentState: e.target.value})}
            className="form-select"
          >
            <option value="">Select frequency</option>
            <option value="once">One-time</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            type="date"
            value={createForm.date}
            onChange={(e) => setCreateForm({...createForm, date: e.target.value})}
            className="form-input"
          />
        </div>

        <p className="create-note">
          Students can see this rewards or daily or weekly or monthly based on how they are configured.
        </p>

        <button 
          className="validate-button"
          onClick={handleValidateCreate}
        >
          ✓ Validate
        </button>
      </div>
    </div>
  );

  const getCurrentContent = () => {
    switch (currentView) {
      case 'rewardsList':
        return renderRewardsList();
      case 'assignReward':
        return renderAssignReward();
      case 'createReward':
        return renderCreateReward();
      default:
        return renderRewardsList();
    }
  };

  return (
    <div className="teacher-rewards-container">
      {/* Header */}
      <div className="rewards-header">
        <button 
          className="back-button" 
          onClick={() => {
            if (currentView === 'rewardsList') {
              onBack();
            } else {
              setCurrentView('rewardsList');
            }
          }}
        >
          ←
        </button>
        {currentView === 'assignReward' && (
          <span className="header-title">Assign Reward</span>
        )}
        {currentView === 'createReward' && (
          <span className="header-title">Create Reward</span>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="rewards-content">
        {getCurrentContent()}
      </div>
    </div>
  );
};

export default TeacherRewards;