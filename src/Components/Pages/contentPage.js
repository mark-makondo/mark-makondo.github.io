import React from 'react'

// sub components
import ContentPage__navbar from './contentPage__sub/contentPage__navbar.js';
import ContentPage__data__body from './contentPage__sub/contentPage__data__body.js';

const contentPage = (props) =>{
    // about two
    let gif = props.gif;
    //  footer email me props
    let sendEmailTo = props.sendEmailTo;
    let msgContent = props.msgContent;
    let handleTextOnChange = props.handleTextOnChange;

    return(
        <div className="contentPageBox">
            {/* <ContentPage__navbar/> */}

            <div className="contentPage__data flex-column-center">
                <ContentPage__data__body
                    // about Two
                    gif = {gif}
                    // email 
                    handleTextOnChange = {handleTextOnChange}
                    msgContent ={msgContent}
                    sendEmailTo = {sendEmailTo}
                />
            </div>    
        </div>
    )
}

export default contentPage;