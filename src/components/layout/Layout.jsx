import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Banner />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
