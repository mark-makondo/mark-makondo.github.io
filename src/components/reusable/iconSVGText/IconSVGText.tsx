import React from 'react';
import './index.css';
import Props from './iconSVGText.type';

const IconSVGText: React.FC<Props> = ({ Icon, label, className, style }) => {
    return (
        <div className={`r-icon-text ${className}`} style={style}>
            <div className="r-container">
                <Icon />
            </div>
            {label}
        </div>
    );
};

export default IconSVGText;
