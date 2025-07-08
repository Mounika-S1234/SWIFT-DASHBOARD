import React from 'react';
import './ProfileCard.css'; // Create this CSS file for styling

const ProfileCard = ({ user }) => {
  // Function to format the phone number: remove non-digit characters
  const formatPhoneNumber = (phoneNumber) => {
    // Use a regular expression to remove anything that is not a digit
    return phoneNumber.replace(/\D/g, '');
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        {/* Display initials from user's name */}
        <span className="profile-initials">
          {user.name.charAt(0).toUpperCase()}
          {user.name.split(' ')[1] ? user.name.split(' ')[1].charAt(0).toUpperCase() : ''}
        </span>
        <div className="profile-info-header">
          {/* Display user's full name */}
          <h3>{user.name}</h3>
          {/* Display user's email */}
          <p>{user.email}</p>
        </div>
      </div>
      <div className="profile-details">
        {/* User ID row */}
        <div className="detail-row">
          <span className="detail-label">User ID</span>
          <br />
          <span className="detail-value">{user.id}</span>
        </div>
        <br />
        {/* Name row */}
        <div className="detail-row">
          <span className="detail-label">Name</span>
          <br />
          <span className="detail-value">{user.name}</span>
        </div>
        <br /> <br />
        {/* Email ID row */}
        <div className="detail-row">
          <span className="detail-label">Email ID</span>
          <br />
          <span className="detail-value">{user.email}</span>
        </div>
        <br />
        {/* Address row */}
        <div className="detail-row">
          <span className="detail-label">Address</span>
          <br />
          <span className="detail-value">
            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </span>
        </div>
        <br />
        {/* Phone row */}
        <div className="detail-row">
          <span className="detail-label">Phone</span>
          <br />
          {/* Display formatted phone number */}
          <span className="detail-value">{formatPhoneNumber(user.phone)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
