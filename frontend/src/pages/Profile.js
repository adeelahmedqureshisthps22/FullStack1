import React, { useState, useEffect } from 'react';
import '../assets/styles/pages.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-page">
      <div className="container">
        <h1>My Profile</h1>

        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.username} />
              ) : (
                <div className="avatar-placeholder">
                  {user.username.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="profile-info">
              <h2>{user.firstName} {user.lastName}</h2>
              <p>@{user.username}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <label>Email:</label>
              <span>{user.email}</span>
            </div>
            <div className="detail-row">
              <label>Role:</label>
              <span>{user.role}</span>
            </div>
            <div className="detail-row">
              <label>Status:</label>
              <span>{user.isActive ? 'Active' : 'Inactive'}</span>
            </div>
            <div className="detail-row">
              <label>Member Since:</label>
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn btn-primary" disabled>Edit Profile</button>
            <button className="btn btn-secondary" disabled>Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
