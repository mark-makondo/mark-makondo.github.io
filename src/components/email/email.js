import React from 'react'

const Email = (props) => {
    let sendEmailTo = props.sendEmailTo;
    let msgContent = props.msgContent;
    let handleTextOnChange = props.handleTextOnChange;
    
    return(
        <div className="email">
             <form onSubmit={sendEmailTo}>
                <input autoComplete="off" className="form__email normal-2" placeholder="Enter your email. . ." type="email" id="user_email" name="user_email"/>
                <textarea onChange={(e) => handleTextOnChange(e)} value={msgContent} 
                    className="form__textArea form-control normal-0" placeholder="Message here..." name="user_msg" id="user_msg" cols="30" rows="5">
                </textarea>
                <input className="form__submit normal-2" type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default Email;