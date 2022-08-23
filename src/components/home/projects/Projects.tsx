import React from 'react';
import { SectionProps } from '../../../types/common.type';

// reusable
import GridBox from '../../reusable/gridBox/GridBox';

const sample = [
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' },
    { id: 3, title: 'Project 3', description: 'Description 3' },
    { id: 4, title: 'Project 4', description: 'Description 4' },
    { id: 5, title: 'Project 5', description: 'Description 5' },
];

const Projects = React.forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    return (
        <section ref={ref} id={id} className="pf-projects pf-home-common">
            <div className="pf-home-section-header pf-projects__header">
                <h1 className="attention-color">MY WORKS</h1>
                <p className="no-attention-color">
                    <i>I Build Anything, To Master My Craft.</i>
                </p>
            </div>
            <div className="pf-home-section-body pf-projects__body">
                <GridBox
                    items={sample}
                    renderItem={(item) => {
                        return <div className="pf-projects__item">{item.description}</div>;
                    }}
                />
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';
export default Projects;
