import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';

const FarmerPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      crop: 'Tomatoes',
      quantity: 500,
      price: 2.5,
      quality: 'Premium',
      status: 'available'
    }
  ]);

  const [formData, setFormData] = useState({
    crop: '',
    quantity: '',
    price: '',
    quality: 'Good'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...formData,
      status: 'available'
    };
    setProducts([...products, newProduct]);
    setFormData({ crop: '', quantity: '', price: '', quality: 'Good' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">👨‍🌾 Farmer Portal</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Add Product Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add New Product
          </button>
        </div>

        {/* Add Product Form */}
        {showForm && (
          <div className="card mb-6">
            <h3 className="text-xl font-bold mb-4">List Your Produce</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Crop Name
                  </label>
                  <input
                    type="text"
                    value={formData.crop}
                    onChange={(e) => setFormData({...formData, crop: e.target.value})}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity (kg)
                  </label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price per kg ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quality
                  </label>
                  <select
                    value={formData.quality}
                    onChange={(e) => setFormData({...formData, quality: e.target.value})}
                    className="input-field"
                  >
                    <option value="Premium">Premium</option>
                    <option value="Good">Good</option>
                    <option value="Standard">Standard</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="submit" className="btn-primary">
                  List Product
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products List */}
        <div>
          <h3 className="text-xl font-bold mb-4">Your Products</h3>
          <div className="grid gap-4">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{product.crop}</h4>
                    <div className="text-sm text-gray-600 mt-2">
                      <p>Quantity: {product.quantity} kg</p>
                      <p>Price: ${product.price}/kg</p>
                      <p>Quality: {product.quality}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {product.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerPage;