import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/config.js';

// component UI
import PostUI from './blog-post_holder.js';

// custom hooks
import { useScrollListener } from '../../hooks/scroll-listener.js';
import { useScrollPosition } from '../../hooks/scroll-position.js';

//utils
import query from '../../helper/query.js';

const BlogPostContainer = () => {
    // use state
    const [docs, setDoc] = useState([]);
    const [lastKey, setLastKey] = useState('');

    // custom hooks
    const [scrolled] = useScrollListener();
    const [scrolledPosition] = useScrollPosition('y');

    const morePost = (targetKey) => {
        if(targetKey > 0){
            nextPost(targetKey);
        }
       
    }

    const nextPost = (targetKey) => {
        database.collection('posts')
            .orderBy('datePosted', 'desc')
            .startAfter(targetKey)
            .limit(4)
            .onSnapshot((snap) => {
                let documents = [];
                let key = '';

                snap.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id});
                    key = doc.data().datePosted;
                });
               
                setLastKey(key);
                setDoc(docs.concat(documents));
            })
    }

    const initialPost = () => {
        database.collection('posts')
            .orderBy('datePosted', 'desc')
            .limit(4)
            .onSnapshot((snap) => {
                let documents = [];
                let key = '';

                snap.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id});
                    key = doc.data().datePosted;
                });

                setLastKey(key);
                setDoc(documents);
            })
    }

    const postDecorationHandler = () => {
        let arrow = query.blogPostArrow();
        let circles = query.blogPostCircles();
        let upToDate = query.blogPostUpToDate();

        if(arrow){
            if(scrolledPosition.value > 0){
                arrow.classList.add('active');
            }else{
                arrow.classList.remove('active');
            }
        }

        if(circles && upToDate){
            if(docs.length > 4){
                circles.classList.add('active');
                upToDate.innerHTML = "You are up to date."
            } else {
                circles.classList.remove('active');
                upToDate.innerHTML = ""
            }
        }
       
    } 
    postDecorationHandler();
   
    useEffect(() => {
        initialPost();
    }, [])
    
    return(
        <PostUI
            posts = {docs}
            morePost = {morePost}
            lastKey = {lastKey}
            scrolled = {scrolled.position}
        />
    )
}

export default BlogPostContainer;