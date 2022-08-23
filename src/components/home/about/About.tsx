import React from 'react';
import { SectionProps } from '../../../types/common.type';
import data from './about.data';
import { skillsType } from '../../../types/about.type';

// reusable
import SectionBoxTag from '../../reusable/sectionBoxTag/SectionBoxTag';

const About = React.forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className="pf-about pf-home-common">
            <div className="pf-home-section-header pf-about__header">
                <h1 className="attention-color" style={{ textTransform: 'uppercase' }}>
                    {data.title}
                </h1>
                <ul className="no-attention-color">
                    {data.description.map((item, i) => (
                        <li key={i}>
                            <i>{item}</i>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pf-home-section-body pf-about__body">
                {Object.keys(data.skills).map((skill) => (
                    <SectionBoxTag
                        key={skill}
                        title={data.skills[skill as keyof skillsType].label}
                        description={data.skills[skill as keyof skillsType].description}
                        tags={data.skills[skill as keyof skillsType].data}
                        SVG={data.skills[skill as keyof skillsType].SVG}
                        color="#159BC4"
                        className="pf-about__body-sections"
                    />
                ))}
            </div>
        </section>
    );
});

About.displayName = 'About';
export default About;
