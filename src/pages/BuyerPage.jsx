import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

const BuyerPage = () => {
  const [products] = useState([
    {
      id: 1,
      crop: 'Tomatoes',
      farmer: 'Green Valley Farm',
      quantity: 500,
      price: 2.5,
      quality: 'Premium',
      region: 'North Valley'
    },
    {
      id: 2,
      crop: 'Potatoes',
      farmer: 'Sunshine Acres',
      quantity: 800,
      price: 1.2,
      quality: 'Good',
      region: 'South Plains'
    },
    {
      id: 3,
      crop: 'Apples',
      farmer: 'Mountain Orchard',
      quantity: 300,
      price: 3.0,
      quality: 'Premium',
      region: 'East Hills'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.crop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">🛒 Buyer Portal</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h3 className="text-xl font-bold mb-4">Available Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-800">{product.crop}</h4>
                  <p className="text-sm text-gray-600">{product.farmer}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-semibold">{product.quantity} kg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-green-600">${product.price}/kg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quality:</span>
                    <span className="font-semibold">{product.quality}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{product.region}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-lg font-bold text-gray-800 mb-3">
                    Total: ${(product.quantity * product.price).toFixed(2)}
                  </div>
                  <button className="w-full btn-primary">
                    Request Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No products found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyerPage;