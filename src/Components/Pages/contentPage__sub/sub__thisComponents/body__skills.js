import React from 'react';

const body__skils = () =>{

    return(
        <div className="body__skills flex-column-center bodyC" id="body-skills">
            <div className="g-body-cont">
                <div className="rect__skills__cont">
                    
                    <div className="skill__box" id="box1_cont">
                        <svg className="v__rects" id="v_rect_svg01" viewBox="0 0 47.5 182.5"><defs><linearGradient id="theGradientRect01" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#fc4848"/><stop offset="0%" stopColor="#ffffff00"/></linearGradient></defs><g id="rect__cont"><rect className="rects__path" id="rect__01" x="0.25" y="0.25" width="47" height="182" fill="url(#theGradientRect01)"/></g></svg>
                        <span className="skill__text font-content"> Basic </span>
                    </div>
                  
                    <div className="skill__box" id="box1_cont">
                       
                        <svg className="v__rects" id="v_rect_svg02" viewBox="0 0 47.5 182.5"><defs><linearGradient id="theGradientRect02" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#fc4848"/><stop offset="0%" stopColor="#ffffff00"/></linearGradient></defs><g id="rect__cont"><rect className="rects__path" id="rect__01" x="0.25" y="0.25" width="47" height="182" fill="url(#theGradientRect02)"/></g></svg>
                        <span className="skill__text font-content"> React </span>
                    </div>
                   
                    <div className="skill__box" id="box1_cont">
                        <svg className="v__rects" id="v_rect_svg03" viewBox="0 0 47.5 182.5"><defs><linearGradient id="theGradientRect03" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#fc4848"/><stop offset="0%" stopColor="#ffffff00"/></linearGradient></defs><g id="rect__cont"><rect className="rects__path" id="rect__01" x="0.25" y="0.25" width="47" height="182" fill="url(#theGradientRect03)"/></g></svg>
                        <span className="skill__text font-content"> Laravel </span>
                    </div>

                    <div className="skill__box" id="box1_cont">
                        
                        <svg className="v__rects" id="v_rect_svg04" viewBox="0 0 47.5 182.5"><defs><linearGradient id="theGradientRect04" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#fc4848"/><stop offset="0%" stopColor="#ffffff00"/></linearGradient></defs><g id="rect__cont"><rect className="rects__path" id="rect__01" x="0.25" y="0.25" width="47" height="182" fill="url(#theGradientRect04)"/></g></svg>
                        <span className="skill__text font-content"> MongoDB </span>
                    </div>

                    <div className="skill__box" id="box1_cont">
                        <svg className="v__rects" id="v_rect_svg05" viewBox="0 0 47.5 182.5"><defs><linearGradient id="theGradientRect05" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#fc4848"/><stop offset="0%" stopColor="#ffffff00"/></linearGradient></defs><g id="rect__cont"><rect className="rects__path" id="rect__01" x="0.25" y="0.25" width="47" height="182" fill="url(#theGradientRect05)"/></g></svg>
                        <span className="skill__text font-content"> MySQL </span>
                    </div>
                </div>
                <div className="skill__desc">
                    <div className="skill__basic s-border">
                        <div className="skill__title font-title">
                            <span>Html, CSS, JavaScript (Basics)</span>
                            <span className="skill__divider"> - </span>
                            <span className="skill__perc" id="skill__perc1">0%</span>
                            <hr/>
                        </div>
                        <div className="skill__description font-content">
                            <p>
                                Learning this skill is easy, because they are just the basics and also
                                the documentation is very well done and easy to understand. It's been a 
                                while now ever since I started web development. And I always use this, 
                                that's why I am very comfortable with it now.
                            </p>
                        </div>
                    </div>
                    <div className="skill__react s-border">
                        <div className="skill__title font-title">
                            <span>React</span>
                            <span className="skill__divider"> - </span>
                            <span className="skill__perc" id="skill__perc2">0%</span>
                            <hr/>
                        </div>
                        <div className="skill__description font-content">
                            <p>
                                This is the reason why I am now comfortable with using JavaScript
                                and I also had a alot of fun when I'm using ReactJs. And It is now
                                my main framework whenever I build a Project. I am planning on 
                                switching to TypeScript soon.
                            </p>
                        </div>
                    </div>
                    <div className="skill__laravel s-border">
                        <div className="skill__title font-title">
                            <span>Laravel</span>
                            <span className="skill__divider"> - </span>
                            <span className="skill__perc" id="skill__perc3">0%</span>
                            <hr/>
                        </div>
                        <div className="skill__description font-content">
                            <p>
                                This is the first framework that I learned, since It is the one that
                                I used during my OJT. I am not very proficient with it.
                                But I understand on how It works and on how to use it with PHP.
                            </p>
                        </div>
                    </div>
                    <div className="skill__mongodb s-border">
                        <div className="skill__title font-title">
                            <span>MongoDB</span>
                            <span className="skill__divider"> - </span>
                            <span className="skill__perc" id="skill__perc4">0%</span>
                            <hr/>
                        </div>
                        <div className="skill__description font-content">
                            <p>
                                This is the current database that I am currently learning and using. It is
                                my first time using a NoSQL database since I always use MySQL. I kinda
                                like this database that's why I switched to it.
                            </p>
                        </div>
                    </div>
                    <div className="skill__mysql s-border">
                        <div className="skill__title font-title">
                            <span>MYSQL</span>
                            <span className="skill__divider"> - </span>
                            <span className="skill__perc" id="skill__perc5">0%</span>
                            <hr/>
                        </div>
                        <div className="skill__description font-content">
                            <p>
                                I am quite comfortable with this since It is the one that I always use 
                                before I started using mongoDB. This is also the one that I used during
                                college days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default body__skils;