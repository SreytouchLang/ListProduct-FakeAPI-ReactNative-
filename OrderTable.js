import React, { useEffect, useState } from 'react';

// 1. Mock order data (simulating API response)
const mockOrders = [
  { id: 1, customerName: 'Alice', status: 'pending', timestamp: 1722208320000 },
  { id: 2, customerName: 'Bob', status: 'in-progress', timestamp: 1722211920000 },
  { id: 3, customerName: 'Charlie', status: 'completed', timestamp: 1722197520000 },
];

const OrderTable = () => {
  // 2. State for the list of orders
  const [orders, setOrders] = useState([]);

  // 3. State for the selected filter (default: "all")
  const [filter, setFilter] = useState('all');

  // 4. Simulate fetching orders on component mount
  useEffect(() => {
    setTimeout(() => {
      setOrders(mockOrders);
    }, 500); // fake delay
  }, []);

  // 5. Compute the filtered and sorted orders
  const filteredOrders = orders
    .filter(order => filter === 'all' || order.status === filter)
    .sort((a, b) => b.timestamp - a.timestamp); // sort by latest timestamp

  // 6. Handler to mark an order as completed
  const markAsCompleted = (id) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status: 'completed' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>📦 Order Dashboard</h2>

      {/* 7. Filter dropdown */}
      <label htmlFor="filter">Filter by status: </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginLeft: '0.5rem' }}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* 8. Orders table */}
      <table
        border="1"
        cellPadding="8"
        style={{
          marginTop: '1rem',
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.status}</td>
              <td>{new Date(order.timestamp).toLocaleString()}</td>
              <td>
                {order.status !== 'completed' && (
                  <button onClick={() => markAsCompleted(order.id)}>
                    Mark as Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 9. No orders message */}
      {filteredOrders.length === 0 && (
        <p style={{ marginTop: '1rem' }}>No orders found for this filter.</p>
      )}
    </div>
  );
};

export default OrderTable;
