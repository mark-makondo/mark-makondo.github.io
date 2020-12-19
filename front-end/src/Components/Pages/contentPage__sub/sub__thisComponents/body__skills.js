import React from 'react';

const body__skils = () =>{
    return(
        <div className="body__skills flex-column-center bodyC" id="body-skills">
    
            <div className="body__skills__title font-title flex-column-center">
                <img src="" alt="x"/>
                <span>Web Developer Skills</span>
            </div>

            <div className="body__skills__content font-content">
                <p>
                    I like web development and been trying a lot of type ever since 
                    and planning to make several mini projects that can showcase them
                    and train them to at its fullest.
                </p>

                <div className="body__skills__content__design">
                    <span className="">Designing The Page</span>
                    <ul className="flex-row-center">
                        <li>|Css|</li>
                        <li>|Bootstrap|</li>
                        <li>|JQuery|</li>
                        <li>|JavaScript|</li>
                    </ul>
                </div>

                <div className="body__skills__content__framework">
                    <span className="">Framework That I Use</span>
                    <ul className="flex-row-center">
                        <li>|ReactJS|</li>
                        <li>|Laravel|</li>
                    </ul>
                </div>
                
                <div className="body__skills__content__database">
                    <span className="">Database That I Use</span>
                    <ul className="flex-row-center">
                        <li>|MongoDB|</li>
                        <li>|MYSQL|</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default body__skils;