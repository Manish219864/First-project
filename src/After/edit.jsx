import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import './Edit.css';

function OrdersPage() {
  const [activeTab, setActiveTab] = useState('new-orders');
  const [showKYC, setShowKYC] = useState(true);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    order_id: '',
    tracking_id: '',
    status: 'Shipped',
    current_location: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (showKYC) {
      alert("Your KYC is not approved");
      setShowKYC(false);
    }
  }, [showKYC]);

  useEffect(() => {
    fetchOrders();
  }, [activeTab]);

  const showTab = (tabId) => {
    setActiveTab(tabId);
    setError('');
  };

  const fetchOrders = async () => {
    try {
      const response = await api.get('track/mock-orders/');
      const data = response.data;
      switch (activeTab) {
        case 'new-orders':
          setOrders(data.new_orders || []);
          break;
        case 'process-orders':
          setOrders(data.process_orders || []);
          break;
        case 'track-orders':
          setOrders(data.track_orders || []);
          break;
        case 'all-orders':
          setOrders(data.all_orders || []);
          break;
        default:
          setOrders([]);
      }
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();
    try {
      await api.post('track/mock-orders/', formData);
      console.log("Order POST sent"); //  Corrected endpoint
      alert('Order added!');
      setFormData({
        order_id: '',
        tracking_id: '',
        status: 'Shipped',
        current_location: ''
      });
      fetchOrders(); // Refresh list
    } catch (err) {
      alert('Failed to add order');
    }
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
          <a href="contact.jsx" className="contact-link">Need Help! Contact Us</a>
          <span className="notification-icon">🔔</span>
          <div className="profile-dropdown">
            <div className="profile-icon">M</div>
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#" onClick={() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                alert('Logged out successfully!');
                navigate('/login');
              }}>Logout</a>
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
          {/* Tabs */}
          <div className="tabs">
            <button className={`tab-button ${activeTab === 'new-orders' ? 'active' : ''}`} onClick={() => showTab('new-orders')}>New Orders</button>
            <button className={`tab-button ${activeTab === 'process-orders' ? 'active' : ''}`} onClick={() => showTab('process-orders')}>Process Orders</button>
            <button className={`tab-button ${activeTab === 'track-orders' ? 'active' : ''}`} onClick={() => showTab('track-orders')}>Track</button>
            <button className={`tab-button ${activeTab === 'all-orders' ? 'active' : ''}`} onClick={() => showTab('all-orders')}>All Orders</button>
          </div>

          <div id="tab-content">
            {activeTab === 'new-orders' && (
              <div>
                <h3>Add New Order</h3>
                <form onSubmit={handleAddOrder}>
                  <input type="text" placeholder="Order ID" value={formData.order_id} onChange={(e) => setFormData({ ...formData, order_id: e.target.value })} required />
                  <input type="text" placeholder="Tracking ID" value={formData.tracking_id} onChange={(e) => setFormData({ ...formData, tracking_id: e.target.value })} required />
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                    <option>Shipped</option>
                    <option>Out for Delivery</option>
                    <option>Delivered</option>
                  </select>
                  <input type="text" placeholder="Current Location" value={formData.current_location} onChange={(e) => setFormData({ ...formData, current_location: e.target.value })} required />
                  <button type="submit">Add Order</button>
                </form>
                <hr />
              </div>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {orders.length === 0 ? (
              <p>No data available.</p>
            ) : (
              orders.map((order) => (
                <div key={order.tracking_id} className="tracking-item">
                  <p><strong>Order ID:</strong> {order.order_id}</p>
                  <p><strong>Tracking ID:</strong> {order.tracking_id}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                  <p><strong>Location:</strong> {order.current_location}</p>
                  <p><strong>Last Updated:</strong> {new Date(order.last_updated).toLocaleString()}</p>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrdersPage;
