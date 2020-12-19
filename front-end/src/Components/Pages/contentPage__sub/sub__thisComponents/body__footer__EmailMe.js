import React from 'react'

const footer_emailMe = (props) =>{
    let sendEmailTo = props.sendEmailTo;
    let msgContent = props.msgContent;
    let handleTextOnChange = props.handleTextOnChange;

    return(
        <div className="boxTwo flex-column-center">
            <form onSubmit={sendEmailTo} className="boxTwo__contactMe__form w-100 font-content flex-column-center">
                <input autoComplete="off" className="form__email form-control border-radius" placeholder="Enter Email" type="email" id="user_email" name="user_email"/>
                <textarea onChange={(e) => handleTextOnChange(e)} value={msgContent} 
                    className="form__textArea form-control" placeholder="Enter Message Here" name="user_msg" id="user_msg" cols="30" rows="5">
                </textarea>
                <input className="form__submit" type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default footer_emailMe;