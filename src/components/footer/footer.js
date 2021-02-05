import React from 'react';

// assets
import {ReactComponent as Logo} from '../../assets/svg/footer-logo.svg';
import {ReactComponent as Arrow} from '../../assets/svg/footer-arrow.svg';

// components
import Email from '../email/email_container.js';

const Footer = () => {
    return(
        <section className="footer" id="contact">
            <div className="footer__cont">
                <div className="footer__cont-top">
                    <div className="footer__cont-logo"><Logo/></div>
                    <div className="footer__cont-contact">
                        <div className="footer__cont-contact-icons">
                            <a href="https://www.github.com/mark-makondo"><i className="fab fa-github"/></a>
                            <a href="https://www.linkedin.com/in/mark-makondo/"><i className="fab fa-linkedin-in"/></a>
                            <a href="https://www.facebook.com/markalbert.d.makondo/"><i className="fab fa-facebook"/></a>
                        </div>
                        <span className="normal-1">markalbert.makondo@gmail.com</span>
                    </div>
                </div>
                <div className="footer__cont-bottom">
                    <div className="footer__cont-email"><Email/></div>
                </div>
     
                <a className="quick footer__cont-arrow" href="0"><Arrow/></a>
               
            </div>
        </section>
    )
}

export default Footer;