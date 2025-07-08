// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';
import ProfileCard from '../components/ProfileCard'; // Will create this next
import Header from '../components/Header'; // For the top bar

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const users = await fetchUsers();
        if (users && users.length > 0) {
          setUser(users[0]); // Use the first record
        } else {
          setError("No user data found.");
        }
      } catch (err) {
        setError("Failed to load user data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user profile to display.</div>;

  return (
    <div className="profile-page-container">
      <Header username={user.name} /> {/* Pass user name to Header */}
      <div className="profile-content">
        <button onClick={() => navigate('/dashboard')} className="back-button">
          ← Welcome, {user.name}
        </button>
        <ProfileCard user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;