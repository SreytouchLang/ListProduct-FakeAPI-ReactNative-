import React, { useEffect, useState } from 'react';

// 1. Define allowed status values as a TypeScript union type
type OrderStatus = 'pending' | 'in-progress' | 'completed';

// 2. Define the shape of an Order object
type Order = {
  id: number;
  customerName: string;
  status: OrderStatus;
  timestamp: number;
};

// 3. Mock order data to simulate fetching from an API
const mockOrders: Order[] = [
  { id: 1, customerName: 'Alice', status: 'pending', timestamp: 1722208320000 },
  { id: 2, customerName: 'Bob', status: 'in-progress', timestamp: 1722211920000 },
  { id: 3, customerName: 'Charlie', status: 'completed', timestamp: 1722197520000 },
];

// 4. The main component
const OrderTable: React.FC = () => {
  // State for the full list of orders
  const [orders, setOrders] = useState<Order[]>([]);

  // State for filter selection (e.g., all, pending, completed)
  const [filter, setFilter] = useState<OrderStatus | 'all'>('all');

  // 5. Simulate API fetch on component mount
  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setOrders(mockOrders);
    }, 500);
  }, []);

  // 6. Compute filtered and sorted orders
  const filteredOrders = orders
    .filter(order => filter === 'all' || order.status === filter)
    .sort((a, b) => b.timestamp - a.timestamp); // Newest first

  // 7. Function to update an order's status to 'completed'
  const markAsCompleted = (id: number) => {
    const updated = orders.map(order =>
      order.id === id ? { ...order, status: 'completed' } : order
    );
    setOrders(updated);
  };

  // 8. Render component
  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>📦 Order Dashboard</h2>

      {/* Filter dropdown */}
      <label htmlFor="status-filter">Filter by status: </label>
      <select
        id="status-filter"
        value={filter}
        onChange={e => setFilter(e.target.value as OrderStatus | 'all')}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Order Table */}
      <table
        border={1}
        cellPadding={8}
        style={{ marginTop: '1rem', width: '100%', borderCollapse: 'collapse' }}
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
                {/* Only show 'Mark as Completed' if not already completed */}
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

      {/* No results message */}
      {filteredOrders.length === 0 && <p>No orders found for this filter.</p>}
    </div>
  );
};

export default OrderTable;
