import React from 'react';

// sections
import Profile from './section-profile.js';
import BlogContent from './section-content.js';

// animations
import Animation from '../../animation/blog-animation/blog-animation.js';

const Blog = () => {
    Animation();
    
    return(
        <div className="blog">
            <Profile/>
            <BlogContent/>
        </div>
    )
}

export default Blog