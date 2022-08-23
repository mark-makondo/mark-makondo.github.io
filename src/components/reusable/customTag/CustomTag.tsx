import React from 'react';
import Props from './customTag.type';
import './index.css';

const CustomTag: React.FC<Props> = ({ label, className = '', color = '#fff' }) => {
    return (
        <div className={`r-custom-tag ${className}`} style={{ color }}>
            <span>{label}</span>
        </div>
    );
};

export default CustomTag;
