import React from 'react';

// components
import Post from '../../components/blog-post_holder/blog-post_holder-container.js';

// assets
import {ReactComponent as Arrow} from '../../assets/svg/footer-arrow.svg';

const content = () => {
    return(
        <div className="content">
            <Post/>
            <a className="quick content-arrow" href="0"><Arrow/></a>
        </div>
    )
}

export default content;