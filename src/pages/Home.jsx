import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Home.css";
import image1 from "../images/homeA.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
    const Services = [
        {
            name: "IOT SOLUTIONS",
            image: "img",
            description:
                "We specialize in crafting IoT solutions that cater to the unique demands , commercial, and industrial domains. Whether you're seeking to enhance everyday life, boost operational efficiency, or drive industrial innovation.",
            id: crypto.randomUUID(),
        },
        {
            name: "IOT SERVICES",
            image: "img2",
            description:
                "We are here to empower your business with connectivity that drives efficiency, innovation, and growth. Discover how our comprehensive services can transform your IoT journey..",
            id: crypto.randomUUID(),
        },
    ];

    return (
        <div className="home">
            <Helmet>
                <meta charSet="utf-8" />
                <title> NanoHertz </title>
            </Helmet>
            <div className="hero">
                <Nav />
                <div className="main-hero">
                    <h2>NanoHertz-IoT</h2>
                    <p>
                        We are rewriting the future of connectivity, one
                        innovation at a time. Our mission is to empower
                        businesses, both small and large, with cutting-edge IoT
                        solutions that seamlessly bridge the gap between
                        physical and digital worlds.
                    </p>
                    <div className="hero-btn">
                        <Link to="/Contact">
                            <div className="custom-btn btn-13">Contact Us</div>
                        </Link>
                        <Link to="/About">
                            <div className="custom-btn btn-13">About Us</div>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="section-2-home">
                <div className="section-2-a">
                    <div className="title">NanoHertz-IoT</div>
                    <div className="text">
                        At NanoHertz-IoT Technologies, we are pioneers of
                        tomorrows connectivity. We specialize in designing
                        cutting-edge IoT hardware that forms the backbone of
                        transformative solutions. Our mission is to empower
                        businesses with visionary IoT technology that seamlessly
                        bridges the gap between the physical and digital worlds.
                    </div>
                    <Link to="/About">
                        <div className="custom-btn btn-13">Read More</div>
                    </Link>
                </div>
                <div className="section-2-b">
                    <img src={image1} alt="pic" />
                </div>
            </section>
            <section className="section-1-home">
                <div className="section-1-a">
                    <div className="header">OUR SERVICES</div>
                    <div className="text">
                        Discover a world of IoT services that elevate your
                        business. From innovative hardware design to
                        comprehensive connectivity solutions, we are shaping the
                        future at NanoHertz-IoT Technologies.
                    </div>
                    <div className="section-1-c">
                        <Link to="/Service">
                            <div className="custom-btn btn-13">Read More</div>
                        </Link>
                    </div>
                </div>

                <div className="section-1-b">
                    {Services.map((service) => (
                        <Link
                            className="container"
                            key={service.id}
                            to="/service"
                        >
                            <div className={service.image}></div>
                            <div className="name">{service.name}</div>
                            <div className="descrip">{service.description}</div>
                        </Link>
                    ))}
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

export default Home;
