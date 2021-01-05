import React from 'react';

const body__aboutTwo = (props) =>{
    let gif = props.gif;

    return(
        <div className="body__aboutTwo flex-column-center bodyC" id="body-aboutTwo">
            <div className="g-body-cont">
                <span className="body__aboutTwo__title font-title">Hello!</span>
                <p className="body__aboutTwo__desc font-content">
                    I am a web developer that focuses on front-end and back-end development. I am enthusiastic
                    about learning web development and toook the chance to study it to widen my knowledge. I enjoy
                    building websites; it is interesting and challenging. The library I'm using in making
                    the animation of my website is gsap3. You can send me your feedback through the footer
                    section. I hope to hear from you soon!
                </p>

                <div className="about__logo">
                    <img className="responsive-image" src={gif} alt="image here"/>
                </div>

            </div>
        </div>
    )
}

export default body__aboutTwo;