import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderTable = () => {
  // 1. State for orders, filter, loading, and error
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 2. Fetch orders from API
  const fetchOrders = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data); // Assuming API returns an array of orders
    } catch (err) {
      setError('Failed to fetch orders.');
    } finally {
      setLoading(false);
    }
  };

  // 3. Update order status via PATCH API call
  const markAsCompleted = async (id) => {
    try {
      await axios.patch(`/api/orders/${id}`, { status: 'completed' });
      const updated = orders.map(order =>
        order.id === id ? { ...order, status: 'completed' } : order
      );
      setOrders(updated);
    } catch (err) {
      alert('Failed to update order status.');
    }
  };

  // 4. Fetch data on mount
  useEffect(() => {
    fetchOrders();
  }, []);

  // 5. Filtered + sorted orders
  const filteredOrders = orders
    .filter(order => filter === 'all' || order.status === filter)
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      {/* 6. Heading */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📦 Order Dashboard</h2>

      {/* 7. Filter UI */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <label htmlFor="filter" className="text-sm font-medium text-gray-700">
          Filter by status:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* 8. Loading and error states */}
      {loading && <p className="text-sm text-gray-600">Loading orders...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* 9. Orders Table */}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-md shadow-sm">
            <thead className="bg-gray-100 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Timestamp</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.customerName}</td>
                  <td className="px-4 py-2 capitalize">{order.status}</td>
                  <td className="px-4 py-2">{new Date(order.timestamp).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    {order.status !== 'completed' && (
                      <button
                        onClick={() => markAsCompleted(order.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 10. No orders message */}
          {filteredOrders.length === 0 && (
            <p className="mt-4 text-sm text-gray-600">No orders found for this filter.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderTable;
