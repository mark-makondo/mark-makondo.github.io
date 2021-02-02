import React from 'react';

const ProjectHolder = (props) => {
    let projects = props.projects;

    return(
        <div className="project-holder">
            {projects.map((item, i) => 
                <div key={i} className="project-holder__items">
                    <a href={item.src}>
                        <img src={item.image} alt={item.title}/>
                        <span className="normal-1">{item.title}</span>
                    </a>
                </div>
            )}
        </div>
    )
}

export default ProjectHolder;