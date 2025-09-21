// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import CommentsDashboard from './pages/CommentsDashboard'; // Correct
import ProfilePage from './pages/ProfilePage'; // Correct
import { fetchUsers } from './services/api';
// ... rest of the App component
const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('profile');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const users = await fetchUsers();
                if (users && users.length > 0) {
                    setUser(users[0]);
                } else {
                    setError("No user data found.");
                }
            } catch (err) {
                setError("Failed to load user data.");
            } finally {
                setLoading(false);
            }
        };
        getUserData();
    }, []);

    const handleNavigate = (page) => {
        setCurrentPage(page);
        setIsSidebarOpen(false);
    };

    const getPageTitle = () => {
        switch (currentPage) {
            case 'profile':
                return 'User Profile';
            case 'dashboard':
                return 'Comments Dashboard';
            default:
                return 'Dashboard';
        }
    };

    const renderPage = () => {
        if (loading) return <main className="flex-1 flex items-center justify-center">Loading...</main>;
        if (error) return <main className="flex-1 flex items-center justify-center text-red-600">Error: {error}</main>;
        if (!user) return <main className="flex-1 flex items-center justify-center">No user profile to display.</main>;

        switch (currentPage) {
            case 'profile':
                return <ProfilePage user={user} onNavigate={handleNavigate} />;
            case 'dashboard':
                return <CommentsDashboard onNavigate={handleNavigate} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans antialiased flex">
            <div className="hidden md:flex">
                <Sidebar isOpen={true} onNavigate={handleNavigate} />
            </div>
            {isSidebarOpen && (
                <div className="md:hidden absolute inset-y-0 left-0 w-full bg-black bg-opacity-50 z-20" onClick={() => setIsSidebarOpen(false)}>
                    <Sidebar isOpen={isSidebarOpen} onNavigate={handleNavigate} />
                </div>
            )}
            <div className="flex-1 flex flex-col">
                <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} pageTitle={getPageTitle()} />
                {renderPage()}
            </div>
        </div>
    );
};

export default App;