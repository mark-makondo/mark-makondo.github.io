import React from 'react';

const body__aboutOne = () =>{
    return(
        <div className="body__aboutOne flex-column-center">
            <span className="body__aboutOne__title font-title">Front-End Web Developer</span>
            <hr className="custom-hr-about"/>
            <p className="body__aboutOne__desc font-content">
               <q> I build and try random things that can improve my skills. </q> 
            </p>
            
            <div className="btn__getStarted">
                Get Started <span className="btn__arrow">&#8594;</span>
            </div>
        </div>
    )
}

export default body__aboutOne;