import React, { useState } from 'react';
import './App.css';

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
    recentActivity: {
      earned: 125,
      spent: 75
    },
    transactions: [
      {
        id: 1,
        type: 'reward',
        title: 'Reward',
        subtitle: 'Perfect Attendance',
        amount: 50,
        date: 'Jan 15, 2025',
        time: '',
        icon: '🎁'
      },
      {
        id: 2,
        type: 'purchase',
        title: 'Purchase',
        subtitle: 'School Supplies Bundle',
        amount: -120,
        date: 'Jan 14, 2025',
        time: '',
        icon: '🛒'
      },
      {
        id: 3,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Interest Earned',
        amount: 15,
        date: 'Jan 13, 2025',
        time: '',
        icon: '💰'
      },
      {
        id: 4,
        type: 'achievement',
        title: 'Achievement',
        subtitle: 'Math Quiz 100%',
        amount: 100,
        date: 'Jan 12, 2025',
        time: '2:15 PM',
        icon: '🏆'
      },
      {
        id: 5,
        type: 'penalty',
        title: 'Penalty',
        subtitle: 'Late Assignment',
        amount: -25,
        date: 'Jan 12, 2025',
        time: '',
        icon: '⚠️'
      },
      {
        id: 6,
        type: 'purchase',
        title: 'Purchase',
        subtitle: 'Notebook Set',
        amount: -35,
        date: 'Jan 11, 2025',
        time: '',
        icon: '🛒'
      },
      {
        id: 7,
        type: 'reward',
        title: 'Reward',
        subtitle: 'Quiz Champion',
        amount: 75,
        date: 'Jan 10, 2025',
        time: '',
        icon: '🎁'
      },
      {
        id: 8,
        type: 'homework',
        title: 'Homework',
        subtitle: 'Completed Early',
        amount: 30,
        date: 'Jan 9, 2025',
        time: '',
        icon: '📚'
      },
      {
        id: 9,
        type: 'snack',
        title: 'Snack',
        subtitle: 'Healthy Fruit Pack',
        amount: -15,
        date: 'Jan 8, 2025',
        time: '7:15 AM',
        icon: '🍎'
      },
      {
        id: 10,
        type: 'participation',
        title: 'Participation',
        subtitle: 'Class Discussion',
        amount: 20,
        date: 'Jan 7, 2025',
        time: '9:45 AM',
        icon: '🗣️'
      },
      {
        id: 11,
        type: 'stationery',
        title: 'Stationery',
        subtitle: 'Colored Markers',
        amount: -35,
        date: 'Jan 6, 2025',
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
        date: 'Jan 15, 2025',
        icon: '💰'
      },
      {
        id: 2,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Weekly Interest Earned',
        amount: 12,
        date: 'Jan 8, 2025',
        icon: '💰'
      },
      {
        id: 3,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Weekly Interest Earned',
        amount: 18,
        date: 'Dec 30, 2024',
        icon: '💰'
      },
      {
        id: 4,
        type: 'interest',
        title: 'Interest',
        subtitle: 'Weekly Interest Earned',
        amount: 14,
        date: 'Dec 23, 2024',
        icon: '💰'
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
        return transactionData.transactions.filter(t => 
          t.date === 'Jan 15, 2025'
        );
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
  );
};

export default TeacherBalance;