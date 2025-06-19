import React, { useState } from 'react';
import './Tracks.css';

const TrackPage = () => {
  const [activeTab, setActiveTab] = useState('new-orders');
  const [trackingId, setTrackingId] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setTrackingData(null); // Clear previous data
    setError('');
  };

  const handleTrack = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/track/${trackingId}`);
      const data = await response.json();
      if (!response.ok) {
        setTrackingData(null);
        setError(data.error || 'Failed to fetch tracking details');
      } else {
        setTrackingData(data);
        setError('');
      }
    } catch (err) {
      setTrackingData(null);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="page-container">
      {/* Top Navbar */}
      <nav className="top-nav">
        <div className="logo">Parcel Mitra</div>
        <div className="search-container">
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
        <a href="contact.html" className="contact-link">Need Help! Contact Us</a>
        <div className="icons">
          <span className="notification-icon">🔔</span>
          <div className="profile-dropdown">
            <div className="profile-icon">M</div>
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="secondary-nav">
        <ul>
          <li><a href="#home">🏠</a></li>
          <li><a href="Dashboard.html">Dashboard</a></li>
          <li className="has-dropdown">
            <a href="#orders">Orders</a>
            <div className="dropdown">
              <a href="edit.html">View Orders</a>
              <a href="#bulk-orders">Bulk Orders Import</a>
              <a href="#on-hold-orders">On Hold Orders</a>
              <a href="#unfulfilled-orders">Unfulfilled Orders</a>
              <a href="#unpushed-orders">Unpushed Orders</a>
              <a href="#bulk-invoice">Bulk Invoice</a>
            </div>
          </li>
          <li className="has-dropdown">
            <a href="#returns">Returns</a>
            <div className="dropdown">
              <a href="#view-returns">View Returns</a>
              <a href="#pickup-failed">Pickup Failed Report</a>
              <a href="#refunds">Refunds</a>
            </div>
          </li>
          <li className="has-dropdown">
            <a href="#wallet">Wallet</a>
            <div className="dropdown">
              <a href="#recharge">Wallet Recharge</a>
              <a href="#kyc">KYC</a>
              <a href="#billing">Billing</a>
              <a href="#rate-card">Rate Card</a>
              <a href="#manage-courier">Manage Courier</a>
              <a href="#manage-warehouse">Manage Warehouse</a>
            </div>
          </li>
          <li><a href="tracks.html">Track</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main id="content">
        <div id="orders-section">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'new-orders' ? 'active' : ''}`}
              onClick={() => handleTabClick('new-orders')}
            >
              New Orders
            </button>
            <button
              className={`tab-button ${activeTab === 'process-orders' ? 'active' : ''}`}
              onClick={() => handleTabClick('process-orders')}
            >
              Process Orders
            </button>
            <button
              className={`tab-button ${activeTab === 'track-orders' ? 'active' : ''}`}
              onClick={() => handleTabClick('track-orders')}
            >
              Track
            </button>
            <button
              className={`tab-button ${activeTab === 'all-orders' ? 'active' : ''}`}
              onClick={() => handleTabClick('all-orders')}
            >
              All Orders
            </button>
          </div>

          <div id="tab-content">
            {/* TRACK TAB */}
            <div id="track-orders" className={`tab ${activeTab === 'track-orders' ? 'active' : ''}`}>
              <h2>Track Your Shipment</h2>
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Tracking ID"
              />
              <button onClick={handleTrack}>Track</button>

              {error && <p style={{ color: 'red' }}>{error}</p>}

              {trackingData && (
                <div className="tracking-details">
                  <p><strong>Tracking ID:</strong> {trackingData.tracking_id}</p>
                  <p><strong>Order ID:</strong> {trackingData.order_id}</p>
                  <p><strong>Status:</strong> {trackingData.status}</p>
                  <p><strong>Current Location:</strong> {trackingData.current_location}</p>
                  <p><strong>Last Updated:</strong> {new Date(trackingData.last_updated).toLocaleString()}</p>
                </div>
              )}
            </div>

            {/* Other tabs */}
            <div id="new-orders" className={`tab ${activeTab === 'new-orders' ? 'active' : ''}`}>
              <p>No new orders found.</p>
            </div>
            <div id="process-orders" className={`tab ${activeTab === 'process-orders' ? 'active' : ''}`}>
              <p>No process orders found.</p>
            </div>
            <div id="all-orders" className={`tab ${activeTab === 'all-orders' ? 'active' : ''}`}>
              <p>No orders found.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackPage;
