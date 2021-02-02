import React, { useState } from 'react';
import EmailJs from 'emailjs-com';
import EmailUi from './email.js';

const EmailContainer = () => {

    // states - set msg text empty
    const [msgContent, setMsgContent] = useState('');

    const emailJs_init = (target) => {
        EmailJs.sendForm('service_u42oleh', 'template_tyjup4j', target.target, 'user_gr1f018CTjT0uaHTHKdiV')
            .then((result) => {
                if(result.text === 'OK'){
                    setMsgContent("");
                    alert('Message Sent!');
                }else{
                    alert('Message Failed!');
                }
            }, (error) => {
                alert(error.text);
            }
        );
    }// initialize emailjs

    const sendEmailTo = (e) =>{
        e.preventDefault();

        const getInputEmail = document.getElementById("user_email").value;

        if(getInputEmail === ""){
            alert('Email is Empty!');
            return;
        }else if(msgContent === ""){
            alert('Message is Empty!');
            return;
        }

        emailJs_init(e);
    }// send email using emailjs

    const handleTextOnChange = (e) => {
        setMsgContent(e.target.value)
    }// event handler on change

    return(
        <EmailUi
            handleTextOnChange = {handleTextOnChange}
            msgContent = {msgContent}
            sendEmailTo = {sendEmailTo}
        />
    )
}

export default EmailContainer;