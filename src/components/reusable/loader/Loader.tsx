import React from 'react';
import './index.css';

const Loader = () => {
    return (
        <div className="r-loader-container">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <div className="r-loader__label">
                <span>Scroll to load</span>
            </div>
        </div>
    );
};

export default Loader;
