import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) return navigate('/login');

    fetch('http://localhost:5000/api/admin/messages', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, [navigate]);

  return (
    <div className="container py-20">
      <h2 className="section-title">Admin Dashboard</h2>
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={() => {
          localStorage.removeItem('adminToken');
          navigate('/login');
        }}
      >
        Logout
      </button>

      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg._id} className="border p-4 rounded">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <p className="text-sm text-gray-400">{new Date(msg.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
