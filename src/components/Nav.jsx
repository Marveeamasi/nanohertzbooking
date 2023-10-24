import { useState, useEffect } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const { pathname: activePage } = useLocation();

    return (
        <nav
            style={{
                backgroundColor: scrollPosition > 50 ? "#fff" : "transparent",
                transition: "background-color 300ms ease-in-out",
            }}
        >
            <div className="nav-holder-1">
                <Link to="/" className="logo">
                    <div className="logo"> </div>
                </Link>
            </div>
            <div className={`nav-holder-2 ${isOpen ? "is-active" : ""}`}>
                <div className="navbar-close" onClick={toggleNavbar}>
                    <HiX />
                </div>
                <ul>
                    <Link to="/">
                        <li className={activePage === "/" ? "active" : ""}>
                            Home
                        </li>
                    </Link>
                    <Link to="/About">
                        <li className={activePage ===
                            "/About" ? "active" : ""}>
                            About Us
                        </li>
                    </Link>
                    <Link to="/Service">
                        <li
                            className={
                                activePage === "/Service" ? "active" : ""
                            }
                        >
                            Services
                        </li>
                    </Link>
                    <Link to="/Contact">
                        <li
                            className={
                                activePage === "/Contact" ? "active" : ""
                            }
                        >
                            Contact
                        </li>
                    </Link>
                    <Link to="/Book" className="contactPP">
                        <li>Book a Meeting</li>
                    </Link>
                </ul>
            </div>
            <div
                className={`nav-holder-3 ${isOpen ? "is-active" : ""}`}
                onClick={toggleNavbar}
            >
                {isOpen ? <HiX /> : <HiMenuAlt1 />}
            </div>
            <Link to="/Book" className="contactP">
                <span>Book a Meeting</span>
            </Link>
        </nav>
    );
};

export default Nav;
