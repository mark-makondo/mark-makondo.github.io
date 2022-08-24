import React, { useContext, useState } from 'react';
import context from '../../context/Context';
import { KeyValueType } from '../../types/common.type';

// utilities
import { gotoSmoothScroll } from '../../helper/utilities';
import { navbarValues } from '../../constants/constants';

// assets
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

// reusable
import CustomModal from '../reusable/customModal/CustomModal';
import Contact from '../contact/Contact';
import NavBurger from '../reusable/navBurger/NavBurger';

const Navbar = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    const { currentScrollTarget, HERO_ELEMENT, ABOUT_ELEMENT, PROJECTS_ELEMENT, isContactOpen, setIsContactOpen } =
        useContext(context);

    const elements = [HERO_ELEMENT.current, ABOUT_ELEMENT.current, PROJECTS_ELEMENT.current];

    const activeCondition = (value: string) => {
        let retVal = 'no-attention-color',
            currentId = currentScrollTarget.id;

        if (!currentId) currentId = 'hero';

        const isActive = currentId === value;

        if (isActive) retVal = 'attention-color';

        return retVal;
    };

    const onNavClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: KeyValueType) => {
        gotoSmoothScroll(e.target, elements);
        if (item.key == 'contact') setIsContactOpen((prevVal) => !prevVal);
    };

    return (
        <>
            <div className="pf-navbar">
                <div className="pf-navbar__left pf-left-half bg-color">
                    <div className="logo-container">
                        <Logo />
                    </div>
                </div>
                <div className="pf-navbar__right bg-color2 bottom-shadow">
                    <div className={`pf-navbar__container ${isBurgerOpen ? 'pf-navbar__mobile-open' : ''}`}>
                        <ul>
                            {navbarValues.map((item) => (
                                <li
                                    className={`${activeCondition(item.key)} ${
                                        item.key == 'contact' ? 'btn-custom btn-custom-nav-outline' : ''
                                    }`}
                                    key={item.key}
                                    data-key={item.key}
                                    onClick={(e) => onNavClick(e, item)}
                                >
                                    <span>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <NavBurger onChange={(isOpen) => setIsBurgerOpen(isOpen)} className="pf-navbar-burger-hide" />
                </div>
            </div>
            <CustomModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen((prevVal) => !prevVal)}
                renderBody={Contact}
            />
        </>
    );
};

export default Navbar;
