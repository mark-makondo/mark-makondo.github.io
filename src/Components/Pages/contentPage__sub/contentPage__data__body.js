import React from 'react';

// sub components
import Body__aboutOne from './sub__thisComponents/body__aboutOne.js';
import Body__aboutTwo from './sub__thisComponents/body__aboutTwo.js';
import Body__skills from './sub__thisComponents/body__skills.js';
import Body__projects from './sub__thisComponents/body__projects.js';
import Body__footer from './sub__thisComponents/body__footer.js';

const contentPage__data__body = (props) => {
    // about Two
    let gif = props.gif;
    // footer email me props
    let sendEmailTo = props.sendEmailTo;
    let msgContent = props.msgContent;
    let handleTextOnChange = props.handleTextOnChange;

    return(
        <div className="contentPage__data__body flex-column">
            <section className="body__aboutOne__container flex-column-center">
                <Body__aboutOne/>
            </section>
            
            <div className="trigger-container">
                <div className="page__bgCont">
                    <section className="body__aboutTwo__container flex-column-center sect-select">
                        <div className="btn__container flex-column-center">
                            <hr className="custom-hr" id="hr__aboutTwo"/>
                            <div className="btn__position flex-column-center aboutTwo" id="aboutTwo">
                                <span className="font-title">About</span>
                            </div>

                        </div>
                        <Body__aboutTwo
                            gif = {gif}
                        />
                    </section>

                    <section className="body__skills__container flex-column-center sect-select">
                        <div className="btn__container flex-column-center">
                            <hr className="custom-hr" id="hr__skills"/>
                            <div className="btn__position flex-column-center skills" id="skills">
                                <span className="font-title">Skills</span>
                            </div>
                        </div>
                        <Body__skills/>
                    </section> 
                    <section className="body__projects__container flex-column-center sect-select">
                        <div className="btn__container flex-column-center">
                            <hr className="custom-hr" id="hr__projects"/>
                            <div className="btn__position flex-column-center projects" id="projects">
                                <span className="font-title">Projects</span>
                            </div>
                        </div>
                        <Body__projects/>
                    </section>
                </div>
            </div>

            <section className="body__footer__container flex-column-center">
                <Body__footer
                    handleTextOnChange = {handleTextOnChange}
                    msgContent ={msgContent}
                    sendEmailTo = {sendEmailTo}
                />
            </section>
           
        </div>
    )
}

export default contentPage__data__body;
