import React from 'react';
//assets
import Profile from '../../assets/img/dev-pic.jpg';

const profile = () => {
    return(
        <section className="profile normal-2">
            <div className="profile__cont">
                <div className="profile__cont__info">
                    <span>mark makondo</span>
                    <span>front-end web developer</span>
                </div>
                <img src={Profile} alt="Profile Picture"/>
                <button>contact</button>
            </div>
            <div className="profile__contact">
                  <a href="#">@<span>facebook</span></a>
                  <a href="#">@<span>github</span></a>
                  <a href="#">@<span>linkedin</span></a>
                </div>
        </section>
    )
}

export default profile;