import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Banner />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
