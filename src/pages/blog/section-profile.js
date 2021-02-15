import React from 'react';

//assets
import Profile from '../../assets/img/dev-pic.jpg';

//components
import ModalEmail from '../../components/modal-email/modal-email-container.js';

const profile = ({ clickContactHandler, isActive, setIsActive}) => {
    return(
        <section className="profile normal-2">
            <div className="profile__cont">
                <div className="profile__cont__info">
                    <span>mark makondo</span>
                    <span>front-end web developer</span>
                </div>
                <img src={Profile} alt="Owner Profile"/>
                <button className="normal-2" onClick = {() => clickContactHandler()}>contact</button>
            </div>
            <div className="profile__contact">
                <a href="https://www.facebook.com/markalbert.d.makondo/">@<span>facebook</span></a>
                <a href="https://www.github.com/mark-makondo">@<span>github</span></a>
                <a href="https://www.linkedin.com/in/mark-makondo/">@<span>linkedin</span></a>
            </div>

            <ModalEmail
                isActive = {isActive}
                setIsActive = {setIsActive}
            />

        </section>
    )
}

export default profile;