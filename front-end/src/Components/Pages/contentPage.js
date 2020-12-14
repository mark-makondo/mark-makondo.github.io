import React from 'react'

// sub components
import ContentPage__navbar from './contentPage__sub/contentPage__navbar.js';
import ContentPage__data__body from './contentPage__sub/contentPage__data__body.js';
import ContentPage__data__footer from './contentPage__sub/contentPage__data__footer.js';

const contentPage = (props) =>{
    let sendEmailTo = props.sendEmailTo;
    let msgContent = props.msgContent;
    let handleTextOnChange = props.handleTextOnChange;

    return(
        <div className="contentPageBox">
            <ContentPage__navbar/>

            <div className="contentPage__data">
                <div className="contentPage__data__children flex-column-center">
                    <ContentPage__data__body/>
                    <ContentPage__data__footer
                        handleTextOnChange = {handleTextOnChange}
                        msgContent ={msgContent}
                        sendEmailTo = {sendEmailTo}
                    />
                </div>
            </div>    
        </div>
    )
}

export default contentPage;