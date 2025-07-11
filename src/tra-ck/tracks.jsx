import React, { useState, useEffect } from 'react';
import api from '../api';

const TrackPage = () => {
  const [activeTab, setActiveTab] = useState('track-orders');
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    order_id: '',
    tracking_id: '',
    status: 'Shipped',
    current_location: '',
  });

  const fetchMockOrders = async () => {
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
      console.error(err);
      setError('Failed to fetch mock orders');
    }
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();
    try {
      await api.post('track/add-order/', formData);
      alert('Order added successfully');
      setFormData({
        order_id: '',
        tracking_id: '',
        status: 'Shipped',
        current_location: '',
      });
      fetchMockOrders(); // Refresh data
    } catch (err) {
      console.error(err);
      alert('Failed to add order');
    }
  };

  useEffect(() => {
    fetchMockOrders();
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setError('');
  };

  return (
    <div className="page-container">
      <div className="tabs">
        <button onClick={() => handleTabClick('new-orders')}>New Orders</button>
        <button onClick={() => handleTabClick('process-orders')}>Process Orders</button>
        <button onClick={() => handleTabClick('track-orders')}>Track</button>
        <button onClick={() => handleTabClick('all-orders')}>All Orders</button>
      </div>

      <div className="tab-content">
        {activeTab === 'new-orders' && (
          <div>
            <h2>Add New Order</h2>
            <form onSubmit={handleAddOrder}>
              <input
                type="text"
                placeholder="Order ID"
                value={formData.order_id}
                onChange={(e) => setFormData({ ...formData, order_id: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Tracking ID"
                value={formData.tracking_id}
                onChange={(e) => setFormData({ ...formData, tracking_id: e.target.value })}
                required
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              <input
                type="text"
                placeholder="Current Location"
                value={formData.current_location}
                onChange={(e) => setFormData({ ...formData, current_location: e.target.value })}
                required
              />
              <button type="submit">Add Order</button>
            </form>
            <hr />
            <h3>Recent New Orders</h3>
          </div>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {orders.length === 0 ? (
          <p>No data found for this section.</p>
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
  );
};

export default TrackPage;
