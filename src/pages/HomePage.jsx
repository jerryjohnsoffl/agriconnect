import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingCart } from 'lucide-react';

const HomePage = () => {
  return (
    {/* <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🌾 Farm-to-Market
          </h1>
          <p className="text-xl text-gray-600">
            Smart agricultural supply chain optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <Link 
            to="/register?role=farmer"
            className="card hover:shadow-xl transition-shadow"
          >
            <Leaf className="w-16 h-16 text-green-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">I'm a Farmer</h3>
            <p className="text-gray-600">
              List your produce, get AI-powered pricing, and connect with buyers directly
            </p>
          </Link>

          <Link 
            to="/register?role=buyer"
            className="card hover:shadow-xl transition-shadow"
          >
            <ShoppingCart className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">I'm a Buyer</h3>
            <p className="text-gray-600">
              Browse fresh produce, get smart matches, and source directly from farmers
            </p>
          </Link>
        </div>

        <div className="text-center">
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
            Already have an account? Sign in →
          </Link>
        </div>
      </div>
    </div> */
        <div >Hi</div>
    }
  );
};

export default HomePage;