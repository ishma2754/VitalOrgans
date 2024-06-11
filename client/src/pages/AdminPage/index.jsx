import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

export default function AdminFetchUser() {
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [cookies] = useCookies(['AuthToken']);

  const handleFetch = async () => {
    setError(null);
    setUserData(null);

    const token = cookies.AuthToken;

    if (!token) {
      setError('You are not authenticated.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/AdminPage/${userEmail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data);
      } else {
        setError(data.error || 'An error occurred while fetching user data.');
      }
    } catch (err) {
      setError('An error occurred while fetching user data.');
    }
  };

  return (
    <div className="admin-fetch-user">
      <h2>Fetch User Data</h2>
      <input
        type="email"
        placeholder="Enter user email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch Data</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <h3>User Data:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
