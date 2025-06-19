import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Main/home';
import Signup from './Sign_up/signup';
import Login from './LOg-in/login';
import OrdersPage from './After/edit';
import TrackPage from './tra-ck/tracks';
import PrivateRoute from './PrivateRoute';

import Blogs from './Main/blogs';
import FeaturesPage from './Main/features';
import ResourcesPage from './Main/resources';

import AboutUs from './Rest/about';
import ContactUs from './Rest/contact';
import Profile from './Rest/profile';
import Blank from './Rest/blank';       // 🔁 Capitalized
import Imports from './Rest/imports';   // 🔁 Capitalized

// ✅ Dashboard Pages
import BillingPage from './Dash-board/billing';
import Orders from './Dash-board/bulk-invo';
import BulkPage from './Dash-board/bulk-ord';
import CourierPage from './Dash-board/courier';
import DashPage from './Dash-board/Dashboard';
import KYCPage from './Dash-board/kyc';
import OnHoldPage from './Dash-board/on-hold';
import PickupPage from './Dash-board/pickup';
import RatecardPage from './Dash-board/ratecard';
import RechargePage from './Dash-board/recharge';
import RefundPage from './Dash-board/refund';
import UnfulfilledPage from './Dash-board/unfulfilled';
import UnpushedPage from './Dash-board/unpushed';
import ViewPage from './Dash-board/view';
import WarehousePage from './Dash-board/warehouse';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tracks" element={<TrackPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/imports" element={<Imports />} />

        {/* Protected Routes */}
        <Route path="/edit" element={<PrivateRoute><OrdersPage /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><DashPage /></PrivateRoute>} />
        <Route path="/billing" element={<PrivateRoute><BillingPage /></PrivateRoute>} />
        <Route path="/bulk-invo" element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path="/bulk-ord" element={<PrivateRoute><BulkPage /></PrivateRoute>} />
        <Route path="/courier" element={<PrivateRoute><CourierPage /></PrivateRoute>} />
        <Route path="/kyc" element={<PrivateRoute><KYCPage /></PrivateRoute>} />
        <Route path="/on-hold" element={<PrivateRoute><OnHoldPage /></PrivateRoute>} />
        <Route path="/pickup" element={<PrivateRoute><PickupPage /></PrivateRoute>} />
        <Route path="/ratecard" element={<PrivateRoute><RatecardPage /></PrivateRoute>} />
        <Route path="/recharge" element={<PrivateRoute><RechargePage /></PrivateRoute>} />
        <Route path="/refund" element={<PrivateRoute><RefundPage /></PrivateRoute>} />
        <Route path="/unfulfilled" element={<PrivateRoute><UnfulfilledPage /></PrivateRoute>} />
        <Route path="/unpushed" element={<PrivateRoute><UnpushedPage /></PrivateRoute>} />
        <Route path="/view" element={<PrivateRoute><ViewPage /></PrivateRoute>} />
        <Route path="/warehouse" element={<PrivateRoute><WarehousePage /></PrivateRoute>} />

        {/* Fallback Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
