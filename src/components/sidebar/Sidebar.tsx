import React from 'react';

// components
import { ReactComponent as HeroLogo } from '../../assets/svg/hero-logo.svg';

const Sidebar = () => {
    return (
        <div className="pf-sidebar pf-left-half bg-color right-shadow ">
            <div className="pf-sidebar__herologo">
                <HeroLogo />
            </div>

            <div className="pf-sidebar__herologo-decoration"></div>
        </div>
    );
};

export default Sidebar;
