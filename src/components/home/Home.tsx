import React, { useContext } from 'react';
import context from '../../context/Context';

// components
import Hero from './hero/Hero';
import About from './about/About';
import Projects from './projects/Projects';
import Footer from '../footer/Footer';

// reusable
import DottedSectionWrapper from '../reusable/dottedSectionWrapper/DottedSectionWrapper';

// assets
import background from '../../assets/img/background.jpg';

const Home = () => {
    const { MAIN_ELEMENT, HERO_ELEMENT, ABOUT_ELEMENT, PROJECTS_ELEMENT } = useContext(context);

    return (
        <div className="pf-home" ref={MAIN_ELEMENT}>
            <DottedSectionWrapper
                id="hero"
                ref={HERO_ELEMENT}
                total={3}
                current={1}
                className="pf-home-content"
                background={background}
            >
                <Hero />
            </DottedSectionWrapper>

            <DottedSectionWrapper
                id="about"
                ref={ABOUT_ELEMENT}
                total={3}
                current={2}
                className="pf-home-content"
                style={{ height: 'auto' }}
            >
                <About />
            </DottedSectionWrapper>

            <DottedSectionWrapper
                id="projects"
                ref={PROJECTS_ELEMENT}
                total={3}
                current={3}
                className="pf-home-content"
                background={background}
                style={{ height: 'auto' }}
            >
                <Projects />
            </DottedSectionWrapper>

            <Footer id="footer" />
        </div>
    );
};

export default Home;
