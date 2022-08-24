import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// assets
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/svg/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const Contact = () => {
    const [isSending, setIsSending] = useState<boolean>(false);

    const onMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        const CURRENT_FORM = e.target as HTMLFormElement;

        const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
        const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;
        const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, CURRENT_FORM, PUBLIC_KEY).then(
            () => {
                setIsSending(false);
                alert('Message sent successfully');
            },
            (error) => alert(error.text),
        );
    };

    return (
        <div className="pf-contact">
            <div className="pf-contact__header">
                <div className="pf-contact__header-title">
                    <h1 className="attention-color">{`Let's Talk`}</h1>
                    <div className="pf-contact__header-circles no-attention-color">
                        <div className="w-100">
                            <a
                                title="Goto My Facebook"
                                href="https://www.facebook.com/markalbert.d.makondo"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FacebookIcon />
                            </a>
                        </div>
                        <div className="w-100">
                            <a
                                title="Goto My Linkedin"
                                href="https://www.linkedin.com/in/mark-makondo/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedinIcon />
                            </a>
                        </div>
                        <div className="w-100">
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
                </div>
                <p className="no-attention-color">
                    <i>
                        If you want to contact me, directly email me or fill out the form and I will get back at you
                        promptly.
                    </i>
                </p>
            </div>
            <form className="pf-contact__form" onSubmit={(e) => onMessageSend(e)}>
                <input type="email" name="user_email" placeholder="youreemail@mail.com" required />
                <textarea
                    name="message"
                    cols={30}
                    rows={5}
                    placeholder="type something if you want..."
                    required
                ></textarea>
                <div className="pf-contact__form-btn">
                    <button type="submit" className="btn-custom btn-custom-primary">
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                    <span>to</span>
                    <u className="no-attention-color">
                        <a href="mailto:markalbert.makondo@gmail.com">markalbert.makondo@gmail.com</a>
                    </u>
                </div>
            </form>
        </div>
    );
};

export default Contact;
