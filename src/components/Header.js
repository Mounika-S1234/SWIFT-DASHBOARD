import React from 'react';
import { Home, MessageSquare, Briefcase, Calendar, Users, BarChart2, Bell, Settings } from 'lucide-react';

const navItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: MessageSquare, label: 'Messages', page: 'dashboard' },
    { icon: Briefcase, label: 'Projects', page: 'dashboard' },
    { icon: Calendar, label: 'Calendar', page: 'dashboard' },
    { icon: Users, label: 'Teams', page: 'dashboard' },
    { icon: BarChart2, label: 'Reports', page: 'dashboard' },
    { icon: Bell, label: 'Notifications', page: 'dashboard' },
    { icon: Settings, label: 'Settings', page: 'dashboard' },
];

const Header = ({ isOpen, onNavigate }) => {
    return (
      <>
      <style>
        {`
          /* Styles for each list item in the navigation */
          .nav-item {
            margin-bottom: 0.5rem; /* Equivalent to mb-2 */
          }

          /* Styles for the navigation links */
          .nav-link {
            display: flex;
            align-items: center;
            gap: 0.75rem; /* Equivalent to space-x-3 */
            padding: 0.75rem; /* Equivalent to p-3 */
            border-radius: 0.75rem; /* Equivalent to rounded-xl */
            margin-left: 0.5rem; /* Equivalent to mx-2 */
            margin-right: 0.5rem; /* Equivalent to mx-2 */
            color: #4b5563; /* Equivalent to text-gray-600 */
            transition-property: background-color, color;
            transition-duration: 200ms; /* Equivalent to transition-colors duration-200 */
            width: 100%; /* Important: makes the button fill the width of its parent */
            border: none; /* Removes the default button border */
            background: none; /* Removes the default button background */
            cursor: pointer; /* Ensures the cursor indicates it's clickable */
            text-align: left; /* Aligns the content to the left */
          }

          /* Hover styles for the navigation links */
          .nav-link:hover {
            background-color: #eef2ff; /* Equivalent to hover:bg-indigo-50 */
            color: #4f46e5; /* Equivalent to hover:text-indigo-600 */
          }

          /* Styles for the text label inside the link */
          .nav-label {
            font-weight: 500; /* Equivalent to font-medium */
          }
        `}
      </style>
  <aside className={`bg-white shadow-xl h-full transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative absolute inset-y-0 left-0 w-64 z-20`}>
            <div className="p-4 flex items-center">
                <h2 className="text-2xl font-extrabold text-indigo-600"> </h2>
            </div>
            <nav className="mt-8">
                {navItems.map((item, index) => (
                    <div key={index} className="nav-item">
                        <button
                            onClick={() => onNavigate(item.page)}
                            className="nav-link"
                        >
                            <item.icon size={20} />
                            <span className="nav-label">{item.label}</span>
                        </button>
                    </div>
                ))}
            </nav>
        </aside>
      </>
    );
};

export default Header;