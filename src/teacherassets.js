import React, { useState } from 'react';
import './App.css';

const TeacherAssets = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('auction'); // 'auction', 'landDetail', 'confirmAuction'
  const [selectedLand, setSelectedLand] = useState(null);

  // Mock land auction data
  const auctionLands = [
    {
      id: 1,
      name: 'Premium Land Plot A1',
      area: '2,500 m²',
      acquisitionCost: '3,200 ₿',
      image: '🏢',
      currentBid: '2,800 ₿',
      location: 'Downtown District, Zone A'
    },
    {
      id: 2,
      name: 'Garden View Estate B2',
      area: '1,800 m²',
      acquisitionCost: '4,300 ₿',
      image: '🏘️',
      currentBid: '3,900 ₿',
      location: 'Suburban Area, Zone B'
    },
    {
      id: 3,
      name: 'Urban Development',
      area: '1,500 m²',
      acquisitionCost: '1,900 ₿',
      image: '🏗️',
      currentBid: '1,700 ₿',
      location: 'Business District, Zone C'
    }
  ];

  // Sample auction details
  const auctionDetails = {
    studentName: 'Select winning student...',
    agreedPrice: '---'
  };

  const handleLandClick = (land) => {
    setSelectedLand(land);
    setCurrentView('landDetail');
  };

  const handleAuctionResult = () => {
    setCurrentView('confirmAuction');
  };

  const handleConfirmAuction = () => {
    alert('Auction confirmed successfully!');
    setCurrentView('auction');
    setSelectedLand(null);
  };

  // Render Start Land Auctions View
  const renderAuctionList = () => (
    <>
      {/* Status Bar */}
      <div className="teacher-assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="teacher-assets-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="teacher-assets-title-section">
        <h1 className="page-title">Start Land Auctions</h1>
      </div>

      {/* Auction Grid */}
      <div className="teacher-auction-grid">
        {auctionLands.map((land) => (
          <div key={land.id} className="teacher-auction-card" onClick={() => handleLandClick(land)}>
            <div className="teacher-auction-image">
              <span className="teacher-auction-icon">{land.image}</span>
            </div>
            <div className="teacher-auction-details">
              <h3 className="teacher-auction-name">{land.name}</h3>
              <div className="teacher-auction-meta">
                <span className="meta-icon">📏</span>
                <span className="meta-label">{land.area}</span>
              </div>
              <div className="teacher-auction-cost">
                <span className="cost-label">Acquisition Cost</span>
                <span className="cost-value">{land.acquisitionCost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  // Render Land Detail View
  const renderLandDetail = () => (
    <>
      {/* Status Bar */}
      <div className="teacher-assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="teacher-assets-header">
        <button className="back-button" onClick={() => setCurrentView('auction')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Land Detail Content */}
      <div className="teacher-land-detail-content">
        <h1 className="detail-title">{selectedLand?.name || 'Premium Land Plot'}</h1>
        <p className="detail-location">📍 {selectedLand?.location || 'Downtown District, Zone A'}</p>
        
        <div className="teacher-detail-image">
          <span className="detail-icon">{selectedLand?.image || '🏢'}</span>
        </div>

        <div className="teacher-description-section">
          <h2>Description</h2>
          <div className="teacher-info-grid">
            <div className="info-row">
              <span className="info-label">AREA</span>
              <span className="info-value">{selectedLand?.area || '2,500 m²'}</span>
            </div>
            <div className="info-row">
              <span className="info-label">VALUE</span>
              <span className="info-value">450 Sendos</span>
            </div>
          </div>
          <p className="teacher-description-text">
            This premium land plot is strategically located in the heart of the downtown district. The property offers excellent development potential with easy access to major transportation routes and commercial centers. The land features level terrain with existing utility connections including water, electricity, and sewage systems.
          </p>
        </div>

        <button className="auction-result-button" onClick={handleAuctionResult}>
          <span className="button-icon">🔨</span>
          Auction Result
        </button>
      </div>
    </>
  );

  // Render Confirm Auction View
  const renderConfirmAuction = () => (
    <>
      {/* Status Bar */}
      <div className="teacher-assets-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="teacher-assets-header">
        <button className="back-button" onClick={() => setCurrentView('landDetail')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Confirm Auction Content */}
      <div className="teacher-confirm-auction-content">
        <h1 className="page-title">Confirm Auction Result</h1>
        
        <div className="auction-info-section">
          <h3 className="section-label">Asset Name</h3>
          <p className="asset-name-display">{selectedLand?.name || 'Premium Land Plot - Zone A'}</p>
          
          <div className="student-selection">
            <h3 className="section-label">Student Name</h3>
            <select className="student-dropdown">
              <option>Select winning student...</option>
              <option>Alex Thompson</option>
              <option>Emma Wilson</option>
              <option>James Chen</option>
              <option>Sarah Martinez</option>
            </select>
            <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="price-input-section">
            <h3 className="section-label">Agreed Price</h3>
            <div className="price-input-wrapper">
              <input 
                type="text" 
                className="price-input" 
                placeholder="Enter final bid price"
              />
            </div>
          </div>
        </div>

        <button className="confirm-auction-button" onClick={handleConfirmAuction}>
          CONFIRM
        </button>
      </div>
    </>
  );

  return (
    <div className="teacher-assets">
      {currentView === 'auction' && renderAuctionList()}
      {currentView === 'landDetail' && renderLandDetail()}
      {currentView === 'confirmAuction' && renderConfirmAuction()}
      
      {/* Bottom Navigation */}
      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </div>
  );
};

export default TeacherAssets;