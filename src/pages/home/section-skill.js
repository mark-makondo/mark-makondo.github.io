import React from 'react';

// assets
import {ReactComponent as SkillBook} from '../../assets/svg/skill-book.svg';
import {ReactComponent as CircLines} from '../../assets/svg/circ-lines.svg';
import {ReactComponent as SkillLine} from '../../assets/svg/skill-line.svg';

// components
import SkillHolder from '../../components/s-item_holder/s-item_holder-container.js';

const skill = () => {
    return(
        <section className="skill" id="skill">
            <div className="skill__cont">
                <header className="skill__cont__header">
                    <h2>always aim high</h2>
                    <SkillLine/>
                </header>
                <div className="skill__cont__body">
                    <div className="skill__cont__body__title">
                        <div className="skill__cont__body__title-svg">
                            <SkillBook/>
                            <CircLines/>
                        </div>
                        <h1>skills</h1>
                    </div>
                    <div className="skill__cont__body__skills">
                        <SkillHolder/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default skill;