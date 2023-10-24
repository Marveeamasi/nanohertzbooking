import Nav from "../components/Nav";
import "../styles/Contact.css";

import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> NanoHertz|Contact </title>
            </Helmet>
            <div className="contact">
                <div className="contact-hero">
                    <Nav />
                </div>
                <section className="section-main">
                    <div className="section-a">
                        <p>Get In</p>
                        <span>Touch</span>
                        <p>With Us</p>
                    </div>
                    <div className="section-b">
                        <div className=" part part1">
                            <span>
                                Ada George <br /> Port Harcourt, Rivers State,
                                Nigeria.
                            </span>
                        </div>
                        <div className="part part2">
                            <a href="tel: +2348129905287">+2348129905287</a>
                        </div>
                        <div className="part part3">
                            <a href="mailto:nanohertziot@gmail.com">
                                nanohertziot@gmail.com
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
