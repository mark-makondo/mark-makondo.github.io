import React, { useContext } from 'react';
import context from '../context/Context';
import Hero from '../components/home/hero/Hero';
import About from '../components/home/about/About';
import Projects from '../components/home/projects/Projects';
import Footer from '../components/footer/Footer';
import DottedSectionWrapper from '../components/reusable/dottedSectionWrapper/DottedSectionWrapper';
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
