import React from 'react';

const SkillHolder = (props) => {
    let skills = props.skills;

    return(
        <div className="skill-holder">
           {skills.map((item, i) => 
               <button className={`${item.toLowerCase()} normal-2`} key={i}> .{item}</button>
           )}
        </div>
    )
}

export default SkillHolder;