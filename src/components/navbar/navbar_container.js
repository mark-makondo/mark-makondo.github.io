import React, { useEffect, useState } from 'react';
import helper from '../../helper/query.js';

// components
import NavbarUI from './navbar.js';

// assets
import {ReactComponent as Logo} from '../../assets/svg/footer-logo.svg';

const NavbarContainer = () => {
    let list = ['home', 'blog'];
    let logo = <Logo/>;

    // sticky nav on scroll
    const stickyNavScrollHandler = () =>{
        const offset = window.pageYOffset || document.documentElement.scrollTop;
        
        if(offset > 5){
            helper.navbar().classList.add('sticky-nav');
        }else{
            helper.navbar().classList.remove('sticky-nav');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',stickyNavScrollHandler);
    }, [])

    return(
        <NavbarUI
            logo = {logo}
            list = {list}
        />
    )
}

export default NavbarContainer;