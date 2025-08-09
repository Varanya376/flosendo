import React from 'react';

const StudentDashboard = ({
  onBack,
  onNavigateToBalance,
  onNavigateToHistory,
  onNavigateToAssets,
  onNavigateToProfile,
  onNavigateToRFP,
  onNavigateToLeaderboard
}) => {
  const studentData = {
    name: "Alex Thompson",
    role: "Student",
    avatar: "A"
  };

  const dashboardItems = [
    {
      id: 'rewards',
      title: 'Rewards & Penalties',
      icon: '🏆',
      color: '#bbf7d0',
      onClick: onNavigateToHistory
    },
    {
      id: 'balance',
      title: 'Account Balance',
      icon: '💰',
      color: '#f3e8ff',
      onClick: onNavigateToBalance
    },
    {
      id: 'assets',
      title: 'Asset Management',
      icon: '🏛️',
      color: '#cffafe',
      onClick: onNavigateToAssets
    },
    {
      id: 'lessons',
      title: 'Lessons',
      icon: '📚',
      color: '#f1f5f9',
      onClick: () => console.log('Lessons clicked')
    }
  ];

  return (
    <div style={{
      maxWidth: '375px',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      margin: '0 auto'
    }}>
      {/* Status Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px 8px',
        fontSize: '15px',
        fontWeight: '600',
        color: '#000000'
      }}>
        <div>8:15</div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px' }}>📶</span>
          <span style={{ fontSize: '12px' }}>📶</span>
          <span style={{ fontSize: '12px' }}>🔋</span>
        </div>
      </div>
      
      {/* User Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px 20px',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={onNavigateToProfile}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '19px',
              color: '#2c2c2c',
              border: '2px solid #f5f5f5',
              cursor: 'pointer'
            }}
          >
            {studentData.avatar}
          </button>
          <div>
            <h2 style={{
              fontSize: '17px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 3px 0',
              lineHeight: '1.2'
            }}>{studentData.name}</h2>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              fontWeight: '400',
              margin: '0'
            }}>{studentData.role}</p>
          </div>
        </div>
        <button style={{
          width: '24px',
          height: '24px',
          background: '#f3f4f6',
          borderRadius: '6px',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6b7280',
          fontSize: '12px',
          cursor: 'pointer'
        }}>
          🔔
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ padding: '0 20px', marginBottom: '28px' }}>
        <div style={{
          position: 'relative',
          background: '#f8f9fa',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          padding: '14px 16px'
        }}>
          <svg style={{
            width: '16px',
            height: '16px',
            color: '#9ca3af',
            marginRight: '12px'
          }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            fontSize: '15px',
            color: '#374151',
            width: '100%'
          }} type="text" placeholder="🔍" />
        </div>
      </div>

      {/* Dashboard Title */}
      <div style={{ padding: '0 20px', marginBottom: '24px' }}>
        <h1 style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#111827',
          margin: '0',
          letterSpacing: '-0.02em'
        }}>Dashboard</h1>
      </div>

      {/* Dashboard Grid */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        padding: '0 20px',
        marginBottom: '100px'
      }}>
        {dashboardItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 20px',
              backgroundColor: item.color,
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: item.id === 'rewards' ? '0 4px 14px rgba(74, 222, 128, 0.25)' :
                         item.id === 'balance' ? '0 4px 14px rgba(216, 180, 254, 0.25)' :
                         item.id === 'assets' ? '0 4px 14px rgba(103, 232, 249, 0.25)' :
                         '0 4px 14px rgba(203, 213, 225, 0.25)'
            }}
            onClick={item.onClick}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = item.id === 'rewards' ? '0 4px 14px rgba(74, 222, 128, 0.25)' :
                                        item.id === 'balance' ? '0 4px 14px rgba(216, 180, 254, 0.25)' :
                                        item.id === 'assets' ? '0 4px 14px rgba(103, 232, 249, 0.25)' :
                                        '0 4px 14px rgba(203, 213, 225, 0.25)';
            }}
          >
            <div style={{
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              position: 'relative',
              zIndex: 2
            }}>
              {item.icon}
            </div>
            <div style={{
              fontSize: '15px',
              fontWeight: '600',
              color: item.id === 'rewards' ? '#166534' :
                     item.id === 'balance' ? '#7c2d92' :
                     item.id === 'assets' ? '#155e75' :
                     '#475569'
            }}>
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Indicator */}
      <div style={{
        position: 'fixed',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100
      }}>
        <div style={{
          width: '134px',
          height: '5px',
          background: '#1a1a1a',
          borderRadius: '3px'
        }}></div>
      </div>
    </div>
  );
};

export default StudentDashboard;