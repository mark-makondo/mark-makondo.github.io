import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
const CommonLayout = () => {
    return (
        <div className="pf-main">
            <Navbar />
            <div className="pf-main-container">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};
export default CommonLayout;
