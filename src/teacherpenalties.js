import React, { useState } from 'react';

const TeacherPenalties = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('penaltiesList'); // 'penaltiesList', 'imposePenalty', 'createPenalty'
  const [selectedPenalty, setSelectedPenalty] = useState(null);

  // Mock penalties data
  const [penalties, setPenalties] = useState([
    {
      id: 1,
      title: 'Late Assignment Submission',
      sendos: '-10',
      validUntil: 'Valid until Mar 15, 2025',
      icon: '⚠️',
      category: 'assignment'
    },
    {
      id: 2,
      title: 'Disruptive Behavior',
      sendos: '-25',
      validUntil: 'Valid until Apr 30, 2025',
      icon: '🚫',
      category: 'behavior'
    },
    {
      id: 3,
      title: 'Tardiness',
      sendos: '-5',
      validUntil: 'Valid until Dec 31, 2025',
      icon: '⏰',
      category: 'attendance'
    },
    {
      id: 4,
      title: 'Phone Usage in Class',
      sendos: '-15',
      validUntil: 'Valid until Jun 20, 2025',
      icon: '📱',
      category: 'device'
    },
    {
      id: 5,
      title: 'Missing Homework',
      sendos: '-20',
      validUntil: 'Valid until May 15, 2025',
      icon: '📝',
      category: 'homework'
    }
  ]);

  // Form states
  const [imposeForm, setImposeForm] = useState({
    title: '',
    type: 'P',
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
        sendos: `-${createForm.sendosValue}`,
        validUntil: createForm.date ? `Valid until ${new Date(createForm.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : 'Valid until Dec 31, 2025',
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
    <>
      <div className="pen-header">
        <button className="pen-back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <h1 className="pen-header-title">Penalty Tasks</h1>
        <button className="pen-add-button" onClick={handleCreatePenalty}>
          <span>+</span>
        </button>
      </div>

      <div className="pen-list-content">
        {penalties.map((penalty) => (
          <div key={penalty.id} className="pen-item">
            <div className="pen-icon">
              <span>{penalty.icon}</span>
            </div>
            <div className="pen-info">
              <h4 className="pen-title">{penalty.title}</h4>
              <p className="pen-meta">{penalty.sendos} Sendos • {penalty.validUntil}</p>
            </div>
            <div className="pen-button-group">
              <button 
                className="pen-impose-button"
                onClick={() => handleImposePenalty(penalty)}
              >
                Impose Penalty
              </button>
              <button className="pen-edit-button">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Impose Penalty View
  const renderImposePenalty = () => (
    <>
      <div className="pen-header">
        <button className="pen-back-button" onClick={() => setCurrentView('penaltiesList')}>
          <span>←</span>
        </button>
        <h1 className="pen-header-title">Impose Penalties</h1>
        <div className="pen-header-spacer"></div>
      </div>

      <div className="pen-form-content">
        <div className="pen-form-section">
          <label className="pen-form-label">Penalty Title</label>
          <input
            type="text"
            value={imposeForm.title}
            onChange={(e) => setImposeForm({...imposeForm, title: e.target.value})}
            className="pen-form-input"
            placeholder="Late Submission of Assignment"
          />
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Type</label>
          <input
            type="text"
            value={imposeForm.type}
            onChange={(e) => setImposeForm({...imposeForm, type: e.target.value})}
            className="pen-form-input"
            placeholder="P"
          />
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Number of Sendos</label>
          <input
            type="text"
            value={imposeForm.sendos}
            onChange={(e) => setImposeForm({...imposeForm, sendos: e.target.value})}
            className="pen-form-input"
            placeholder="-5 Sendos"
          />
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Student Name</label>
          <select
            value={imposeForm.student}
            onChange={(e) => setImposeForm({...imposeForm, student: e.target.value})}
            className="pen-form-select"
          >
            <option value="">Select a student</option>
            {students.map((student, index) => (
              <option key={index} value={student}>{student}</option>
            ))}
          </select>
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Date</label>
          <input
            type="date"
            value={imposeForm.date}
            onChange={(e) => setImposeForm({...imposeForm, date: e.target.value})}
            className="pen-form-input"
          />
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Time</label>
          <input
            type="time"
            value={imposeForm.time}
            onChange={(e) => setImposeForm({...imposeForm, time: e.target.value})}
            className="pen-form-input"
          />
        </div>

        <button 
          className="pen-validate-button"
          onClick={handleValidateImpose}
        >
          <span className="pen-check-icon">✓</span> Validate
        </button>
      </div>
    </>
  );

  // Create Penalty View
  const renderCreatePenalty = () => (
    <>
      <div className="pen-header">
        <button className="pen-back-button" onClick={() => setCurrentView('penaltiesList')}>
          <span>←</span>
        </button>
        <h1 className="pen-header-title">Create Penalty</h1>
        <div className="pen-header-spacer"></div>
      </div>

      <div className="pen-form-content">
        <div className="pen-form-section">
          <label className="pen-form-label">Title</label>
          <input
            type="text"
            value={createForm.title}
            onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
            className="pen-form-input"
            placeholder="Enter penalty title"
          />
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Description</label>
          <textarea
            value={createForm.description}
            onChange={(e) => setCreateForm({...createForm, description: e.target.value})}
            className="pen-form-textarea"
            placeholder="Enter penalty description"
            rows="3"
          />
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Sendos Value</label>
          <input
            type="number"
            value={createForm.sendosValue}
            onChange={(e) => setCreateForm({...createForm, sendosValue: e.target.value})}
            className="pen-form-input"
            placeholder="0"
          />
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Recurrent State</label>
          <select
            value={createForm.recurrentState}
            onChange={(e) => setCreateForm({...createForm, recurrentState: e.target.value})}
            className="pen-form-select"
          >
            <option value="">Select recurrence</option>
            <option value="once">One-time</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="pen-form-section">
          <label className="pen-form-label">Date</label>
          <input
            type="date"
            value={createForm.date}
            onChange={(e) => setCreateForm({...createForm, date: e.target.value})}
            className="pen-form-input"
            placeholder="mm/dd/yyyy"
          />
        </div>

        <button 
          className="pen-validate-button"
          onClick={handleValidateCreate}
        >
          <span className="pen-check-icon">✓</span> Validate
        </button>
      </div>
    </>
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
    <div className="pen-container">
      {getCurrentContent()}
    </div>
  );
};

export default TeacherPenalties;