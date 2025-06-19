import React, { useState } from 'react';
import './DashboardStyle.css';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="top-nav">
        <div className="logo">Shipway</div>
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
        {/* Orders Section */}
        <div id="orders-section">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => handleTabClick('orders')}
            >
              Orders
            </button>
            <button
              className={`tab-button ${activeTab === 'returns' ? 'active' : ''}`}
              onClick={() => handleTabClick('returns')}
            >
              Returns
            </button>
            <button
              className={`tab-button ${activeTab === 'wallet' ? 'active' : ''}`}
              onClick={() => handleTabClick('wallet')}
            >
              Wallet
            </button>
            <button
              className={`tab-button ${activeTab === 'track' ? 'active' : ''}`}
              onClick={() => handleTabClick('track')}
            >
              Track
            </button>
          </div>

          <div id="tab-content">
            <div
              id="orders"
              className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
            >
              <p>Orders content goes here.</p>
            </div>
            <div
              id="returns"
              className={`tab ${activeTab === 'returns' ? 'active' : ''}`}
            >
              <p>Returns content goes here.</p>
            </div>
            <div
              id="wallet"
              className={`tab ${activeTab === 'wallet' ? 'active' : ''}`}
            >
              <p>Wallet content goes here.</p>
            </div>
            <div
              id="track"
              className={`tab ${activeTab === 'track' ? 'active' : ''}`}
            >
              <p>Tracking content goes here.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
