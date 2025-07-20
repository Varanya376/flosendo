import React, { useState } from 'react';

const TeacherPenalties = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('penaltiesList'); // 'penaltiesList', 'imposePenalty', 'createPenalty'
  const [selectedPenalty, setSelectedPenalty] = useState(null);

  // Mock penalties data
  const [penalties, setPenalties] = useState([
    {
      id: 1,
      title: 'Late Assignment Submission',
      sendos: '-10 Sendos',
      validUntil: 'Valid until Mar 15, 2025',
      icon: '⚠️',
      category: 'assignment'
    },
    {
      id: 2,
      title: 'Disruptive Behavior',
      sendos: '-25 Sendos',
      validUntil: 'Valid until Apr 30, 2025',
      icon: '🚫',
      category: 'behavior'
    },
    {
      id: 3,
      title: 'Tardiness',
      sendos: '-5 Sendos',
      validUntil: 'Valid until Dec 31, 2025',
      icon: '⏰',
      category: 'attendance'
    },
    {
      id: 4,
      title: 'Phone Usage in Class',
      sendos: '-15 Sendos',
      validUntil: 'Valid until Jun 20, 2025',
      icon: '📱',
      category: 'device'
    },
    {
      id: 5,
      title: 'Missing Homework',
      sendos: '-20 Sendos',
      validUntil: 'Valid until May 15, 2025',
      icon: '📝',
      category: 'homework'
    }
  ]);

  // Form states for creating/imposing penalties
  const [imposeForm, setImposeForm] = useState({
    title: '',
    type: '',
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

  const penaltyTypes = [
    'Late Assignment',
    'Disruptive Behavior',
    'Tardiness',
    'Phone Usage',
    'Missing Homework',
    'Inappropriate Language',
    'Not Following Instructions'
  ];

  const handleImposePenalty = (penalty) => {
    setSelectedPenalty(penalty);
    setImposeForm({
      title: penalty.title,
      type: 'P',
      sendos: penalty.sendos,
      student: '',
      date: '2025-01-15',
      time: '14:30'
    });
    setCurrentView('imposePenalty');
  };

  const handleCreatePenalty = () => {
    setCreateForm({
      title: '',
      description: '',
      sendosValue: '',
      recurrentState: '',
      date: ''
    });
    setCurrentView('createPenalty');
  };

  const handleValidateImpose = () => {
    if (imposeForm.title && imposeForm.sendos && imposeForm.student && imposeForm.date && imposeForm.time) {
      alert(`Penalty "${imposeForm.title}" imposed on ${imposeForm.student} successfully!`);
      setCurrentView('penaltiesList');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleValidateCreate = () => {
    if (createForm.title && createForm.description && createForm.sendosValue) {
      const newPenalty = {
        id: penalties.length + 1,
        title: createForm.title,
        sendos: `-${createForm.sendosValue} Sendos`,
        validUntil: createForm.date ? `Valid until ${new Date(createForm.date).toLocaleDateString()}` : 'Valid until Dec 31, 2025',
        icon: '❌',
        category: 'custom'
      };
      setPenalties([...penalties, newPenalty]);
      alert(`Penalty "${createForm.title}" created successfully!`);
      setCurrentView('penaltiesList');
    } else {
      alert('Please fill in all required fields');
    }
  };

  // Penalties List View
  const renderPenaltiesList = () => (
    <div className="penalties-scroll-content">
      <div className="penalties-header-section">
        <h2 className="penalties-title">Penalty Tasks</h2>
        <button 
          className="create-penalty-button"
          onClick={handleCreatePenalty}
        >
          + Create New Penalty
        </button>
      </div>

      <div className="penalties-list">
        {penalties.map((penalty) => (
          <div key={penalty.id} className="penalty-item">
            <div className="penalty-icon">
              <span className={`icon ${penalty.category}`}>{penalty.icon}</span>
            </div>
            <div className="penalty-details">
              <div className="penalty-title">{penalty.title}</div>
              <div className="penalty-meta">
                <span className="penalty-sendos">{penalty.sendos}</span>
                <span className="penalty-valid">{penalty.validUntil}</span>
              </div>
            </div>
            <div className="penalty-actions">
              <button 
                className="impose-penalty-button"
                onClick={() => handleImposePenalty(penalty)}
              >
                Impose Penalty
              </button>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Impose Penalty View
  const renderImposePenalty = () => (
    <div className="penalties-scroll-content">
      <div className="impose-header">
        <h2 className="penalties-title">Impose Penalties</h2>
      </div>

      <div className="impose-form">
        <div className="form-group">
          <label className="form-label">Penalty Title</label>
          <input
            type="text"
            value={imposeForm.title}
            onChange={(e) => setImposeForm({...imposeForm, title: e.target.value})}
            className="form-input"
            placeholder="Late Submission of Assignment"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Type</label>
          <input
            type="text"
            value={imposeForm.type}
            onChange={(e) => setImposeForm({...imposeForm, type: e.target.value})}
            className="form-input"
            placeholder="P"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Number of Sendos</label>
          <input
            type="text"
            value={imposeForm.sendos}
            onChange={(e) => setImposeForm({...imposeForm, sendos: e.target.value})}
            className="form-input"
            placeholder="-5 Sendos"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Student Name</label>
          <select
            value={imposeForm.student}
            onChange={(e) => setImposeForm({...imposeForm, student: e.target.value})}
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
            value={imposeForm.date}
            onChange={(e) => setImposeForm({...imposeForm, date: e.target.value})}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Time</label>
          <input
            type="time"
            value={imposeForm.time}
            onChange={(e) => setImposeForm({...imposeForm, time: e.target.value})}
            className="form-input"
          />
        </div>

        <button 
          className="validate-button"
          onClick={handleValidateImpose}
        >
          ✓ Validate
        </button>
      </div>
    </div>
  );

  // Create Penalty View
  const renderCreatePenalty = () => (
    <div className="penalties-scroll-content">
      <div className="create-header">
        <h2 className="penalties-title">Create Penalty</h2>
      </div>

      <div className="create-form">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={createForm.title}
            onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
            className="form-input"
            placeholder="Enter penalty title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            value={createForm.description}
            onChange={(e) => setCreateForm({...createForm, description: e.target.value})}
            className="form-textarea"
            placeholder="Enter penalty description"
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
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Recurrent State</label>
          <select
            value={createForm.recurrentState}
            onChange={(e) => setCreateForm({...createForm, recurrentState: e.target.value})}
            className="form-select"
          >
            <option value="">Select recurrence</option>
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
            placeholder="mm/dd/yyyy"
          />
        </div>

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
      case 'penaltiesList':
        return renderPenaltiesList();
      case 'imposePenalty':
        return renderImposePenalty();
      case 'createPenalty':
        return renderCreatePenalty();
      default:
        return renderPenaltiesList();
    }
  };

  return (
    <div className="teacher-penalties-container">
      {/* Header */}
      <div className="penalties-header">
        <button 
          className="back-button" 
          onClick={() => {
            if (currentView === 'penaltiesList') {
              onBack();
            } else {
              setCurrentView('penaltiesList');
            }
          }}
        >
          ←
        </button>
        {currentView === 'imposePenalty' && (
          <span className="header-title">Impose Penalties</span>
        )}
        {currentView === 'createPenalty' && (
          <span className="header-title">Create Penalty</span>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="penalties-content">
        {getCurrentContent()}
      </div>
    </div>
  );
};

export default TeacherPenalties;