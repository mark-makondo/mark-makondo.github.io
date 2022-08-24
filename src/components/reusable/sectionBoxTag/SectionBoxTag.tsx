import React from 'react';
import './index.css';
import Props from './sectionBoxTag.type';

// reusable
import CustomTag from '../customTag/CustomTag';

const SectionBoxTag: React.FC<Props> = ({
    SVG,
    color = '',
    description = '',
    title = '',
    tags = [],
    className = '',
}) => {
    return (
        <div className={`r-section-box-tag ${className}`}>
            <div className="r-section-box-tag__left">
                <h1 className="normal-head">{title}</h1>
                <p className="normal">{description}</p>
                <div className="r-section-box-tag__tags-container small">
                    {tags.map((tag) => (
                        <CustomTag key={tag} label={tag} className="r-section-box-tag__tags-item" color={color} />
                    ))}
                </div>
            </div>
            {SVG && (
                <div className="r-section-box-tag__right">
                    <div className="r-section-box-tag__svg-container" style={{ color }}>
                        {<SVG />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SectionBoxTag;
