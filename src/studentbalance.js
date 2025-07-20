import React, { useState } from 'react';

const StudentBalance = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All Transactions');
  const [currentBalance] = useState(2450); // Current balance from the design

  // Mock transaction data based on the images
  const transactionData = {
    'All Transactions': [
      { id: 1, type: 'Reward', description: 'Perfect Attendance', amount: '+50', date: 'Jan 15, 2025', icon: '🎁', category: 'reward' },
      { id: 2, type: 'Purchase', description: 'School Supplies Bundle', amount: '-120', date: 'Jan 14, 2025', icon: '🛒', category: 'purchase' },
      { id: 3, type: 'Interest', description: 'Interest Earned', amount: '+15', date: 'Jan 13, 2025', icon: '💰', category: 'interest' },
      { id: 4, type: 'Penalty', description: 'Late Assignment', amount: '-25', date: 'Jan 12, 2025', icon: '⚠️', category: 'penalty' },
      { id: 5, type: 'Purchase', description: 'Notebook Set', amount: '-35', date: 'Jan 11, 2025', icon: '🛒', category: 'purchase' },
      { id: 6, type: 'Reward', description: 'Quiz Champion', amount: '+75', date: 'Jan 10, 2025', icon: '🎁', category: 'reward' }
    ],
    'Today': [
      { id: 1, type: 'Interest', description: 'Weekly Interest Earned', amount: '+15', date: 'Jan 15, 2025', icon: '💰', category: 'interest' },
      { id: 2, type: 'Reward', description: 'Perfect Attendance', amount: '+50', date: 'Jan 15, 2025', icon: '🎁', category: 'reward' },
      { id: 3, type: 'Achievement', description: 'Math Quiz 100%', amount: '+100', date: 'Jan 15, 2025', icon: '🏆', category: 'achievement' },
      { id: 4, type: 'Purchase', description: 'Pencil Case', amount: '-25', date: 'Jan 15, 2025', icon: '🛒', category: 'purchase' },
      { id: 5, type: 'Homework', description: 'Completed Early', amount: '+30', date: 'Jan 15, 2025', icon: '📚', category: 'homework' },
      { id: 6, type: 'Snack', description: 'Healthy Fruit Pack', amount: '-10', date: 'Jan 15, 2025', icon: '🍎', category: 'snack' },
      { id: 7, type: 'Participation', description: 'Class Discussion', amount: '+20', date: 'Jan 15, 2025', icon: '🙋', category: 'participation' },
      { id: 8, type: 'Stationery', description: 'Colored Markers', amount: '-15', date: 'Jan 15, 2025', icon: '✏️', category: 'stationery' }
    ],
    'Interest Earned': [
      { id: 1, type: 'Interest', description: 'Weekly Interest Earned', amount: '+15', date: 'Jan 15, 2025', icon: '💰', category: 'interest' },
      { id: 2, type: 'Interest', description: 'Weekly Interest Earned', amount: '+12', date: 'Jan 8, 2025', icon: '💰', category: 'interest' },
      { id: 3, type: 'Interest', description: 'Weekly Interest Earned', amount: '+18', date: 'Jan 1, 2025', icon: '💰', category: 'interest' },
      { id: 4, type: 'Interest', description: 'Weekly Interest Earned', amount: '+14', date: 'Dec 25, 2024', icon: '💰', category: 'interest' }
    ]
  };

  const filterOptions = ['All Transactions', 'Today', 'Interest Earned'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const getBalanceChange = () => {
    const todayTransactions = transactionData['Today'] || [];
    const totalChange = todayTransactions.reduce((sum, transaction) => {
      const amount = parseInt(transaction.amount.replace(/[+-]/g, ''));
      return transaction.amount.startsWith('+') ? sum + amount : sum - amount;
    }, 0);
    return totalChange > 0 ? `+${totalChange}` : totalChange.toString();
  };

  const currentTransactions = transactionData[activeFilter] || [];

  return (
    <div className="balance-transaction-container">
      {/* Header */}
      <div className="balance-header">
        <button className="back-button" onClick={onBack}>
          ←
        </button>
      </div>

      {/* Balance Section */}
      <div className="balance-section">
        <h2 className="balance-title">My Balance</h2>
        <div className="balance-amount">{currentBalance.toLocaleString()}</div>
        {activeFilter === 'Today' && (
          <div className="balance-change">{getBalanceChange()}</div>
        )}
        
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Transactions List */}
      <div className="transactions-section">
        <div className="transactions-list">
          {currentTransactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">
                <span className={`icon ${transaction.category}`}>
                  {transaction.icon}
                </span>
              </div>
              <div className="transaction-details">
                <div className="transaction-type">{transaction.type}</div>
                <div className="transaction-description">{transaction.description}</div>
              </div>
              <div className="transaction-amount-section">
                <div className={`transaction-amount ${transaction.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                  {transaction.amount}
                </div>
                <div className="transaction-date">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentBalance;