import React from 'react';

//components
import ProjectHolder from '../../components/p-item_holder/p-item_holderContainer.js'

const project = () => {
    return(
        <section className="project" id="project">
            <div className="project__cont">
                <header className="project__cont__header">
                    <h1 className="project__cont__header-title">projects</h1>
                    <span className="project__cont__header-info normal-0">
                        i build anything, to master my craft.
                    </span>
                </header>
                <div className="project__cont__body">
                    <ProjectHolder/>
                </div>
            </div>
        </section>
    )
}

export default project;