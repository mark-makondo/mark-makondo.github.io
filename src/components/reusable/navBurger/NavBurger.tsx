import React from 'react';
import './index.css';
import Props from './navBurger.type';

const NavBurger: React.FC<Props> = ({ onChange = () => null, className = '' }) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked);

    return (
        <div className={`r-nav-burger ${className}`}>
            <input
                type="checkbox"
                id="checkbox4"
                className="checkbox4 visuallyHidden"
                onChange={(e) => handleOnChange(e)}
            />
            <label htmlFor="checkbox4">
                <div className="r-nav-burger__base r-nav-burger__base--animate">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                    <span className="bar bar5"></span>
                </div>
            </label>
        </div>
    );
};

export default NavBurger;
