import React from 'react';

// components
import NavbarUI from './navbar.js';

// assets
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';

const NavbarContainer = () => {
    let list = ['home', 'blog'];
    let logo = <Logo/>;
    
    return(
        <NavbarUI
            logo = {logo}
            list = {list}
        />
    )
}

export default NavbarContainer;