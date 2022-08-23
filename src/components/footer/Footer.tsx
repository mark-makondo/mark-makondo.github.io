import React from 'react';
import { SectionProps } from '../../types/common.type';

// assets
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const Footer: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="pf-footer no-attention-color bg-color2">
            <div className="pf-footer-icon-main">
                <Logo />
            </div>

            <div className="pf-footer__right">
                <div className="pf-footer__right-icons">
                    <div className="pf-footer-icon">
                        <a
                            title="Goto My Facebook"
                            href="https://www.facebook.com/markalbert.d.makondo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookIcon />
                        </a>
                    </div>
                    <div className="pf-footer-icon">
                        <a
                            title="Goto My Linkedin"
                            href="https://www.linkedin.com/in/mark-makondo/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedinIcon />
                        </a>
                    </div>
                    <div className="pf-footer-icon">
                        <a
                            title="Goto My Github"
                            href="https://github.com/mark-makondo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GithubIcon />
                        </a>
                    </div>
                </div>
                <div className="pf-footer__right-email">
                    <a href="mailto:markalbert.makondo@gmail.com">markalbert.makondo@gmail.com</a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
