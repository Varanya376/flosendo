import React, { useState } from 'react';

const StudentProfile = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('profile'); // 'profile' or 'leaderboard'

  // Mock student data
  const studentData = {
    name: 'Alex Thompson',
    email: 'alex@london.edu',
    avatar: '👤',
    stats: {
      points: 2425,
      assets: 3,
      credits: 137
    },
    details: {
      batch: '2025-2026',
      grade: 'Grade 5A',
      school: 'London School',
      class: 'Mathematics'
    }
  };

  // Mock leaderboard data
  const leaderboardData = [
    { id: 1, name: 'Jennie', points: 2700, rank: 1, avatar: '👩' },
    { id: 2, name: 'Katia', points: 2581, rank: 2, avatar: '👧' },
    { id: 3, name: 'Alex', points: 2425, rank: 3, avatar: '👤', isCurrentUser: true },
    { id: 4, name: 'Zoe', points: 1204, rank: 4, avatar: '👩‍🦱' },
    { id: 5, name: 'Loopy', points: 1238, rank: 5, avatar: '👨' },
    { id: 6, name: 'Brian', points: 1092, rank: 6, avatar: '👦' }
  ];

  // Profile View
  const renderProfile = () => (
    <div style={{
      padding: '0 20px 100px',
      background: '#ffffff',
      minHeight: 'calc(100vh - 80px)',
      overflow: 'auto'
    }}>
      {/* Profile Avatar Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '32px',
        paddingTop: '20px'
      }}>
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          marginBottom: '16px',
          border: '4px solid #e5e7eb'
        }}>
          {studentData.avatar}
        </div>
        <div style={{
          position: 'absolute',
          marginTop: '80px',
          marginLeft: '60px',
          width: '32px',
          height: '32px',
          background: '#3b82f6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid white'
        }}>
          <span style={{ color: 'white', fontSize: '16px' }}>✓</span>
        </div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 4px 0'
        }}>{studentData.name}</h2>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: '0 0 24px 0'
        }}>{studentData.email}</p>
      </div>

      {/* Stats Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '32px',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ fontSize: '24px' }}>🎯</div>
          <div style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#1a1a1a'
          }}>{studentData.stats.points}</div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            fontWeight: '500'
          }}>Sendos</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ fontSize: '24px' }}>🏠</div>
          <div style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#1a1a1a'
          }}>{studentData.stats.assets}</div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            fontWeight: '500'
          }}>Assets</div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ fontSize: '24px' }}>❤️</div>
          <div style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#1a1a1a'
          }}>Bronze</div>
          <div style={{
            fontSize: '12px',
            color: '#6b7280',
            fontWeight: '500'
          }}>Rank</div>
        </div>
      </div>

      {/* Profile Details */}
      <div style={{
        background: '#f8f9fa',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: '500'
          }}>Batch:</span>
          <span style={{
            fontSize: '14px',
            color: '#1a1a1a',
            fontWeight: '600'
          }}>{studentData.details.batch}</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: '500'
          }}>Grade:</span>
          <span style={{
            fontSize: '14px',
            color: '#1a1a1a',
            fontWeight: '600'
          }}>{studentData.details.grade}</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: '500'
          }}>School:</span>
          <span style={{
            fontSize: '14px',
            color: '#1a1a1a',
            fontWeight: '600'
          }}>{studentData.details.school}</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span style={{
            fontSize: '14px',
            color: '#6b7280',
            fontWeight: '500'
          }}>Class:</span>
          <span style={{
            fontSize: '14px',
            color: '#1a1a1a',
            fontWeight: '600'
          }}>{studentData.details.class}</span>
        </div>
      </div>

      {/* Sign Out Button */}
      <button style={{
        background: '#1a1a1a',
        color: 'white',
        border: 'none',
        padding: '16px 32px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        width: '100%',
        marginBottom: '16px'
      }}>
        Sign Out
      </button>

      {/* Help and Support */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
        padding: '12px',
        color: '#6b7280'
      }}>
        <span style={{ fontSize: '16px' }}>❓</span>
        <span style={{ fontSize: '14px', fontWeight: '500' }}>Help and support</span>
      </div>
    </div>
  );

  // Leaderboard View
  const renderLeaderboard = () => (
    <div style={{
      padding: '20px 20px 100px',
      background: '#ffffff',
      minHeight: 'calc(100vh - 80px)',
      overflow: 'auto'
    }}>
      {/* Top 3 Podium */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        marginBottom: '32px',
        gap: '16px'
      }}>
        {/* 2nd Place */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              border: '3px solid #e5e7eb'
            }}>
              👧
            </div>
            <div style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              width: '24px',
              height: '24px',
              background: '#6b7280',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: '700'
            }}>2</div>
          </div>
          <span style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1a1a'
          }}>Katia</span>
          <span style={{
            fontSize: '12px',
            color: '#6b7280'
          }}>Sendos 2.5K</span>
        </div>

        {/* 1st Place */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              border: '4px solid #fbbf24'
            }}>
              👩
            </div>
            <div style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              width: '28px',
              height: '28px',
              background: '#fbbf24',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: '700'
            }}>1</div>
          </div>
          <span style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#1a1a1a'
          }}>Jennie</span>
          <span style={{
            fontSize: '12px',
            color: '#6b7280'
          }}>Sendos 2.7K</span>
        </div>

        {/* 3rd Place */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              border: '3px solid #10b981'
            }}>
              👤
            </div>
            <div style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              width: '24px',
              height: '24px',
              background: '#10b981',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: '700'
            }}>3</div>
          </div>
          <span style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1a1a'
          }}>Alex</span>
          <span style={{
            fontSize: '12px',
            color: '#6b7280'
          }}>Sendos 2.4K</span>
        </div>
      </div>

      {/* Rest of leaderboard */}
      <div style={{ marginBottom: '32px' }}>
        {leaderboardData.slice(3).map((student) => (
          <div key={student.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '12px 16px',
            background: '#f8f9fa',
            borderRadius: '12px',
            marginBottom: '8px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a',
                minWidth: '20px'
              }}>{student.rank}</span>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                {student.avatar}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>{student.name}</div>
            </div>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
              fontWeight: '500'
            }}>Sendos {(student.points / 1000).toFixed(1)}K</div>
          </div>
        ))}
      </div>

      {/* My Summary */}
      <div style={{
        background: '#f8f9fa',
        borderRadius: '16px',
        padding: '20px'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 16px 0'
        }}>My Summary</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{ fontSize: '24px' }}>🎯</div>
            <div style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#1a1a1a'
            }}>{studentData.stats.points}</div>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              fontWeight: '500'
            }}>Sendos</div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{ fontSize: '24px' }}>🏠</div>
            <div style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#1a1a1a'
            }}>{studentData.stats.assets}</div>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              fontWeight: '500'
            }}>Assets</div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{ fontSize: '24px' }}>❤️</div>
            <div style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#1a1a1a'
            }}>{studentData.stats.credits}</div>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              fontWeight: '500'
            }}>Total Credits</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      maxWidth: '375px',
      minHeight: '100vh',
      background: '#ffffff',
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

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px 16px'
      }}>
        <button style={{
          background: 'none',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          padding: '8px'
        }} onClick={() => {
          if (currentView === 'profile') {
            onBack();
          } else {
            setCurrentView('profile');
          }
        }}>
          ←
        </button>
        <span style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1a1a1a'
        }}>
          {currentView === 'leaderboard' ? 'Leader Board' : 'Profile'}
        </span>
        <div style={{ width: '32px' }}></div>
      </div>

      {/* Tab Navigation for Profile */}
      {currentView === 'profile' && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#3b82f6',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            padding: '8px 16px',
            textDecoration: 'underline'
          }} onClick={() => setCurrentView('leaderboard')}>
            View Leaderboard
          </button>
        </div>
      )}

      {/* Content */}
      {currentView === 'profile' ? renderProfile() : renderLeaderboard()}

      {/* Bottom Navigation */}
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

export default StudentProfile;