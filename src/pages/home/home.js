import React from 'react';

// sections
import Hero from './section-hero.js';
import Skill from './section-skill.js';
import Project from './section-project.js';

const Home = (props) => {
    let statusColor = props.color;
    let statusText = props.text;

    return(
        <div className="home">
            <Hero 
                statusColor = {statusColor} 
                statusText = {statusText}
            />
            <Skill/>
            <Project/>
        </div>
    )
}

export default Home;