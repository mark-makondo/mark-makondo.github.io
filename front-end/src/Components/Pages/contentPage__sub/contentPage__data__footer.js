import React from 'react';

const contentPage__data__footer= (props) => {
    let sendEmailTo = props.sendEmailTo;
    let msgContent = props.msgContent;
    let handleTextOnChange = props.handleTextOnChange;

    return(
        <div className="contentPage__data__footer font-content">
            <div className="contentPage__data__footer__children flex-column-center">
                <div className="contentPage__data__footer__boxOne ">
                  <span>What do you think?</span>
                </div>
                <div className="contentPage__data__footer__boxTwo">
                    <div className="boxTwo flex-column-center">
                        <div className="boxTwo__contactMe__title flex-row-center w-100">
                            <button className="boxTwo__contactMe__titleOne font-title form-control">Click to Say Hello!</button>
                            <span className="boxTwo__contactMe__titleTwo">img</span>
                        </div>
                       
                        <form onSubmit={sendEmailTo} className="boxTwo__contactMe__form w-100 font-content flex-column-center">
                            <input className="form-control" placeholder="Enter Email" type="email" id="user_email" name="user_email"/>
                            <textarea onChange={(e) => handleTextOnChange(e)} value={msgContent} 
                                className="form-control" placeholder="Enter Message Here . . ." name="user_msg" id="user_msg" cols="30" rows="5">
                            </textarea>
                            <input className=" form-control" type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
                <div className="contentPage__data__footer__boxThree flex-column-center">
                    <img src="" alt="image"/>
                    <span>You want to know more About me?</span>
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
