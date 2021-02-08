import React from 'react';
import SkillHolderUi from './s-item_holder.js';

const SkillHolderContainer = () => {
    let skills = ["JavaScript", "TypeScript", "ReactJs", "SASS", "CSS", "MySQL", "HTML5"];
    return(
        <SkillHolderUi
            skills = {skills}
        />
    )
}

export default SkillHolderContainer;