import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/config.js';

// component UI
import PostUI from './blog-post_holder.js';

const BlogPostContainer = () => {
    const [docs, setDoc] = useState([]);
    const [lastKey, setLastKey] = useState('');
    const [postLoading, setPostLoading] = useState(false);

    const nextPost = (target) => {
        database.collection('posts')
            .orderBy('datePosted', 'desc')
            .startAfter(target)
            .limit(3)
            .onSnapshot((snap) => {
                let documents = [];
                let key = '';

                snap.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id});
                    key = doc.data().datePosted;
                });
                setLastKey(key);
                setDoc(docs.concat(documents));
                setPostLoading(false);
            })
    }

    const morePost = (key) => {
        if(key > 0){
            setPostLoading(true);
            nextPost(key);
        }else{
            setLastKey('');
            setPostLoading(false);
        }
    }

    useEffect(() => {
        
        const post = database.collection('posts')
            .orderBy('datePosted', 'desc')
            .limit(3)
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

        return () => {
            post();
        } //release when done using
    }, [])

    return(
        <PostUI
            posts = {docs}
            morePost = {morePost}
            lastKey = {lastKey}
            postLoading = {postLoading}
        />
    )
}

export default BlogPostContainer;