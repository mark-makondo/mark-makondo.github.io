import React, { useEffect, useState } from 'react';
import EmailJs from 'emailjs-com';

//component ui
import ModalEmailUI from './modal-email.js';

//utils
import Query from '../../helper/query.js';

const ModalEmailContainer = ({ isActive, setIsActive }) => {
    
    const [msgContent, setMsgContent] = useState('');

    //#region EmailJs Event Handlers
    const emailJs_init = async (target) => {
        try {
            let email = await EmailJs.sendForm('service_u42oleh', 'template_tyjup4j', target.target, 'user_gr1f018CTjT0uaHTHKdiV');

            if(email.text === 'OK'){
                setMsgContent("");
                alert('Message Sent!');
            }else{
                alert('Message Failed!');
            }
        } catch (error) {
            alert(error.response.data.message);
        }
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
    //#endregion

    //#region Modal Event Handler - 
    const isModalActive = (isActive) => {

        let modalEmail =  Query.modalEmail();

        if(isActive){
            modalEmail.classList.add('active');
        }else{
            modalEmail.classList.remove('active');
        }

        modalEmail.addEventListener('click', (e) => {
            if(e.target === modalEmail){
                setIsActive(false);
            }
        })

    } //if is active is true from the profile section it fires
    //#endregion
    
    useEffect(() => {
        isModalActive(isActive);

    }, [isActive])
    
    return(
        <ModalEmailUI
            handleTextOnChange = {handleTextOnChange}
            msgContent = {msgContent}
            sendEmailTo = {sendEmailTo}
        />
    )
}

export default ModalEmailContainer