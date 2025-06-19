import React, { useState } from 'react';
import './DashboardStyle.css'; // Import your CSS file

const OrdersPage = () => {
  // Set the initial active tab state
  const [activeTab, setActiveTab] = useState('requested');

  // Function to handle tab click
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
        <a href="contact.html" className="contact-link">
          Need Help! Contact Us
        </a>
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
              className={`tab-button ${activeTab === 'requested' ? 'active' : ''}`}
              onClick={() => handleTabClick('requested')}
            >
              Requested
            </button>
            <button
              className={`tab-button ${activeTab === 'approved' ? 'active' : ''}`}
              onClick={() => handleTabClick('approved')}
            >
              Approved
            </button>
            <button
              className={`tab-button ${activeTab === 'return-awaiting' ? 'active' : ''}`}
              onClick={() => handleTabClick('return-awaiting')}
            >
              Return Awaited
            </button>
            <button
              className={`tab-button ${activeTab === 'return-received' ? 'active' : ''}`}
              onClick={() => handleTabClick('return-received')}
            >
              Return Received
            </button>
            <button
              className={`tab-button ${activeTab === 'process-completed' ? 'active' : ''}`}
              onClick={() => handleTabClick('process-completed')}
            >
              Process Completed
            </button>
            <button
              className={`tab-button ${activeTab === 'all-orders' ? 'active' : ''}`}
              onClick={() => handleTabClick('all-orders')}
            >
              All
            </button>
          </div>
          <div id="tab-content">
            <div id="requested" className={`tab ${activeTab === 'requested' ? 'active' : ''}`}>
              <p>No orders found.</p>
            </div>
            <div id="approved" className={`tab ${activeTab === 'approved' ? 'active' : ''}`}>
              <p>No orders found.</p>
            </div>
            <div
              id="return-awaiting"
              className={`tab ${activeTab === 'return-awaiting' ? 'active' : ''}`}
            >
              <p>No new orders found.</p>
            </div>
            <div
              id="return-received"
              className={`tab ${activeTab === 'return-received' ? 'active' : ''}`}
            >
              <p>No process orders found.</p>
            </div>
            <div
              id="process-completed"
              className={`tab ${activeTab === 'process-completed' ? 'active' : ''}`}
            >
              <p>No tracking data available.</p>
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

export default OrdersPage;
