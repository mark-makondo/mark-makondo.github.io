import React from 'react';
import { SectionProps } from '../../../types/common.type';
import { projectData } from '../../../constants/constants';

// reusable
import GridBox from '../../reusable/gridBox/GridBox';
import { ItemTypes } from '../../reusable/gridBox/gridBox.type';

const Projects = React.forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    const renderProjectItem = (item: ItemTypes) => {
        return (
            <div
                className="pf-projects__item no-attention-color"
                onClick={() => (window.location.href = `${item.link}`)}
            >
                <div className="pf-projects__item-top">
                    <img src={item.SourceImage} alt={`Project ${item.id}`} />
                    <div className="pf-projects__item-description small">
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="pf-projects__item-bottom">
                    <a title={`Goto ${item.title}`} href={`${item.link}`} target="_blank" rel="noreferrer">
                        {item.title}
                    </a>
                </div>
            </div>
        );
    };

    return (
        <section ref={ref} id={id} className="pf-projects pf-home-common">
            <div className="pf-home-section-header pf-projects__header">
                <h1 className="attention-color big-head">{projectData.title}</h1>
                <p className="no-attention-color normal">
                    <i>{projectData.description}</i>
                </p>
            </div>
            <div className="pf-home-section-body pf-projects__body">
                <GridBox items={projectData.data} renderItem={(item) => renderProjectItem(item)} />
            </div>
        </section>
    );
});

Projects.displayName = 'Projects';
export default Projects;
