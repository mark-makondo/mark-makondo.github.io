import React from 'react';

// assets
import Profile from '../../assets/img/dev-pic.jpg';

const blogPost = ({posts, morePost, lastKey, postLoading}) => {
   
    return(
        <div className="content__cont">
            { posts.length > 0 ? posts.map((post,i) => 
                <div key={post.id} className={`post post-${i}`}>
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
            ): (<p>Loading . . .</p>)}

            { postLoading ? ( <p>Loading . . .</p> ) 
            : lastKey > 0 ? ( <button onClick= {() => morePost(lastKey)}> Testing </button> ) 
            : ( <span className="up-to-date">You are up to date.</span> )}
           
        </div>
    )
}

export default blogPost;