import React from 'react';

const body__aboutOne = () =>{
    return(
        <div className="body__aboutOne flex-column-center"id="getStarted">
            <div className="aboutOne__info">
                <span className="body__aboutOne__title font-title">Web Developer</span>
                <hr className="custom-hr-about"/>
                <span className="body__aboutOne__desc font-content">
                <q> Testing leads to failure, and failure leads to understanding. </q>
                <figcaption><cite>-Burt Rutan </cite></figcaption>
                </span>
            </div>
            <div className="btn__getStarted font-title" >
                <a href="">Get Started</a>
                <i className="fas fa-arrow-right btn__arrow"></i>
            </div>
        </div>
    )
}

export default body__aboutOne;