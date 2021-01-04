import React from 'react';

const body__aboutTwo = (props) =>{
    let gif = props.gif;

    return(
        <div className="body__aboutTwo flex-column-center bodyC" id="body-aboutTwo">
            <div className="g-body-cont">
                <span className="body__aboutTwo__title font-title">Hello,</span>
                <p className="body__aboutTwo__desc font-content">
                    I am a web developer that focuses on front-end and back-end development. But right now
                    my skill set on front-end is greater than back-end. Thinking on how to build a website is fun and 
                    also at the same time quite challenging, which is the reason why it is very interesting. 
                    I've been trying a lot of stuff which never completed. This portfolio is the first project that 
                    I completed using React. I'm using gsap3 on the animation which is very fun to use. 
                    I hope you like the things that you see, you can tell me the feedback on the footer section.
                </p>

                <div className="about__logo">
                    <img className="responsive-image" src={gif} alt="image here"/>
                </div>

            </div>
        </div>
    )
}

export default body__aboutTwo;