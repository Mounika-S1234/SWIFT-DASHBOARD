// src/components/Sidebar.js

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Sidebar = ({ toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .header-container {
            background-color: #ffffff;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 10;
          }
        .card{
        height:100vh;
        width:100vw;
       
        }
          .card-1{
          background-color: #ffffff;
          height:250px;
          width:200px;
           margin-top:10px;
          }
         .image{
         height:15px;
         width:15px;
         }
          .header-content {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .flex-items-center {
            display: flex;
            align-items: center;
          }
          
          .menu-button {
            color: #4b5563;
            margin-right: 1rem;
          }
          
          .header-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
            display: none;
          }
          
          @media (min-width: 768px) {
            .header-title {
              display: block;
            }
          }
          
          .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .search-bar {
            position: relative;
            display: none;
          }
          
          @media (min-width: 768px) {
            .search-bar {
              display: block;
            }
          }
          
          .search-input {
            padding-left: 2.5rem;
            padding-right: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            border-radius: 9999px;
            border: 1px solid #d1d5db;
            outline: 2px solid transparent;
            outline-offset: 2px;
          }
          
          .search-input:focus {
            outline: 2px solid #6366f1;
            border-color: transparent;
          }
          
          .search-icon {
            position: absolute;
            left: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            color: #9ca3af;
          }
          
          .icon-button {
            color: #4b5563;
            transition-property: color;
            transition-duration: 200ms;
          }
          
          .icon-button:hover {
            color: #111827;
          }
          
          .user-profile {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
          }
          
          .user-avatar {
            width: 2rem;
            height: 2rem;
            border-radius: 9999px;
            background-color: #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .user-avatar svg {
            color: #6b7280;
          }
          
          .user-name {
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            display: none;
          }
          
          @media (min-width: 768px) {
            .user-name {
              display: block;
            }
          }
        `}
      </style>
      <header className="header-container">
        <div className="header-content">
          <div className="flex-items-center">
            {isMobile && (
              <button onClick={toggleSidebar} className="menu-button">
                <Menu size={24} />
              </button>
            )}
            <h1 className="header-title">Project M.</h1>
          </div>
          
          <div className="header-actions">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Two cards side by side */}
      <div style={{ display: 'flex', gap: '1rem', margin: '1.5rem' }}>
        {[1,2,3].map((_, idx) => (
          <div className="card" key={idx}>
            <h1>To Do</h1>
            <div className="card-1">
              <h2>Low</h2>
              <h1>Brainstorming</h1>
              <p>Brainstorming brings team members' diverse experience into play. </p>
              <img src="https://www.bing.com/th/id/OIP.J86xGTV1kB6fA-pU_IDbRQHaHa?w=203&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="image" alt="avatar"/>
              <img src="https://th.bing.com/th/id/OIP.7Od_EII57grfH3EZmB77GgHaGJ?w=227&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="image" alt="comments"/>12 Comments
              <img src="https://th.bing.com/th/id/OIP.OY4yH7Cxq3L2fnPBx-NeawHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="image" alt="files"/> 0 files
            </div>
            <div className="card-1">
              <h2>high</h2>
              <h1>Research</h1>
              <p>Brainstorming brings team members' diverse experience into play. </p>
              <img src="https://www.bing.com/th/id/OIP.J86xGTV1kB6fA-pU_IDbRQHaHa?w=203&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="image" alt="avatar"/>
              <img src="https://th.bing.com/th/id/OIP.7Od_EII57grfH3EZmB77GgHaGJ?w=227&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="image" alt="comments"/>12 Comments
              <img src="https://th.bing.com/th/id/OIP.OY4yH7Cxq3L2fnPBx-NeawHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="image" alt="files"/> 0 files
            </div>
            <div className="card-1">
              <h2>high</h2>
              <h1>Research</h1>
              <p>Brainstorming brings team members' diverse experience into play. </p>
              <img src="https://www.bing.com/th/id/OIP.J86xGTV1kB6fA-pU_IDbRQHaHa?w=203&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="image" alt="avatar"/>
              <img src="https://th.bing.com/th/id/OIP.7Od_EII57grfH3EZmB77GgHaGJ?w=227&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="image" alt="comments"/>12 Comments
              <img src="https://th.bing.com/th/id/OIP.OY4yH7Cxq3L2fnPBx-NeawHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="image" alt="files"/> 0 files
            </div>
            <p>Content for card one.</p>
            <button>Action 1</button>
          </div>
          
        ))}
      </div>
    </>
  );
  
};

export default Sidebar;