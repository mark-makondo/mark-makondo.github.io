import React, { useContext } from 'react';
import context from '../../context/Context';

// utilities
import { gotoSmoothScroll } from '../../helper/utilities';
import { navbarValues } from '../../constants/constants';

// assets
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

const Navbar = () => {
    const { currentScrollTarget, HERO_ELEMENT, ABOUT_ELEMENT, PROJECTS_ELEMENT } = useContext(context);

    const elements = [HERO_ELEMENT.current, ABOUT_ELEMENT.current, PROJECTS_ELEMENT.current];

    const activeCondition = (value: string) => {
        let retVal = 'no-attention-color',
            currentId = currentScrollTarget.id;

        if (!currentId) currentId = 'hero';

        const isActive = currentId === value;

        if (isActive) retVal = 'attention-color';

        return retVal;
    };

    return (
        <div className="pf-navbar">
            <div className="pf-navbar__left pf-left-half bg-color">
                <div className="logo-container">
                    <Logo />
                </div>
            </div>
            <div className="pf-navbar__right bg-color2 bottom-shadow">
                <ul>
                    {navbarValues.map((item) => (
                        <li
                            className={`${activeCondition(item.key)} ${
                                item.key == 'contact' ? 'btn-custom btn-custom-nav-outline' : ''
                            }`}
                            key={item.key}
                            data-key={item.key}
                            onClick={(e) => gotoSmoothScroll(e.target, elements)}
                        >
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
