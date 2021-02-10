import { useEffect } from 'react';
import helper from '../../helper/query.js';

// animations 
import scrollTrigger from './_scroll-trigger.js';
import smoothScroll from '../_smooth-scroll.js';

// section animations
import heroAnimate from './_hero-section.js';
import skillAnimate from './_skill-section.js'; 

const HomeAnimation = () => {
    useEffect(() => {
        // scroll
        scrollTrigger()
        smoothScroll(helper.quickNavButtons())
        // sections
        heroAnimate()
        skillAnimate()
    }, [])    
}

export default HomeAnimation;