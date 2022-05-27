import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Logo from "./../../assets/img/logo.png";

const Banner = () => {
    const siteInfoData = useSelector((state) => state.info.info);
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner-content">
                        <Link to="/">
                            <img src={siteInfoData.store_Logo} alt="Logo" />
                        </Link>
                        <div className="banner-info">
                            <h2>{siteInfoData.store_Name}</h2>
                            <p>{siteInfoData.store_Address_Line_1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
