import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FooterLogo from "./../../assets/img/footer-logo.png";

const Footer = () => {
    const siteInfoData = useSelector((state) => state.info.info);
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-about">
                            <h4>About The Body Shop</h4>
                            <p>{siteInfoData.store_Description} </p>
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
                                    <Link to="/about-us">About Us</Link>
                                    <p style={{ color: "white" }}>
                                        Contact Us: 1211
                                    </p>
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
