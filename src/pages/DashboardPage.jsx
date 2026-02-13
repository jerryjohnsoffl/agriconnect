import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">🌾 Farm-to-Market</h1>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome!</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <Package className="w-10 h-10 text-green-600" />
              <span className="text-3xl font-bold text-gray-800">12</span>
            </div>
            <h3 className="text-gray-600 font-semibold">Active Listings</h3>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <ShoppingCart className="w-10 h-10 text-blue-600" />
              <span className="text-3xl font-bold text-gray-800">8</span>
            </div>
            <h3 className="text-gray-600 font-semibold">Pending Requests</h3>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-10 h-10 text-purple-600" />
              <span className="text-3xl font-bold text-gray-800">$2,450</span>
            </div>
            <h3 className="text-gray-600 font-semibold">Total Value</h3>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Link to="/farmer" className="card hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Farmer Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Manage your products, view matches, and track sales
            </p>
            <span className="text-green-600 font-semibold">Go to Farmer Portal →</span>
          </Link>

          <Link to="/buyer" className="card hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Buyer Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Browse products, create requests, and manage purchases
            </p>
            <span className="text-blue-600 font-semibold">Go to Buyer Portal →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;