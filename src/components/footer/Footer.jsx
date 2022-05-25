import { Link } from "react-router-dom";
import FooterLogo from "./../../assets/img/footer-logo.png";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-about">
                            <h4>About The Body Shop</h4>
                            <p>
                                In publishing and graphic design, Lorem ipsum is
                                a placeholder text commonly used to demonstrate
                                the visual.
                            </p>
                        </div>
                        <div className="footer-logo">
                            <h4>© Powered By</h4>
                            <img src={FooterLogo} alt="footer logo" />
                        </div>
                        <div className="footer-support">
                            <h4>Useful Links</h4>
                            <nav>
                                <div className="footer-nav">
                                    <Link to="/">Home</Link>
                                    <Link to="/">About Us</Link>
                                    <Link to="/">Contact Us</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
