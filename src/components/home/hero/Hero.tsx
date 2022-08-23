import React, { forwardRef, useContext } from 'react';
import { SectionProps } from '../../../types/common.type';
import { ReactComponent as Location } from '../../../assets/svg/location-icon.svg';
import context from '../../../context/Context';

// components
import IconSVGText from '../../reusable/iconSVGText/IconSVGText';

// utilities
import { gotoSmoothScroll } from '../../../helper/utilities';

const Hero = forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    const { ABOUT_ELEMENT, PROJECTS_ELEMENT } = useContext(context);

    return (
        <section ref={ref} id={id} className="pf-hero pf-home-common">
            <div className="pf-hero-container">
                <div className="pf-hero__info">
                    <h2 className="pf-hero__info-heading big-head attention-color">
                        Being able to design and create something is fun.
                    </h2>
                    <span className="normal-head normal-color">MARK ALBERT D. MAKONDO</span>
                    <span className="normal no-attention-color">Full Stack Web Developer</span>
                    <IconSVGText Icon={Location} label="Doha, Qatar" className="normal no-attention-color" />

                    <div className="pf-hero__actions">
                        <button
                            onClick={(e) => gotoSmoothScroll(e.target, [ABOUT_ELEMENT.current])}
                            type="button"
                            className="btn-custom btn-custom-primary"
                            data-key="about"
                        >
                            About Me
                        </button>
                        <button
                            onClick={(e) => gotoSmoothScroll(e.target, [PROJECTS_ELEMENT.current])}
                            type="button"
                            className="btn-custom"
                            data-key="projects"
                        >
                            Projects
                        </button>
                        <button type="button" className="btn-custom">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';
export default Hero;
