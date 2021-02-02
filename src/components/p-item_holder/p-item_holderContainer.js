import React from 'react';
import ProjectHolderUi from './p-item_holder.js';

// assets
import PortfolioOne from  '../../assets/img/img-projects/old-portfolio.png';
import PortfolioTwo from  '../../assets/img/img-projects/cha-beauty.png';

const ProjectHolderContianer = () => {
    let projects = [
        {"id": 0, "image": `${PortfolioOne}`, "title": "Old Portfolio", "src": "https://mark-makondo.github.io/Portfolio-v2/"},
        {"id": 1, "image": `${PortfolioTwo}`, "title": "Cha Portfolio", "src": "https://mark-makondo.github.io/cha-website/"}
    ]

    return(
        <ProjectHolderUi
            projects = {projects}
        />
    )
}

export default ProjectHolderContianer;