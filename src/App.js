import './Style.css';
import React, { useEffect,useState }from 'react'
import { gsap } from 'gsap';
import EmailJs from 'emailjs-com';

// components - pages
import LoadingPage from './Components/Pages/loadingPage.js';
import ContentPage from './Components/Pages/contentPage.js';

// components - animations
import LoadingPageAnimations from './Components/Animations/loadingPageAnimations.js';
import ContentPageAnimations from './Components/Animations/contentPageAnimations.js';

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
    // temporarily set value for testing
    // gsap.set(".loadingSVG", {display:"block", opacity: 1});
    // gsap.set(".loading__percent", {display:"block", opacity: 1});

    gsap.set("#loadingPageCont", {display:"none"});
    gsap.set("#contentPageCont", {display:"block", opacity: 1, y:"0"});

    ContentPageAnimations();
    // LoadingPageAnimations();
  
  },[])

  return (
    <div className="App">
      <div id="loadingPageCont">
        <LoadingPage/>
      </div>

      <div id="contentPageCont">
        <ContentPage
            // footer email me props
            handleTextOnChange = {handleTextOnChange}
            msgContent ={msgContent}
            sendEmailTo = {sendEmailTo}
        />
      </div> 
      
    </div>
  );
}

export default App;
