import React from 'react';

// sections
import Hero from './_section-hero.js';
import Skill from './_section-skill.js';
import Project from './_section-project.js';

// components
import Nav from '../../components/navbar/navbar.js';
import Footer from '../../components/footer/footer.js';

const Home = () => {
    return(
        <div className="home">
            <Nav/>
            <Hero/>
            <Skill/>
            <Project/>
            <Footer/>
        </div>
    )
}

export default Home;