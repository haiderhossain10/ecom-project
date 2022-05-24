/* eslint-disable jsx-a11y/anchor-is-valid */
import FooterLogo from "./../../assets/img/footer-logo.png";

const Footer = () => {
    console.log(FooterLogo);
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
                                    <a href="#">Home</a>
                                    <a href="#">About Us</a>
                                    <a href="#">Contact Us</a>
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
