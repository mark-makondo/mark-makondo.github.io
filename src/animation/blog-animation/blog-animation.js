import { useEffect } from 'react';
import helper from '../../helper/query.js';

// animations 
import smoothScroll from '../_smooth-scroll.js';

const BlogAnimation = () => {
    useEffect(() => {
        smoothScroll(helper.quickNavButtons())
    }, [])    
}

export default BlogAnimation;