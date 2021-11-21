import React from 'react';
import "../styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="col-80">
            <h3>Let's connect!</h3>
            <div className="socials-container col-25">
                <a href="http://instagram.com/johnson.song" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/johnsonsong/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:johnsonsong@stanford.edu">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </footer>
    );
}

export default Footer