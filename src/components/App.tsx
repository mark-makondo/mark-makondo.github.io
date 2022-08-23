import React from 'react';

// components
import Home from './home/Home';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import AppState from '../context/AppState';

const App = () => {
    return (
        <AppState>
            <div className="pf-main">
                <Navbar />
                <div className="pf-main-container">
                    <Sidebar />
                    <Home />
                </div>
            </div>
        </AppState>
    );
};

export default App;
