import React from 'react';
import ProjectHolderUi from './p-item_holder.js';

// assets
import ProjectOne from  '../../assets/img/img-projects/old-portfolio.png';
import ProjectTwo from  '../../assets/img/img-projects/cha-beauty.png';
import ProjectThree from  '../../assets/img/img-projects/github-api-fetch.png';
import ProjectFour from  '../../assets/img/img-projects/blog-post-manager.png';

const ProjectHolderContianer = () => {
    let projects = [
        {"id": 0, "image": `${ProjectOne}`, "title": "Old Portfolio", "src": "https://mark-makondo.github.io/Portfolio-v2/"},
        {"id": 1, "image": `${ProjectTwo}`, "title": "Cha Portfolio", "src": "https://mark-makondo.github.io/cha-website/"},
        {"id": 2, "image": `${ProjectThree}`, "title": "Github Api Fetch", "src": "https://mark-makondo.github.io/github-api-web/"},
        {"id": 3, "image": `${ProjectFour}`, "title": "Blog Post Manager", "src": "https://mark-makondo.github.io/blog-post-manager/"}
    ]

    return(
        <ProjectHolderUi
            projects = {projects}
        />
    )
}

export default ProjectHolderContianer;