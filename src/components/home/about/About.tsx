import React from 'react';
import { SectionProps } from '../../../types/common.type';

const About = React.forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className="pf-about pf-home-common">
            <div className="pf-home-section-header pf-about__header">
                <h1 className="attention-color">A LITTLE ABOUT MYSELF</h1>
            </div>
            <div className="pf-home-section-body pf-about__body">About body</div>
        </section>
    );
});

About.displayName = 'About';
export default About;
