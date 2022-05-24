import Logo from "./../../assets/img/logo.png";

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner-content">
                        <img src={Logo} alt="Logo" />
                        <div className="banner-info">
                            <h2>The Body Shop</h2>
                            <p>
                                Shop Number 34, New Alipore, 6, APC road, DumDum
                                Kolkata - 700009
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
