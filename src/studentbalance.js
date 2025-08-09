import React, { useState } from 'react';
import './App.css';

const StudentBalance = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All Transactions');
  const [currentBalance] = useState(2450);

  // Mock transaction data based on the Figma design
  const transactionData = {
    'All Transactions': [
      { 
        id: 1, 
        type: 'Reward', 
        description: 'Perfect Attendance', 
        amount: '+50', 
        date: 'Jan 15, 2025', 
        icon: '🎁', 
        category: 'reward'
      },
      { 
        id: 2, 
        type: 'Penalty', 
        description: 'Late Assignment', 
        amount: '-10', 
        date: 'Jan 14, 2025', 
        icon: '⚠️', 
        category: 'penalty'
      },
      { 
        id: 3, 
        type: 'Interest', 
        description: 'Monthly Interest', 
        amount: '+18', 
        date: 'Jan 26, 2024', 
        icon: '💰', 
        category: 'interest'
      },
      { 
        id: 4, 
        type: 'Supply Purchase', 
        description: 'School Supplies Bundle', 
        amount: '-120', 
        date: 'Dec 26, 2024', 
        icon: '🛒', 
        category: 'purchase'
      },
      { 
        id: 5, 
        type: 'Land auction', 
        description: 'Winning Bid Lot 43', 
        amount: '-500', 
        date: 'Jul 18, 2024', 
        icon: '🏛️', 
        category: 'auction'
      },
      { 
        id: 6, 
        type: 'RFP', 
        description: 'Project Proposal', 
        amount: '+250', 
        date: 'Jul 15, 2024', 
        icon: '📋', 
        category: 'rfp'
      }
    ],
    'Today': [
      { 
        id: 1, 
        type: 'Reward', 
        description: 'Perfect Attendance', 
        amount: '+50', 
        date: 'Today', 
        icon: '🎁', 
        category: 'reward'
      },
      { 
        id: 2, 
        type: 'Achievement', 
        description: 'Math Quiz 100%', 
        amount: '+100', 
        date: 'Today', 
        icon: '🏆', 
        category: 'achievement'
      },
      { 
        id: 3, 
        type: 'Purchase', 
        description: 'Pencil Case', 
        amount: '-25', 
        date: 'Today', 
        icon: '🛒', 
        category: 'purchase'
      }
    ],
    'Interest Earned': [
      { 
        id: 1, 
        type: 'Interest', 
        description: 'Weekly Interest Earned', 
        amount: '+15', 
        date: 'Jan 13, 2025', 
        icon: '💰', 
        category: 'interest'
      },
      { 
        id: 2, 
        type: 'Interest', 
        description: 'Weekly Interest Earned', 
        amount: '+18', 
        date: 'Jan 6, 2025', 
        icon: '💰', 
        category: 'interest'
      },
      { 
        id: 3, 
        type: 'Interest', 
        description: 'Weekly Interest Earned', 
        amount: '+14', 
        date: 'Dec 30, 2024', 
        icon: '💰', 
        category: 'interest'
      }
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
    <div className="student-balance">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="time">8:15</div>
        <div className="signal-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="balance-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Balance Section */}
      <div className="balance-section">
        <h1 className="balance-title">My Balance</h1>
        <div className="balance-display">
          <div className="balance-amount">{currentBalance.toLocaleString()}</div>
          <div className="balance-currency">Sendos</div>
        </div>
        
        {activeFilter === 'Today' && (
          <div className="balance-change-section">
            <div className="balance-change-wrapper">
              <div className="balance-change-amount">{getBalanceChange()}</div>
              <div className="balance-change-label">Net Sendos</div>
            </div>
            <div className="balance-breakdown">
              <div className="earned-section">
                <span className="earned-label">Earned</span>
                <span className="earned-amount">+200</span>
              </div>
              <div className="divider"></div>
              <div className="spent-section">
                <span className="spent-label">Spent</span>
                <span className="spent-amount">-75</span>
              </div>
            </div>
            <div className="balance-date">January 15, 2025</div>
          </div>
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
              <div className="transaction-left">
                <div className={`transaction-icon ${transaction.category}`}>
                  <span className="icon-emoji">
                    {transaction.icon}
                  </span>
                </div>
                <div className="transaction-details">
                  <div className="transaction-type">{transaction.type}</div>
                  <div className="transaction-description">{transaction.description}</div>
                </div>
              </div>
              <div className="transaction-right">
                <div className={`transaction-amount ${transaction.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                  {transaction.amount}
                </div>
                <div className="transaction-date">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Indicator */}
      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </div>
  );
};

export default StudentBalance;