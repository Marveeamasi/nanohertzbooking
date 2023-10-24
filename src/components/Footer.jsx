import { TfiAngleDoubleLeft, TfiLinkedin } from "react-icons/tfi";
import "./Footer.css";
const Footer = () => {
    let top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="footer">
            <footer>
                <div className="main">
                    <div className="footer-1">
                        <div className="location">
                            <span>
                                Ada George <br /> Port Harcourt, Rivers State,
                                Nigeria.
                            </span>
                        </div>
                        <div className="phone">
                            <a href="tel: +2348129905287">+2348129905287</a>
                        </div>
                        <div className="mail">
                            <a href="mailto:nanohertziot@gmail.com">
                                nanohertziot@gmail.com
                            </a>
                        </div>
                        <div className="socials">
                            <a
                                target="blank"
                                href="https://www.linkedin.com/company/nanohertz-iot/"
                            >
                                <TfiLinkedin />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="footer-3">
                        <div className="top" onClick={top}>
                            <TfiAngleDoubleLeft />
                            <span>Back To Top</span>
                        </div>
                    </div>
                </div>
                <div className="final-footer">
                    <div className="copy">Copyright © NanoHertz 2023 </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
