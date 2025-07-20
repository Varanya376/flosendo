import React, { useState } from 'react';

const StudentAssets = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('myAssets'); // 'myAssets', 'marketplace', 'assetDetail', 'payment'
  const [selectedAsset, setSelectedAsset] = useState(null);

  // Mock user assets data
  const userAssets = [
    {
      id: 1,
      name: 'Downtown Residential Plot #A177',
      type: 'Residential',
      acquisitionDate: 'Jan 15, 2025',
      acquisitionCost: '3,200 ₿',
      currentValue: '3,500 ₿',
      image: '🏘️',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Business District Plot #B089',
      type: 'Commercial',
      acquisitionDate: 'Dec 22, 2024',
      acquisitionCost: '5,800 ₿',
      currentValue: '6,100 ₿',
      image: '🏢',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Storage Facility Unit #W45',
      type: 'Storage',
      acquisitionDate: 'Oct 30, 2024',
      acquisitionCost: '4,200 ₿',
      currentValue: '4,350 ₿',
      image: '🏭',
      status: 'Active'
    }
  ];

  // Mock marketplace assets
  const marketplaceAssets = [
    {
      id: 4,
      name: 'Premium Land Plot A1',
      area: '1,500 m²',
      price: '3,200 ₿',
      image: '🏗️',
      category: 'Premium',
      acquisitionCost: '3,200 ₿'
    },
    {
      id: 5,
      name: 'Garden View Estate B2',
      area: '1,800 m²',
      price: '4,300 ₿',
      image: '🌳',
      category: 'Estate',
      acquisitionCost: '4,300 ₿'
    },
    {
      id: 6,
      name: 'Urban Development',
      area: '1,200 m²',
      price: '1,900 ₿',
      image: '🏙️',
      category: 'Urban',
      acquisitionCost: '1,900 ₿'
    }
  ];

  const totalAssets = userAssets.length;
  const totalValue = userAssets.reduce((sum, asset) => {
    return sum + parseInt(asset.currentValue.replace(/[,₿\s]/g, ''));
  }, 0);

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
    setCurrentView('assetDetail');
  };

  const handlePurchaseClick = (asset) => {
    setSelectedAsset(asset);
    setCurrentView('payment');
  };

  const handleConfirmPurchase = () => {
    alert('Asset purchased successfully!');
    setCurrentView('myAssets');
  };

  // My Assets View
  const renderMyAssets = () => (
    <div className="assets-scroll-content">
      <div className="assets-summary">
        <h2 className="assets-title">My Assets</h2>
        <div className="assets-stats">
          <div className="stat-item">
            <div className="stat-label">Total Assets</div>
            <div className="stat-value">{totalAssets}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Total Value</div>
            <div className="stat-value">{totalValue.toLocaleString()} ₿</div>
          </div>
        </div>
        <button 
          className="marketplace-button"
          onClick={() => setCurrentView('marketplace')}
        >
          + Browse Marketplace
        </button>
      </div>

      <div className="assets-list">
        {userAssets.map((asset) => (
          <div 
            key={asset.id} 
            className="asset-item"
            onClick={() => handleAssetClick(asset)}
          >
            <div className="asset-image">
              <span className="asset-icon">{asset.image}</span>
            </div>
            <div className="asset-details">
              <div className="asset-name">{asset.name}</div>
              <div className="asset-meta">
                <span className="asset-type">{asset.type}</span>
                <span className="asset-status">• {asset.status}</span>
              </div>
              <div className="asset-dates">
                <div className="asset-date">Acquisition Date: {asset.acquisitionDate}</div>
                <div className="asset-cost">Acquisition Cost: {asset.acquisitionCost}</div>
              </div>
            </div>
            <div className="asset-value">
              <div className="current-value">{asset.currentValue}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Marketplace View
  const renderMarketplace = () => (
    <div className="assets-scroll-content">
      <div className="marketplace-header">
        <h2 className="assets-title">Assets for you</h2>
      </div>

      <div className="marketplace-grid">
        {marketplaceAssets.map((asset) => (
          <div key={asset.id} className="marketplace-item">
            <div className="marketplace-image">
              <span className="marketplace-icon">{asset.image}</span>
            </div>
            <div className="marketplace-details">
              <div className="marketplace-name">{asset.name}</div>
              <div className="marketplace-area">{asset.area}</div>
              <div className="marketplace-cost-label">Acquisition Cost</div>
              <div className="marketplace-price">{asset.price}</div>
              <button 
                className="purchase-button"
                onClick={() => handlePurchaseClick(asset)}
              >
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Asset Detail View
  const renderAssetDetail = () => (
    <div className="assets-scroll-content">
      <div className="asset-detail-header">
        <h2 className="assets-title">{selectedAsset?.name || 'Premium Land Plot'}</h2>
        <div className="asset-detail-meta">📍 Downtown District, Zone A</div>
      </div>

      <div className="asset-detail-image">
        <span className="detail-icon">🏗️</span>
      </div>

      <div className="asset-detail-info">
        <div className="detail-section">
          <h3>Description</h3>
          <div className="detail-specs">
            <div className="spec-item">
              <span className="spec-label">Area:</span>
              <span className="spec-value">2,500 m²</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Value:</span>
              <span className="spec-value">450 Sendos</span>
            </div>
          </div>
          <p className="detail-description">
            This premium land plot is strategically located in the heart of the downtown district. The property offers excellent potential for development with easy access to major transportation routes and commercial centers. The land features level terrain and existing utility connections including water, electricity, and sewage systems.
          </p>
        </div>

        {selectedAsset && !userAssets.includes(selectedAsset) && (
          <button 
            className="purchase-asset-button"
            onClick={() => handlePurchaseClick(selectedAsset)}
          >
            🛒 Purchase Asset
          </button>
        )}
      </div>
    </div>
  );

  // Payment View
  const renderPayment = () => (
    <div className="assets-scroll-content">
      <div className="payment-header">
        <h2 className="assets-title">Confirm Acquisition</h2>
      </div>

      <div className="payment-details">
        <div className="payment-item-info">
          <div className="payment-item-name">
            Asset Name: {selectedAsset?.name || 'Premium Land Plot - Zone A'}
          </div>
          <div className="payment-agreed-price">
            Agreed Price: {selectedAsset?.price || selectedAsset?.acquisitionCost || '(---)'}
          </div>
        </div>

        <div className="transaction-details">
          <h3>Transaction Details</h3>
          <div className="transaction-row">
            <span>Type:</span>
            <span>Land Purchase</span>
          </div>
          <div className="transaction-row">
            <span>Date:</span>
            <span>Jan 15, 2025</span>
          </div>
          <div className="transaction-row">
            <span>Size:</span>
            <span>100 sq units</span>
          </div>
          <div className="transaction-total">
            <span>Total Amount:</span>
            <span>150 Sendos</span>
          </div>
        </div>

        <button 
          className="confirm-button"
          onClick={handleConfirmPurchase}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );

  const getCurrentContent = () => {
    switch (currentView) {
      case 'myAssets':
        return renderMyAssets();
      case 'marketplace':
        return renderMarketplace();
      case 'assetDetail':
        return renderAssetDetail();
      case 'payment':
        return renderPayment();
      default:
        return renderMyAssets();
    }
  };

  return (
    <div className="student-assets-container">
      {/* Header */}
      <div className="assets-header">
        <button 
          className="back-button" 
          onClick={() => {
            if (currentView === 'myAssets') {
              onBack();
            } else {
              setCurrentView('myAssets');
            }
          }}
        >
          ←
        </button>
        {currentView === 'marketplace' && (
          <span className="header-title">Marketplace</span>
        )}
        {currentView === 'assetDetail' && (
          <span className="header-title">Asset Details</span>
        )}
        {currentView === 'payment' && (
          <span className="header-title">Purchase</span>
        )}
      </div>

      {/* Scrollable Content */}
      <div className="assets-content">
        {getCurrentContent()}
      </div>
    </div>
  );
};

export default StudentAssets;