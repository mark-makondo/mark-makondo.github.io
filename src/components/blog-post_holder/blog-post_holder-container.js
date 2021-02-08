import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/config.js';

// component UI
import PostUI from './blog-post_holder.js';

const BlogPostContainer = () => {
    const [docs, setDoc] = useState([]);

    useEffect(() => {
        const post = database.collection('posts')
            .orderBy('datePosted', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDoc(documents);
            })

        return () => post();
    }, [])

    return(
        <PostUI
            posts = {docs}
        />
    )
}

export default BlogPostContainer;