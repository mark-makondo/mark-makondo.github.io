import React from 'react';

// assets
import Profile from '../../assets/img/dev-pic.jpg';
import {ReactComponent as Arrow} from '../../assets/svg/footer-arrow.svg';
import {ReactComponent as Circles} from '../../assets/svg/load-circles.svg';

const blogPost = ({posts, morePost, lastKey, scrolled}) => {
    return(
        <div className="content__cont">
            { posts.length > 0 ? posts.map((post,i) => 
                <div key={post.id} className={`post post-${i}`}>
                    <div className="post__cont">
                        <div className="post__cont-image"> 
                            <img src={Profile} alt="Owner Profile"/>
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
            
            { lastKey > 0 && scrolled === 1 ? ( morePost(lastKey) ) 
            : lastKey > 0 ? ( <div className="content__cont-circles"> <Circles/> </div> ) 
            : ( <span className="up-to-date normal-2"></span> ) }

            <a className="quick content__cont-arrow" href="0"><Arrow/></a>

        </div>
    )
}

export default blogPost;