import { useEffect, useState } from 'react';

export function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container py-20">
      <h2 className="section-title">Received Messages</h2>
      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg._id} className="cyber-card p-4">
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
