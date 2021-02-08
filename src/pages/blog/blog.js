import React from 'react';

// sections
import Profile from './section-profile.js';
import BlogContent from './section-content.js';

const Blog = () => {
    return(
        <div className="blog">
            <Profile/>
            <BlogContent/>
        </div>
    )
}

export default Blog