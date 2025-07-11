import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardStyle.css'; // Make sure this points to your updated CSS

function OrdersPage() {
  const [activeTab, setActiveTab] = useState('new-orders');
  const [showKYC, setShowKYC] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (showKYC) {
      alert("Your KYC is not approved");
      setShowKYC(false);
    }
  }, [showKYC]);

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="page-container">
      {/* Top Navbar */}
      <nav className="top-nav">
        <div className="logo">ParcelMitra</div>
        <div className="search-container">
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
        <div className="icons">
                    <a href="contact.html" className="contact-link">Need Help! Contact Us</a>
          <span className="notification-icon">🔔</span>
          <div className="profile-dropdown">
            <div className="profile-icon">M</div>
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a
                href="#"
                onClick={() => {
                  localStorage.removeItem('accessToken');
                  localStorage.removeItem('refreshToken');
                  alert('Logged out successfully!');
                  navigate('/login');
                }}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="secondary-nav">
        <ul>
          <li><Link to="/">🏠</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li className="has-dropdown">
            <Link to="#">Orders</Link>
            <div className="dropdown">
              <Link to="/edit">View Orders</Link>
              <Link to="/bulk-orders">Bulk Orders Import</Link>
              <Link to="/on-hold">On Hold Orders</Link>
              <Link to="/unfulfilled">Unfulfilled Orders</Link>
              <Link to="/unpushed">Unpushed Orders</Link>
              <Link to="/bulk-invoice">Bulk Invoice</Link>
            </div>
          </li>
          <li className="has-dropdown">
            <Link to="#">Returns</Link>
            <div className="dropdown">
              <Link to="/view-returns">View Returns</Link>
              <Link to="/pickup-failed">Pickup Failed Report</Link>
              <Link to="/refunds">Refunds</Link>
            </div>
          </li>
          <li className="has-dropdown">
            <Link to="#">Wallet</Link>
            <div className="dropdown">
              <Link to="/recharge">Wallet Recharge</Link>
              <Link to="/kyc">KYC</Link>
              <Link to="/billing">Billing</Link>
              <Link to="/ratecard">Rate Card</Link>
              <Link to="/courier">Manage Courier</Link>
              <Link to="/warehouse">Manage Warehouse</Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main id="content">
        <div id="orders-section">
          {/* KYC Notification */}
          {showKYC && (
            <div className="kyc-notification">
              <p>Your KYC is not approved. <Link to="/blank">Click here</Link> to update your KYC details.</p>
            </div>
          )}

          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'new-orders' ? 'active' : ''}`}
              onClick={() => showTab('new-orders')}
            >
              New Orders
            </button>
            <button
              className={`tab-button ${activeTab === 'process-orders' ? 'active' : ''}`}
              onClick={() => showTab('process-orders')}
            >
              Process Orders
            </button>
            <button
              className={`tab-button ${activeTab === 'track-orders' ? 'active' : ''}`}
              onClick={() => showTab('track-orders')}
            >
              Track
            </button>
            <button
              className={`tab-button ${activeTab === 'all-orders' ? 'active' : ''}`}
              onClick={() => showTab('all-orders')}
            >
              All Orders
            </button>
          </div>

          {/* Tab Content */}
          <div id="tab-content">
            <div id="new-orders" className={`tab ${activeTab === 'new-orders' ? 'active' : ''}`}>
              <p>No new orders found.</p>
            </div>
            <div id="process-orders" className={`tab ${activeTab === 'process-orders' ? 'active' : ''}`}>
              <p>No process orders found.</p>
            </div>
            <div id="track-orders" className={`tab ${activeTab === 'track-orders' ? 'active' : ''}`}>
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
}

export default OrdersPage;
