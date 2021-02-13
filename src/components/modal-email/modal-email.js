import React from 'react';

const modalEmail = ({ sendEmailTo, msgContent, handleTextOnChange }) => {
    return(
        <div className="modal-email">
            <div className="form-container">
                <span className = "form-container__title normal-1"> Want to talk? Message me here!</span>
                <form onSubmit={sendEmailTo}>
                    <input autoComplete="off" className="form__email normal-2" placeholder="Enter your email. . ." type="email" id="user_email" name="user_email"/>
                    <textarea onChange={(e) => handleTextOnChange(e)} value={msgContent} 
                        className="form__textArea form-control normal-1" placeholder="Message here..." name="user_msg" id="user_msg" cols="30" rows="5">
                    </textarea>
                    <input className="form__submit normal-2" type="submit" value="Send"/>
                </form>
            </div>
        </div>
    )
}

export default modalEmail;