import React, { useState } from 'react';
import './App.css';

const TeacherAssets = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('assets'); // 'assets', 'assetDetail', 'confirmPurchase'
  const [selectedAsset, setSelectedAsset] = useState(null);

  // Mock assets data based on Figma design
  const assetsData = {
    totalAssets: 3,
    totalValue: 13300,
    assets: [
      {
        id: 1,
        name: 'Downtown Residential Plot #A127',
        type: 'Residential',
        area: '2,500 m²',
        price: 3200,
        acquisitionDate: 'Jan 15, 2025',
        acquisitionCost: 3200,
        status: 'Active',
        image: '🏢',
        description: 'Prime residential plot located in the heart of downtown. Perfect for high-end residential development.',
        features: ['Prime Location', 'High ROI Potential', 'Development Ready']
      },
      {
        id: 2,
        name: 'Business District Plot #B508',
        type: 'Commercial',
        area: '1,800 m²',
        price: 5800,
        acquisitionDate: 'Dec 22, 2024',
        acquisitionCost: 5800,
        status: 'Active',
        image: '🏬',
        description: 'Commercial plot in the bustling business district with excellent connectivity and growth potential.',
        features: ['Business District', 'High Traffic', 'Metro Access']
      },
      {
        id: 3,
        name: 'Storage Facility Unit #H445',
        type: 'Industrial',
        area: '1,200 m²',
        price: 4300,
        acquisitionDate: 'Oct 30, 2024',
        acquisitionCost: 4300,
        status: 'Active',
        image: '🏭',
        description: 'Industrial storage facility with modern infrastructure and excellent logistics connectivity.',
        features: ['Modern Infrastructure', 'Logistics Hub', 'Expandable']
      }
    ]
  };

  // Available assets for purchase
  const marketplaceAssets = [
    {
      id: 4,
      name: 'Premium Land Plot A1',
      type: 'Premium',
      area: '3,500 m²',
      price: 8500,
      image: '🏘️',
      description: 'Exclusive premium land plot in the city\'s most sought-after location.',
      features: ['Premium Location', 'Investment Grade', 'High Appreciation']
    },
    {
      id: 5,
      name: 'Garden View Estate B2',
      type: 'Residential',
      area: '1,800 m²',
      price: 4300,
      image: '🌳',
      description: 'Beautiful estate with garden views and peaceful surroundings.',
      features: ['Garden Views', 'Peaceful Location', 'Family Friendly']
    },
    {
      id: 6,
      name: 'Urban Development Zone',
      type: 'Mixed Use',
      area: '2,200 m²',
      price: 6800,
      image: '🏗️',
      description: 'Mixed-use development zone with commercial and residential potential.',
      features: ['Mixed Use', 'Development Zone', 'High Growth']
    }
  ];

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
    setCurrentView('assetDetail');
  };

  const handlePurchaseClick = (asset) => {
    setSelectedAsset(asset);
    setCurrentView('confirmPurchase');
  };

  const handleConfirmPurchase = () => {
    console.log('Purchase confirmed for:', selectedAsset);
    alert(`Successfully purchased ${selectedAsset.name}!`);
    setCurrentView('assets');
    setSelectedAsset(null);
  };

  const handleBackClick = () => {
    if (currentView === 'assets') {
      onBack();
    } else {
      setCurrentView('assets');
      setSelectedAsset(null);
    }
  };

  // Render My Assets View
  const renderMyAssets = () => (
    <div className="assets-scroll-content">
      {/* Assets Summary */}
      <div className="assets-summary">
        <h2 className="assets-title">My Assets</h2>
        <div className="assets-stats">
          <div className="stat-item">
            <div className="stat-label">Total Assets</div>
            <div className="stat-value">{assetsData.totalAssets}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Total Value</div>
            <div className="stat-value">{assetsData.totalValue.toLocaleString()} ₿</div>
          </div>
        </div>
        <button 
          className="marketplace-button"
          onClick={() => setCurrentView('marketplace')}
        >
          Browse Marketplace
        </button>
      </div>

      {/* Assets List */}
      <div className="assets-list">
        {assetsData.assets.map((asset) => (
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
                <span className="asset-status">{asset.status}</span>
              </div>
              <div className="asset-dates">
                <div className="asset-date">Acquisition Date: {asset.acquisitionDate}</div>
                <div className="asset-cost">Acquisition Cost: {asset.acquisitionCost.toLocaleString()} ₿</div>
              </div>
            </div>
            <div className="asset-value">
              <div className="current-value">{asset.price.toLocaleString()} ₿</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Marketplace View
  const renderMarketplace = () => (
    <div className="assets-scroll-content">
      <div className="marketplace-header">
        <h2 className="assets-title">Assets for you</h2>
      </div>
      
      <div className="marketplace-grid">
        {marketplaceAssets.map((asset) => (
          <div 
            key={asset.id}
            className="marketplace-item"
            onClick={() => handleAssetClick(asset)}
          >
            <div className="marketplace-image">
              <span className="marketplace-icon">{asset.image}</span>
            </div>
            <div className="marketplace-details">
              <div className="marketplace-name">{asset.name}</div>
              <div className="marketplace-area">{asset.area}</div>
              <div className="marketplace-cost-label">Acquisition Cost</div>
              <div className="marketplace-price">{asset.price.toLocaleString()} ₿</div>
              <button 
                className="purchase-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePurchaseClick(asset);
                }}
              >
                Purchase Asset
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Asset Detail View
  const renderAssetDetail = () => (
    <div className="assets-scroll-content">
      <div className="asset-detail-header">
        <h2 className="assets-title">{selectedAsset.name}</h2>
        <div className="asset-detail-meta">{selectedAsset.type} • {selectedAsset.area}</div>
      </div>

      <div className="asset-detail-image">
        <span className="detail-icon">{selectedAsset.image}</span>
      </div>

      <div className="asset-detail-info">
        <div className="detail-section">
          <h3>Asset Details</h3>
          <div className="detail-specs">
            <div className="spec-item">
              <div className="spec-label">Area</div>
              <div className="spec-value">{selectedAsset.area}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Type</div>
              <div className="spec-value">{selectedAsset.type}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Price</div>
              <div className="spec-value">{selectedAsset.price.toLocaleString()} ₿</div>
            </div>
          </div>
          
          <div className="detail-description">
            {selectedAsset.description}
          </div>

          {selectedAsset.features && (
            <div className="asset-features">
              <h4>Key Features</h4>
              <ul>
                {selectedAsset.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {!assetsData.assets.find(a => a.id === selectedAsset.id) && (
            <button 
              className="purchase-asset-button"
              onClick={() => handlePurchaseClick(selectedAsset)}
            >
              Purchase Asset
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Render Confirm Purchase View
  const renderConfirmPurchase = () => (
    <div className="assets-scroll-content">
      <div className="payment-header">
        <h2 className="assets-title">Confirm Action</h2>
      </div>

      <div className="payment-details">
        <div className="payment-item-info">
          <div className="payment-item-name">{selectedAsset.name}</div>
          <div className="payment-agreed-price">Agreed Price: {selectedAsset.price.toLocaleString()} ₿</div>
        </div>

        <div className="transaction-details">
          <h3>Transaction Details</h3>
          <div className="transaction-row">
            <span>Asset Name</span>
            <span>{selectedAsset.name}</span>
          </div>
          <div className="transaction-row">
            <span>Type</span>
            <span>{selectedAsset.type}</span>
          </div>
          <div className="transaction-row">
            <span>Area</span>
            <span>{selectedAsset.area}</span>
          </div>
          <div className="transaction-row">
            <span>Unit Price</span>
            <span>{selectedAsset.price.toLocaleString()} ₿</span>
          </div>
          <div className="transaction-row">
            <span>Processing Fee</span>
            <span>50 ₿</span>
          </div>
          <div className="transaction-total">
            <span>Total Amount</span>
            <span>{(selectedAsset.price + 50).toLocaleString()} ₿</span>
          </div>
        </div>

        <button 
          className="confirm-button"
          onClick={handleConfirmPurchase}
        >
          CONFIRM PURCHASE
        </button>
      </div>
    </div>
  );

  const getCurrentContent = () => {
    switch (currentView) {
      case 'assets':
        return renderMyAssets();
      case 'marketplace':
        return renderMarketplace();
      case 'assetDetail':
        return renderAssetDetail();
      case 'confirmPurchase':
        return renderConfirmPurchase();
      default:
        return renderMyAssets();
    }
  };

  const getHeaderTitle = () => {
    switch (currentView) {
      case 'marketplace':
        return 'Assets for you';
      case 'assetDetail':
        return selectedAsset?.name || 'Asset Details';
      case 'confirmPurchase':
        return 'Confirm Purchase';
      default:
        return 'My Assets';
    }
  };

  return (
    <div className="teacher-assets-container">
      {/* Header */}
      <div className="assets-header">
        <button className="back-button" onClick={handleBackClick}>
          <span>←</span>
        </button>
        <h1 className="header-title">{getHeaderTitle()}</h1>
      </div>

      {/* Scrollable Content */}
      <div className="assets-content">
        {getCurrentContent()}
      </div>
    </div>
  );
};

export default TeacherAssets;