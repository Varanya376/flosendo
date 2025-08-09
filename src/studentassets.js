import React, { useState } from 'react';
import './App.css';

const StudentAssets = ({ onBack, onNavigateToRFP }) => {
  const [currentView, setCurrentView] = useState('dashboard'); // Start with dashboard
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedSupply, setSelectedSupply] = useState(null);

  // Mock user assets data
  const userAssets = [
    {
      id: 1,
      name: 'Downtown Residential Plot #A127',
      type: 'Land',
      acquisitionDate: 'Jan 15, 2025',
      acquisitionCost: '3,200 ₿',
      currentValue: '3,500 ₿',
      status: 'Active',
      image: '🏘️'
    },
    {
      id: 2,
      name: 'Business District Plot #B089',
      type: 'Land',
      acquisitionDate: 'Dec 22, 2024',
      acquisitionCost: '5,800 ₿',
      currentValue: '6,100 ₿',
      status: 'Active',
      image: '🏢'
    }
  ];

  // Mock land for auction data
  const auctionAssets = [
    {
      id: 1,
      name: 'Premium Land Plot A1',
      acquisitionCost: '3,200 ₿',
      currentBid: '2,500 m²',
      image: '🏗️'
    },
    {
      id: 2,
      name: 'Garden View Estate B2',
      acquisitionCost: '4,300 ₿',
      currentBid: '1,800 m²',
      image: '🌳'
    },
    {
      id: 3,
      name: 'Urban Development',
      acquisitionCost: '1,900 ₿',
      currentBid: '1,500 m²',
      image: '🏢'
    }
  ];

  // Mock asset detail data
  const assetDetail = {
    name: 'Premium Land Plot',
    location: 'Downtown District, Zone A',
    area: '2,500 m²',
    value: '450 Sendos',
    description: 'This premium land plot is strategically located in the heart of the downtown district. The property offers excellent development potential with easy access to major transportation routes and commercial centers. The land features level terrain with existing utility connections including water, electricity, and sewage systems.'
  };

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

  // Calculate totals
  const totalAssets = userAssets.length;
  const totalValue = userAssets.reduce((sum, asset) => {
    return sum + parseInt(asset.currentValue.replace(/[,₿\s]/g, ''));
  }, 0);

  // Render Dashboard View
  const renderDashboard = () => (
    <>
      {/* Status Bar */}
      <div className="assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dashboard Content */}
      <div className="assets-dashboard">
        <h1 className="dashboard-title">Asset Management</h1>
        
        <div className="dashboard-menu">
          <button 
            className="menu-item land-auctions"
            onClick={() => setCurrentView('auction')}
          >
            <span className="menu-icon">🏛️</span>
            <span className="menu-text">Land Auctions</span>
          </button>

          <button 
            className="menu-item building-supplies"
            onClick={() => setCurrentView('buildingSupplies')}
          >
            <span className="menu-icon">🏗️</span>
            <span className="menu-text">Building Supplies</span>
          </button>

          <button 
            className="menu-item rfps"
            onClick={() => {
              console.log('RFP navigation triggered');
              onNavigateToRFP && onNavigateToRFP();
            }}
          >
            <span className="menu-icon">✅</span>
            <span className="menu-text">RFPs</span>
          </button>

          <button 
            className="menu-item my-assets"
            onClick={() => setCurrentView('myAssets')}
          >
            <span className="menu-icon">🏛️</span>
            <span className="menu-text">My Assets</span>
          </button>
        </div>
      </div>
    </>
  );

  // Render My Assets View
  const renderMyAssets = () => (
    <>
      {/* Status Bar */}
      <div className="assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={() => setCurrentView('dashboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Title and Stats */}
      <div className="assets-title-section">
        <h1 className="page-title">My Assets</h1>
        <div className="assets-stats">
          <div className="stat-card">
            <div className="stat-label">Total Assets</div>
            <div className="stat-value">{totalAssets}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Value</div>
            <div className="stat-value">{totalValue.toLocaleString()} ₿</div>
          </div>
        </div>
      </div>

      {/* Assets List */}
      <div className="assets-list">
        {userAssets.map((asset) => (
          <div key={asset.id} className="asset-card" onClick={() => {
            setSelectedAsset(asset);
            setCurrentView('assetDetail');
          }}>
            <div className="asset-icon-wrapper">
              <div className="asset-icon">{asset.image}</div>
            </div>
            <div className="asset-info">
              <h3 className="asset-name">{asset.name}</h3>
              <div className="asset-meta">
                <span className="asset-type">Asset Type: {asset.type}</span>
                <span className="asset-date">Acquisition Date: {asset.acquisitionDate}</span>
                <span className="asset-cost">Acquisition Cost: {asset.acquisitionCost}</span>
                <span className="asset-value-label">Current Value: {asset.currentValue}</span>
              </div>
            </div>
            <div className="asset-status-badge">{asset.status}</div>
          </div>
        ))}
      </div>
    </>
  );

  // Render Land for Auction View
  const renderAuction = () => (
    <>
      {/* Status Bar */}
      <div className="assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={() => setCurrentView('dashboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="auction-title-section">
        <h1 className="page-title">Land for Auction</h1>
      </div>

      {/* Auction Grid */}
      <div className="auction-grid">
        {auctionAssets.map((asset) => (
          <div key={asset.id} className="auction-card">
            <div className="auction-image">
              <span className="auction-icon">{asset.image}</span>
            </div>
            <div className="auction-details">
              <h3 className="auction-name">{asset.name}</h3>
              <div className="auction-meta">
                <span className="meta-label">{asset.currentBid}</span>
              </div>
              <div className="auction-cost">
                <span className="cost-label">Acquisition Cost</span>
                <span className="cost-value">{asset.acquisitionCost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Render Building Supplies View
  const renderBuildingSupplies = () => (
    <>
      {/* Status Bar */}
      <div className="assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={() => setCurrentView('dashboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="supplies-title-section">
        <h1 className="page-title">Building Supplies</h1>
      </div>

      {/* Supplies Grid */}
      <div className="supplies-grid">
        {buildingSupplies.map((supply) => (
          <div key={supply.id} className="supply-card" onClick={() => {
            setSelectedSupply(supply);
            setCurrentView('supplyDetail');
          }}>
            <div className="supply-image">
              <span className="supply-icon">{supply.image}</span>
            </div>
            <div className="supply-details">
              <h3 className="supply-name">{supply.name}</h3>
              <div className="supply-meta">
                <span className="dimensions-label">{supply.dimensions}</span>
              </div>
              <div className="supply-cost">
                <span className="cost-label">Acquisition Cost</span>
                <span className="cost-value">{supply.acquisitionCost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Render Supply Detail View
  const renderSupplyDetail = () => (
    <>
      {/* Status Bar */}
      <div className="assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={() => setCurrentView('buildingSupplies')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Supply Detail Content */}
      <div className="supply-detail-content">
        <h1 className="detail-title">{selectedSupply?.name || 'Heavy Duty Cardboard'}</h1>
        <p className="detail-subtitle">🏗️ Building Material</p>
        
        <div className="detail-image supply-detail-image">
          <span className="detail-icon">{selectedSupply?.image || '📦'}</span>
        </div>

        <div className="supply-description-section">
          <h2>Description</h2>
          <div className="supply-info-grid">
            <div className="info-row">
              <span className="info-label">Dimensions:</span>
              <span className="info-value">{selectedSupply?.dimensions || '50cm x 70cm'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Value:</span>
              <span className="info-value">8.50 Sendos</span>
            </div>
          </div>
          <p className="supply-description-text">
            High-quality corrugated cardboard perfect for creating structural elements in your board city models. This versatile material is ideal for building walls, roofs, and foundations. Easy to cut, fold, and glue, making it perfect for both beginners and advanced model makers. The corrugated structure provides excellent strength while remaining lightweight.
          </p>
        </div>

        <button className="purchase-supply-button" onClick={() => setCurrentView('payment')}>
          🛒 Purchase Supply
        </button>
      </div>
    </>
  );

  // Render Asset Detail View
  const renderAssetDetail = () => (
    <>
      {/* Status Bar */}
      <div className="assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={() => setCurrentView('myAssets')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Asset Detail Content */}
      <div className="detail-content">
        <h1 className="detail-title">{assetDetail.name}</h1>
        <p className="detail-location">📍 {assetDetail.location}</p>
        
        <div className="detail-image">
          <span className="detail-icon">🏗️</span>
        </div>

        <div className="detail-description">
          <h2>Description</h2>
          <div className="detail-specs">
            <div className="spec-row">
              <span className="spec-label">Area:</span>
              <span className="spec-value">{assetDetail.area}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Value:</span>
              <span className="spec-value">{assetDetail.value}</span>
            </div>
          </div>
          <p className="description-text">{assetDetail.description}</p>
        </div>
      </div>
    </>
  );

  // Render Payment View
  const renderPayment = () => (
    <>
      {/* Status Bar */}
      <div className="assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={() => setCurrentView('supplyDetail')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Payment Content */}
      <div className="payment-content">
        <h1 className="payment-page-title">Confirm Acquisition</h1>
        
        <div className="payment-supply-info">
          <h3 className="payment-supply-name">Supply Name</h3>
          <p className="payment-supply-item">{selectedSupply?.name || 'Heavy Duty Cardboard'}</p>
          
          <div className="payment-price-row">
            <span className="payment-label">Agreed Price</span>
            <span className="payment-price">{selectedSupply?.acquisitionCost || '8.50'}</span>
          </div>
        </div>

        <div className="payment-transaction-details">
          <h3 className="transaction-title">Transaction Details</h3>
          
          <div className="transaction-grid">
            <div className="transaction-item">
              <span className="transaction-label">Type:</span>
              <span className="transaction-value">Supply Purchase</span>
            </div>
            <div className="transaction-item">
              <span className="transaction-label">Date:</span>
              <span className="transaction-value">Jan 15, 2025</span>
            </div>
            <div className="transaction-item">
              <span className="transaction-label">Time:</span>
              <span className="transaction-value">2:30 PM</span>
            </div>
          </div>

          <div className="transaction-total-row">
            <span className="total-label">Total Amount:</span>
            <span className="total-value">8.5 Sendos</span>
          </div>
        </div>

        <button 
          className="confirm-purchase-button"
          onClick={() => {
            alert('Supply purchased successfully!');
            setCurrentView('buildingSupplies');
          }}
        >
          CONFIRM
        </button>
      </div>
    </>
  );

  return (
    <div className="student-assets">
      {currentView === 'dashboard' && renderDashboard()}
      {currentView === 'myAssets' && renderMyAssets()}
      {currentView === 'auction' && renderAuction()}
      {currentView === 'buildingSupplies' && renderBuildingSupplies()}
      {currentView === 'supplyDetail' && renderSupplyDetail()}
      {currentView === 'assetDetail' && renderAssetDetail()}
      {currentView === 'payment' && renderPayment()}
      
      {/* Bottom Navigation */}
      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </div>
  );
};

export default StudentAssets;