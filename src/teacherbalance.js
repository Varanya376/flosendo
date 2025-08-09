import React, { useState } from 'react';

const TeacherBalance = ({ onBack }) => {
  const [selectedStudent, setSelectedStudent] = useState('Emma Johnson');
  const [currentTab, setCurrentTab] = useState('All Transactions');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock data for students
  const students = [
    'Emma Johnson',
    'Alex Thompson',
    'Sarah Wilson',
    'Mike Davis',
    'Lisa Brown'
  ];

  // Mock transaction data
  const transactionData = {
    balance: 2450,
    sendos: 'Sendos',
    recentActivity: {
      earned: 200,
      spent: 75
    },
    transactions: [
      {
        id: 1,
        type: 'reward',
        title: 'Reward',
        subtitle: 'Perfect Attendance',
        amount: 50,
        date: 'Jul 23, 2025',
        time: '',
        icon: '🎁'
      },
      {
        id: 2,
        type: 'penalty',
        title: 'Penalty',
        subtitle: 'Late Assignment',
        amount: -25,
        date: 'Jul 22, 2025',
        time: '',
        icon: '⚠️'
      },
      {
        id: 3,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Monthly Interest',
        amount: 15,
        date: 'Jul 21, 2025',
        time: '',
        icon: '📈'
      },
      {
        id: 4,
        type: 'purchase',
        title: 'Supply Purchase',
        subtitle: 'School Supplies Bundle',
        amount: -120,
        date: 'Jul 20, 2025',
        time: '',
        icon: '🛒'
      },
      {
        id: 5,
        type: 'auction',
        title: 'Land auction',
        subtitle: 'Winning Bid Lot 42',
        amount: -500,
        date: 'Jul 19, 2025',
        time: '',
        icon: '🏛️'
      },
      {
        id: 6,
        type: 'rfp',
        title: 'RFP',
        subtitle: 'Project Proposal',
        amount: 250,
        date: 'Jul 18, 2025',
        time: '',
        icon: '📋'
      }
    ],
    todayTransactions: [
      {
        id: 1,
        type: 'reward',
        title: 'Reward',
        subtitle: 'Perfect Attendance',
        amount: 50,
        date: 'January 15, 2025',
        time: '10:30 AM',
        icon: '🎁'
      },
      {
        id: 2,
        type: 'achievement',
        title: 'Achievement',
        subtitle: 'Math Quiz 100%',
        amount: 100,
        date: 'January 15, 2025',
        time: '2:15 PM',
        icon: '🏆'
      },
      {
        id: 3,
        type: 'purchase',
        title: 'Purchase',
        subtitle: 'Pencil Case',
        amount: -25,
        date: 'January 15, 2025',
        time: '12:45 PM',
        icon: '🛒'
      },
      {
        id: 4,
        type: 'homework',
        title: 'Homework',
        subtitle: 'Completed Early',
        amount: 30,
        date: 'January 15, 2025',
        time: '3:30 PM',
        icon: '📚'
      },
      {
        id: 5,
        type: 'snack',
        title: 'Snack',
        subtitle: 'Healthy Fruit Pack',
        amount: -15,
        date: 'January 15, 2025',
        time: '11:15 AM',
        icon: '🍎'
      },
      {
        id: 6,
        type: 'participation',
        title: 'Participation',
        subtitle: 'Class Discussion',
        amount: 20,
        date: 'January 15, 2025',
        time: '9:45 AM',
        icon: '💬'
      },
      {
        id: 7,
        type: 'stationery',
        title: 'Stationery',
        subtitle: 'Colored Markers',
        amount: -35,
        date: 'January 15, 2025',
        time: '1:20 PM',
        icon: '✏️'
      }
    ],
    interestHistory: [
      {
        id: 1,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Weekly Interest Earned',
        amount: 15,
        date: 'Jan 13, 2025',
        time: '',
        icon: '📈'
      },
      {
        id: 2,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Weekly Interest Earned',
        amount: 12,
        date: 'Jan 6, 2025',
        time: '',
        icon: '📈'
      },
      {
        id: 3,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Weekly Interest Earned',
        amount: 18,
        date: 'Dec 30, 2024',
        time: '',
        icon: '📈'
      },
      {
        id: 4,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Weekly Interest Earned',
        amount: 14,
        date: 'Dec 23, 2024',
        time: '',
        icon: '📈'
      }
    ]
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setIsDropdownOpen(false);
  };

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleTransactionClick = (transaction) => {
    console.log('Transaction clicked:', transaction);
    // Handle transaction details view
  };

  const handleDeleteTransaction = (transactionId, event) => {
    event.stopPropagation();
    console.log('Delete transaction:', transactionId);
    // Handle transaction deletion
  };

  const getFilteredTransactions = () => {
    switch (currentTab) {
      case 'Today':
        return transactionData.todayTransactions;
      case 'Interest Earned':
        return transactionData.interestHistory;
      default:
        return transactionData.transactions;
    }
  };

  const renderTransactionItem = (transaction) => (
    <div 
      key={transaction.id}
      className="transaction-item"
      data-type={transaction.type}
      onClick={() => handleTransactionClick(transaction)}
    >
      <div className="transaction-icon">
        <span>{transaction.icon}</span>
      </div>
      <div className="transaction-details">
        <div className="transaction-title">{transaction.title}</div>
        <div className="transaction-subtitle">{transaction.subtitle}</div>
      </div>
      <div className="transaction-right">
        <div className={`transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
          {transaction.amount > 0 ? '+' : ''}{transaction.amount}
        </div>
        <div className="transaction-date">{transaction.time || transaction.date}</div>
      </div>
      {currentTab === 'All Transactions' && (
        <button 
          className="delete-button"
          onClick={(e) => handleDeleteTransaction(transaction.id, e)}
        >
          <span>🗑️</span>
        </button>
      )}
    </div>
  );

  return (
    <div className="teacher-balance-container">
      {/* Header */}
      <div className="balance-header">
        <button className="back-button" onClick={onBack}>
          <span>←</span>
        </button>
        <h1 className="header-title">Student Balance</h1>
      </div>

      <div className="content-wrapper">
        {/* Student Selection */}
        <div className="student-selection">
          <label className="selection-label">Select Student</label>
          <div className="dropdown-container">
            <button 
              className="student-dropdown"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedStudent}</span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {students.map((student, index) => (
                  <button
                    key={index}
                    className={`dropdown-item ${student === selectedStudent ? 'selected' : ''}`}
                    onClick={() => handleStudentSelect(student)}
                  >
                    {student}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Balance Display */}
        <div className="balance-display">
          <div className="balance-label">Current Balance</div>
          <div className="balance-amount">{transactionData.balance.toLocaleString()}</div>
          <div className="balance-currency">Sendos</div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          {['All Transactions', 'Today', 'Interest Earned'].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${currentTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recent Activity Summary (for Today tab) */}
        {currentTab === 'Today' && (
          <div className="activity-summary">
            <div className="activity-item">
              <span className="activity-label">Earned</span>
              <span className="activity-amount positive">+{transactionData.recentActivity.earned}</span>
            </div>
            <div className="activity-item">
              <span className="activity-label">Spent</span>
              <span className="activity-amount negative">-{transactionData.recentActivity.spent}</span>
            </div>
          </div>
        )}

        {/* Transactions List */}
        <div className="transactions-container">
          <div className="transactions-list">
            {getFilteredTransactions().length > 0 ? (
              getFilteredTransactions().map(renderTransactionItem)
            ) : (
              <div className="empty-state">
                <h3>No transactions found</h3>
                <p>No transactions available for the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherBalance;