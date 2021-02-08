import React from 'react';

// assets
import HeroImage from '../../assets/img/hero-image.png';
import {ReactComponent as Arrow} from '../../assets/svg/arrow-art.svg';

// components
import Status from '../../components/status/status.js';

const hero = (props) => {
    let statusColor = props.statusColor;
    let statusText = props.statusText;

    return(
        <section className="hero" id="hero">
            <div className="hero__cont">
                <picture className="hero__cont__img">
                    <img src={HeroImage} alt="Hero Logo"/>
                    <Status 
                        statusColor = {statusColor}
                        statusText = {statusText}    
                    />
                </picture>
                <div className="hero__cont__body">
                    <h2> Being able to design &amp; create something is fun.</h2>
                    <div className="hero__cont__info">
                        <span className="normal-0">mark albert d. makondo</span>
                        <span className="normal-2">front-end web developer</span>
                    </div>
                    <div className="hero__cont__buttons normal-2">
                        <span className="btn-status">@status</span>
                        <span><a className="quick" href="#project">@projects</a></span>
                        <span className="active"><a className="quick" href="#contact">@contact</a></span>
                    </div>
                </div>
            </div>
            <a href="#skill" className="quick hero__arrow"><Arrow/></a>
            <div className="hero__bottom">
            </div>
        </section>
    )
}

export default hero;