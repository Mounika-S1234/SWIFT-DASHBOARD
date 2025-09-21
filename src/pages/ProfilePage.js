import React from 'react';

const ProfilePage = ({ user, onNavigate }) => (
    <>
      <style>
        {`
          .project-list {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-top: 1rem;
          }
          .project-list-item {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            cursor: pointer;
          }
          .project-icon {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            margin-right: 0.75rem;
            object-fit: cover;
          }
          .project-title {
            font-size: 1rem;
            font-weight: 500;
            color: #374151;
          }
          /* Updated styles for the card */
          .card {
            background-color: #e6e0d9; /* A light brown color */
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-top: 2rem;
            padding: 1.5rem;
            height: auto;
            width: 150px; /* Card width set to 50px */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            text-align: center;
          }
          .card h1 {
              font-size: 1.5rem;
              font-weight: bold;
              margin-bottom: 0.5rem;
          }
          .card p {
              margin-bottom: 1rem;
              line-height: 1.5; /* Adjusted to prevent text from being compressed */
          }
          .card button {
              background-color: #4b5563; /* A dark gray for the button */
              color: white;
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              cursor: pointer;
              transition: background-color 0.2s ease-in-out;
          }
          .card button:hover {
              background-color: #1f2937;
          }
        `}
      </style>
      <main className="p-4">
          <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">My projects
              <button className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg"> +</button></h2>
          </div>
          <ul className="project-list">
              <li className="project-list-item">
                  <img src="https://placehold.co/40x40/7e22ce/ffffff?text=M" alt="Mobile App icon" className="project-icon" />
                  <h3 className="project-title">Mobile App</h3>
              </li>
              <li className="project-list-item">
                  <img src="https://placehold.co/40x40/facc15/ffffff?text=W" alt="Website Redesign icon" className="project-icon" />
                  <h3 className="project-title">Website Redesign</h3>
              </li>
              <li className="project-list-item">
                  <img src="https://placehold.co/40x40/10b981/ffffff?text=D" alt="Design System icon" />
                  <h3 className="project-title">Design system</h3>
              </li>
              <li className="project-list-item">
                  <img src="https://placehold.co/40x40/ef4444/ffffff?text=W" alt="Wireframes icon" className="project-icon" />
                  <h3 className="project-title">wirefranes</h3>
              </li>
          </ul>
          {/* Card with new content and styling */}
          <div className="card">
              <h1>Thoughts Time</h1>
              <p>Thoughts Time</p>
              <button>Thoughts Time</button>
          </div>
      </main>
    </>
);

export default ProfilePage;