import React, { useState } from 'react';

const TeacherDashboard = ({ onBack, onNavigateToRewards, onNavigateToPenalties, onNavigateToTeacherHistory, onNavigateToProfile, onNavigateToTeacherBalance, onNavigateToAssets, onNavigateToLessons, onNavigateToRFP }) => {
  const [view, setView] = useState('home');
  const [className, setClassName] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedSupply, setSelectedSupply] = useState(null);

  // Mock building supplies data
  const buildingSupplies = [
    {
      id: 1,
      name: 'Premium Craft Paper',
      dimensions: 'A4 (210 × 297 mm)',
      acquisitionCost: '12.99 ₿',
      image: '📄',
      quantity: 50
    },
    {
      id: 2,
      name: 'Heavy Duty Cardboard',
      dimensions: '50 × 70 cm',
      acquisitionCost: '8.50 ₿',
      image: '📦',
      quantity: 25
    }
  ];

  const handleCreateClass = () => {
    if (className.trim()) {
      console.log('Creating class:', className);
      console.log('Students:', students);
      alert(`Class "${className}" created successfully!`);
      setView('home');
    } else {
      alert('Please enter a class name');
    }
  };

  const handleAddFromList = () => {
    console.log('Add from list clicked');
    alert('Add from list functionality would open here');
  };

  const handleProfileClick = () => {
    console.log('Teacher Profile clicked!');
    setView('profile');
  };

  const handleSupplyClick = (supply) => {
    setSelectedSupply(supply);
    setView('supplyDetail');
  };

  const handleRFPClick = () => {
    console.log('RFP clicked');
    onNavigateToRFP && onNavigateToRFP();
  };

  // Create Class View
  if (view === 'create') {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          backgroundColor: 'white',
          borderBottom: '1px solid #e9ecef'
        }}>
          <button 
            onClick={() => setView('home')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            ←
          </button>
          <h1 style={{
            fontSize: '18px',
            fontWeight: '600',
            margin: 0,
            color: '#212529'
          }}>Create a Class</h1>
          <div style={{ width: '40px' }}></div>
        </div>

        <div style={{ padding: '24px 20px' }}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#495057'
            }}>Class Name</label>
            <input
              type="text"
              placeholder="Enter class name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ced4da',
                borderRadius: '8px',
                fontSize: '16px',
                backgroundColor: 'white',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '500',
              marginBottom: '8px',
              color: '#495057'
            }}>Students</label>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              border: '1px solid #e9ecef',
              marginBottom: '16px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#e9ecef'
                }}></div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#e9ecef'
                }}></div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#e9ecef'
                }}></div>
              </div>
              <p style={{
                margin: 0,
                color: '#6c757d',
                fontSize: '14px'
              }}>No students added yet</p>
            </div>
            
            <button 
              onClick={handleAddFromList}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '12px',
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#495057',
                cursor: 'pointer'
              }}
            >
              <span>📋</span>
              <span>Add from List</span>
            </button>
          </div>

          <button 
            onClick={handleCreateClass}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            CONFIRM
          </button>
        </div>
      </div>
    );
  }

  // Building Supplies View
  if (view === 'buildingSupplies') {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Status Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 20px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          <span>8:15</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          backgroundColor: 'white'
        }}>
          <button 
            onClick={() => setView('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Title */}
        <div style={{ padding: '0 20px 24px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            margin: 0,
            color: '#212529'
          }}>Building Supplies</h1>
        </div>

        {/* Supplies List */}
        <div style={{ padding: '0 20px' }}>
          {buildingSupplies.map((supply) => (
            <div 
              key={supply.id} 
              onClick={() => handleSupplyClick(supply)}
              style={{
                display: 'flex',
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '16px',
                cursor: 'pointer',
                border: '1px solid #e9ecef'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '8px',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
                fontSize: '24px'
              }}>
                {supply.image}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: '0 0 4px 0',
                  color: '#212529'
                }}>{supply.name}</h3>
                <div style={{
                  fontSize: '12px',
                  color: '#6c757d',
                  marginBottom: '8px'
                }}>
                  {supply.dimensions}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '12px',
                    color: '#6c757d'
                  }}>Acquisition Cost</span>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#212529'
                  }}>{supply.acquisitionCost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div style={{
          position: 'fixed',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '134px',
          height: '5px',
          backgroundColor: '#000',
          borderRadius: '3px'
        }}></div>
      </div>
    );
  }

  // Supply Detail View
  if (view === 'supplyDetail') {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Status Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 20px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          <span>8:15</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          backgroundColor: 'white'
        }}>
          <button 
            onClick={() => setView('buildingSupplies')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Supply Detail Content */}
        <div style={{ padding: '0 20px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            margin: '0 0 8px 0',
            color: '#212529'
          }}>{selectedSupply?.name || 'Heavy Duty Cardboard'}</h1>
          <p style={{
            fontSize: '14px',
            color: '#6c757d',
            margin: '0 0 24px 0'
          }}>🏗️ Building Material</p>
          
          <div style={{
            textAlign: 'center',
            padding: '40px 0',
            backgroundColor: 'white',
            borderRadius: '12px',
            marginBottom: '24px'
          }}>
            <span style={{ fontSize: '80px' }}>{selectedSupply?.image || '📦'}</span>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              margin: '0 0 16px 0',
              color: '#212529'
            }}>Description</h2>
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid #e9ecef'
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#6c757d'
                }}>Dimensions</span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#212529'
                }}>{selectedSupply?.dimensions || '50cm x 70cm'}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0'
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#6c757d'
                }}>Value</span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#212529'
                }}>8.50 Sendos</span>
              </div>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 8px 0',
                color: '#212529'
              }}>Usage</h3>
              <p style={{
                fontSize: '14px',
                color: '#495057',
                margin: 0,
                lineHeight: '1.5'
              }}>
                Perfect for constructing building frameworks, creating textured surfaces, and adding structural support to your board city models.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div style={{
          position: 'fixed',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '134px',
          height: '5px',
          backgroundColor: '#000',
          borderRadius: '3px'
        }}></div>
      </div>
    );
  }

  // Teacher Profile View
  if (view === 'profile') {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Status Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 20px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          <span>8:15</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          backgroundColor: 'white'
        }}>
          <button 
            onClick={() => setView('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 style={{
            fontSize: '18px',
            fontWeight: '600',
            margin: 0,
            color: '#212529'
          }}>Profile</h1>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '8px',
            color: '#007bff'
          }}>
            Edit
          </button>
        </div>

        {/* Profile Content */}
        <div style={{
          padding: '32px 20px',
          textAlign: 'center'
        }}>
          {/* Profile Avatar */}
          <div style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#e9ecef',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              margin: '0 auto',
              position: 'relative'
            }}>
              👨‍🏫
            </div>
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '24px',
              height: '24px',
              backgroundColor: '#007bff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid white'
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
          </div>

          {/* Name and Email */}
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 8px 0',
            color: '#212529'
          }}>Sarah Johnson</h2>
          <p style={{
            fontSize: '16px',
            color: '#6c757d',
            margin: '0 0 32px 0'
          }}>alex@london.edu</p>

          {/* Profile Details */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '0',
            textAlign: 'left',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid #f8f9fa'
            }}>
              <span style={{
                fontSize: '16px',
                color: '#495057',
                fontWeight: '500'
              }}>School:</span>
              <span style={{
                fontSize: '16px',
                color: '#212529',
                fontWeight: '500'
              }}>London School</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px'
            }}>
              <span style={{
                fontSize: '16px',
                color: '#495057',
                fontWeight: '500'
              }}>Class:</span>
              <span style={{
                fontSize: '16px',
                color: '#212529',
                fontWeight: '500'
              }}>Mathematics</span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div style={{
          position: 'fixed',
          bottom: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '134px',
          height: '5px',
          backgroundColor: '#000',
          borderRadius: '3px'
        }}></div>
      </div>
    );
  }
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Status Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 20px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
        <span>8:15</span>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={handleProfileClick}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#f8f9fa',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}
          >
            👨‍🏫
          </button>
          <div>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              margin: '0 0 2px 0',
              color: '#212529'
            }}>Sarah Johnson</h2>
            <p style={{
              fontSize: '14px',
              color: '#6c757d',
              margin: 0
            }}>Teacher</p>
          </div>
        </div>
        <button style={{
          background: 'none',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '8px'
        }}>
          🔔
        </button>
      </div>

      {/* Dashboard Title */}
      <div style={{ padding: '24px 20px 16px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          color: '#212529'
        }}>Dashboard</h1>
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '0 20px 40px'
      }}>
        {/* Rewards & Penalties Card */}
        <div 
          onClick={() => {
            console.log('Rewards & Penalties clicked');
            onNavigateToRewards && onNavigateToRewards();
          }}
          style={{
            backgroundColor: '#a8e6a1',
            borderRadius: '12px',
            padding: '16px',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '100%'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            fontSize: '18px'
          }}>
            🎁
          </div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
            color: '#1a1a1a',
            lineHeight: '1.3'
          }}>Rewards & Penalties</h3>
        </div>

        {/* Account Balance Card */}
        <div 
          onClick={() => {
            console.log('Account Balance clicked');
            onNavigateToTeacherBalance && onNavigateToTeacherBalance();
          }}
          style={{
            backgroundColor: '#d4a4f4',
            borderRadius: '12px',
            padding: '16px',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '100%'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            fontSize: '18px'
          }}>
            💳
          </div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
            color: '#1a1a1a',
            lineHeight: '1.3'
          }}>Account Balance</h3>
        </div>

        {/* Asset Management Card */}
        <div 
          onClick={() => {
            console.log('Asset Management clicked');
            onNavigateToAssets && onNavigateToAssets();
          }}
          style={{
            backgroundColor: '#87ceeb',
            borderRadius: '12px',
            padding: '16px',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '100%'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            fontSize: '18px'
          }}>
            🏛️
          </div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
            color: '#1a1a1a',
            lineHeight: '1.3'
          }}>Asset Management</h3>
        </div>

        {/* Lessons Card */}
        <div 
          onClick={() => {
            console.log('Lessons clicked');
            onNavigateToLessons && onNavigateToLessons();
          }}
          style={{
            backgroundColor: '#e5e5e5',
            borderRadius: '12px',
            padding: '16px',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '100%'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            fontSize: '18px'
          }}>
            📚
          </div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
            color: '#1a1a1a',
            lineHeight: '1.3'
          }}>Lessons</h3>
        </div>

        {/* Manage Class Card */}
        <div 
          onClick={() => setView('create')}
          style={{
            backgroundColor: '#e5e5e5',
            borderRadius: '12px',
            padding: '16px',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            width: '100%'
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px',
            fontSize: '18px'
          }}>
            👥
          </div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            margin: 0,
            color: '#1a1a1a',
            lineHeight: '1.3'
          }}>Manage Class</h3>
        </div>
      </div>

      {/* Bottom Navigation Indicator */}
      <div style={{
        position: 'fixed',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '134px',
        height: '5px',
        backgroundColor: '#000',
        borderRadius: '3px'
      }}></div>
    </div>
  );
};

export default TeacherDashboard;