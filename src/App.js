import './Style.css';
import React, { useEffect,useState } from 'react'
import EmailJs from 'emailjs-com';

// components - pages
// import LoadingPage from './Components/Pages/loadingPage.js';
import ContentPage from './Components/Pages/contentPage.js';

// components - animations
// import LoadingPageAnimations from './Components/Animations/loadingPageAnimations.js';
import ContentPageAnimations from './Components/Animations/contentPageAnimations.js';

// images
import gif from './Collection/omni-with-img-filtered.gif';

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
    
    ContentPageAnimations();
    // LoadingPageAnimations();
  
  },[])

  return (
    <div className="App">
      {/* <div id="loadingPageCont">
        <LoadingPage/>
      </div> */}

      <div id="contentPageCont">
        <ContentPage
            // about two 
            gif = {gif}
            // footer email me props
            handleTextOnChange = {handleTextOnChange}
            msgContent = {msgContent}
            sendEmailTo = {sendEmailTo}
        />
      </div> 
    </div>
  );
}

export default App;
