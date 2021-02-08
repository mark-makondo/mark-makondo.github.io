import React from 'react';

// assets
import Profile from '../../assets/img/dev-pic.jpg';

const blogPost = ({posts}) => {
   
    return(
        <div className="content">
            { posts && posts.map(post => 
                <div key={post.id} className="post">
                    <div className="post__cont">
                        <div className="post__cont-image"> 
                            <img src={Profile} alt="Profile Picture"/>
                        </div>
                        <div className="post__cont-body">
                            <div className="post__cont-body__info">
                                <span className="normal-1">{post.title}</span>
                                <p className="normal-2">{post.content}</p>
                            </div>
                            <span className="normal-2">
                                {new Date(post.datePosted.seconds * 1000 + post.datePosted.nanoseconds/1000000).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default blogPost;