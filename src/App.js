import './dist/css/style.css';
import React, { useEffect,useState } from 'react'
import EmailJs from 'emailjs-com';

function App() { 

  // states - set msg text empty
  const [msgContent, setMsgContent] = useState('');

  // Send Email using EmailJS
  const sendEmailTo = (e) =>{
    e.preventDefault();

    const getInputEmail = document.getElementById("user_email").value;

    if(getInputEmail == ""){
      alert('Email is Empty!');
      return;
    }
    else if(msgContent == ""){
      alert('Message is Empty!');
      return;
    }
    EmailJs.sendForm('service_u42oleh', 'template_tyjup4j', e.target, 'user_gr1f018CTjT0uaHTHKdiV')
      .then((result) => {
          if(result.text == 'OK'){
            setMsgContent("");
            alert('Message Sent!');
          }else{
            alert('Message Failed!');
          }
      }, (error) => {
          alert(error.text);
      });
  }

  const handleTextOnChange = (e) => {
    setMsgContent(e.target.value)
  }

  useEffect(() =>{
    
  },[])

  return (
    <div className="App">

      <div id="contentPageCont">
        <ContentPage
            handleTextOnChange = {handleTextOnChange}
            msgContent = {msgContent}
            sendEmailTo = {sendEmailTo}
        />
      </div> 
    </div>
  );
}

export default App;
