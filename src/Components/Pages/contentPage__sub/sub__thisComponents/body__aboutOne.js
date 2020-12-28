import React from 'react';

const body__aboutOne = () =>{
    return(
        <div className="body__aboutOne flex-column-center"id="getStarted">
            <span className="body__aboutOne__title font-title">Front-End Web Developer</span>
            <hr className="custom-hr-about"/>
            <p className="body__aboutOne__desc font-content">
               <q> I build and try random things that can improve my skills. </q> 
            </p>
            
            <div className="btn__getStarted font-title" >
                <a href="">Get Started</a>
                <i className="fas fa-arrow-right btn__arrow"></i>
            </div>
        </div>
    )
}

export default body__aboutOne;