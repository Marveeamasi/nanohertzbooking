import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/About.css";

import { Link } from "react-router-dom";

import image1 from "../images/About1.webp";
import image2 from "../images/About2.webp";

import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="about">
            <Helmet>
                <meta charSet="utf-8" />
                <title> NanoHertz|About </title>
            </Helmet>
            <div className="about-hero">
                <Nav />
                <div className="about-main-hero">
                    <h2>About-Us</h2>
                    <p>
                        Our dedication to reliability, tailored solutions, and
                        visionary thinking sets us apart. When you partner with
                        NanoHertz-IoT, you choose a brighter future for your
                        business.
                    </p>
                    <div className="hero-btn">
                        <Link to="/Contact">
                            <div className="custom-btn btn-13">Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="section-2-about">
                <div className="section-a">
                    <div className="title">NanoHertz-IoT</div>
                    <div className="text">
                        At NanoHertz-IoT Technologies, we are driven by a
                        singular vision—to pioneer tomorrows connectivity today.
                        Our journey is defined by innovation, and our mission is
                        to empower businesses of all sizes with visionary IoT
                        hardware solutions. With expertise in hardware design
                        and comprehensive services, we craft seamless
                        connectivity that bridges the physical and digital
                        realms.
                    </div>
                </div>
                <div className="section-b">
                    <img src={image1} alt="" />
                </div>
            </section>
            <section className="section-3-about">
                <div className="section-a">
                    <div className="text">
                        We envision a future where IoT solutions empower
                        businesses with transformative connectivity. Our mission
                        is to lead this evolution by crafting innovative
                        hardware, delivering comprehensive services, and
                        transforming data into actionable insights, driving
                        efficiency, innovation, and growth today and tomorrow.
                    </div>
                </div>
            </section>
            <section className="section-4-about">
                <div className="section-a">
                    <img src={image2} alt="" />
                </div>
                <div className="section-b">
                    <div className="title">Why Us?</div>
                    <div className="text">
                        At NanoHertz-IoT Technologies, we are not just a
                        technology provider; we are your strategic partner in
                        success. Businesses choose to work with us because we
                        offer more than just IoT solutions; we offer expertise,
                        innovation, and a commitment to your growth. With our
                        cutting-edge hardware, comprehensive services, and
                        data-driven insights, we empower you to transform your
                        operations, enhance efficiency, and stay ahead of the
                        competition.
                    </div>
                </div>
            </section>
            <section className="section-3-home">
                <div className="main-3">
                    <div className="text">
                        We are not just engineers; we are innovators. Our team
                        is dedicated to pushing the boundaries of technology,
                        crafting solutions that redefine what is possible.
                    </div>
                    <Link to="/Contact">
                        <div className="custom-btn btn-13">Contact Us</div>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
