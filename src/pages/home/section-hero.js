import React from 'react';

// assets
import Hero from '../../assets/img/hero-image.png';
import {ReactComponent as Arrow} from '../../assets/svg/arrow-art.svg';

// components
import Status from '../../components/status/status.js';

const hero = (props) => {
    let statusColor = props.statusColor;
    let statusText = props.statusText;

    return(
        <section className="hero">
            <div className="hero__cont">
                <picture className="hero__cont__img">
                    <img src={Hero} alt="Hero Logo"/>
                    <Status 
                        statusColor = {statusColor}
                        statusText = {statusText}    
                    />
                </picture>
                <div className="hero__cont__body">
                    <h2> Being able to design &amp; create something is fun.</h2>
                    <div className="hero__cont__info">
                        <span className="normal-1">mark albert d. makondo</span>
                        <span className="normal-2">front-end web developer</span>
                    </div>
                    <div className="hero__cont__buttons normal-2">
                        <span>@status</span>
                        <span className="active">@projects</span>
                    </div>
                </div>
                
            </div>
            <div className="hero__arrow"><Arrow/></div>
            <div className="hero__bottom">
            </div>
        </section>
    )
}

export default hero;