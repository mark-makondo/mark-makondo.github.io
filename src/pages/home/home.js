import React from 'react';

// sections
import Hero from './section-hero.js';
import Skill from './section-skill.js';
import Project from './section-project.js';
import Footer from '../../components/footer/footer.js';

// animations
import Animation from '../../animation/home-animation/home-animation.js';

const Home = (props) => {
    // hero section
    let statusColor = props.color;
    let statusText = props.text;

    Animation();
  
    return(
        <div className="home">
            <Hero 
                statusColor = {statusColor} 
                statusText = {statusText}
            />
            <Skill/>
            <Project/>
            <Footer/>
        </div>
    )
}

export default Home;