import React from 'react';

// sub components
import Footer_emailMe from './body__footer__EmailMe.js';

const contentPage__data__footer= (props) => {
    // footer email me props
    let sendEmailTo = props.sendEmailTo;
    let msgContent = props.msgContent;
    let handleTextOnChange = props.handleTextOnChange;

    return(
        <div className="contentPage__data__footer font-content">
             <div className="contentPage__data__footer__boxOne font-title">
                  <span>Say Hello</span>
            </div>

            <div className="contentPage__data__footer__children flex-column-center">
                <div className="contentPage__data__footer__boxTwo">
                    <Footer_emailMe
                      handleTextOnChange = {handleTextOnChange}
                      msgContent ={msgContent}
                      sendEmailTo = {sendEmailTo}
                    />
                </div>
                <div className="contentPage__data__footer__boxThree flex-column-center">
                    <img src="" alt="image"/>
                    <span>Check this out!</span>
                </div>
                <div className="contentPage__data__footer__boxFour">
                    <div className="contentPage__data__footer__boxFour__social flex-row-center">
                        <a href="https://www.facebook.com/markalbert.d.makondo/"><i className="fab fa-facebook"></i></a>
                        <a href="https://github.com/mark-makondo/"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/mark-albert-makondo-13a96a188/"><i className="fab fa-linkedin"></i></a> 
                    </div>
                    <div className="contentPage__data__footer__boxFour__crtag">
                        <span>Copyright &#169; Mark Makondo 2020</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contentPage__data__footer;
