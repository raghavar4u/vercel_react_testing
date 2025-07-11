// src/App.js
import React, { useState } from 'react';

function App() {
  const metrics = [
    { label: 'VPN Counts', value: '4,120' },
    { label: 'AD-DNS Counts', value: '12,450' },
    { label: 'Current Messages Pushed (last min)', value: '25,000' },
    { label: 'Current Consumer Lag (seconds)', value: '3s' },
    { label: 'Total Indexed Documents', value: '1.2 Billion' },
    { label: 'Indexing Lag (minutes)', value: '5' },
  ];

  const incidents = [
    { ID: 'INC001', Severity: 'High', Status: 'Investigating', Assignee: 'Alice' },
    { ID: 'INC002', Severity: 'Medium', Status: 'Resolved', Assignee: 'Bob' },
  ];

  const messages = {
    anomaly: 'Anomaly detected at point 5!',
    root: 'Root cause analysis placeholder.',
    journey: 'User journey visualization is simplified for performance.',
    auto: "Rule 1: If severity is 'High' assign to 'Team A'",
    suggestion: 'Issue suggestions placeholder.'
  };

  const [input, setInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();
    setChatResponse(`Echo: ${input}`);
    setInput('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Monitoring Dashboard (Static)</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '12px', margin: '8px', borderRadius: '6px' }}>
            <h4>{m.label}</h4>
            <p><strong>{m.value}</strong></p>
          </div>
        ))}
      </div>

      <h2>Incidents</h2>
      <table border="1" cellPadding="10" style={{ width: '100%' }}>
        <thead>
          <tr><th>ID</th><th>Severity</th><th>Status</th><th>Assignee</th></tr>
        </thead>
        <tbody>
          {incidents.map((inc) => (
            <tr key={inc.ID}>
              <td>{inc.ID}</td>
              <td>{inc.Severity}</td>
              <td>{inc.Status}</td>
              <td>{inc.Assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>System Messages</h2>
      <ul>
        <li><strong>Anomaly:</strong> {messages.anomaly}</li>
        <li><strong>Root Cause:</strong> {messages.root}</li>
        <li><strong>User Journey:</strong> {messages.journey}</li>
        <li><strong>Auto Assignment:</strong> {messages.auto}</li>
        <li><strong>Suggestions:</strong> {messages.suggestion}</li>
      </ul>

      <h2>Agentic AI Chatbot (Static)</h2>
      <form onSubmit={handleChatSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
        <button type="submit">Send</button>
      </form>
      {chatResponse && <p><strong>Response:</strong> {chatResponse}</p>}
    </div>
  );
}

export default App;
