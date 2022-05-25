import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Product from "../components/product/Product";

const Home = () => {
    return (
        <>
            <Layout>
                <div className="product-box">
                    <Link to="/cart">
                        <Product />
                    </Link>
                    <Link to="/cart">
                        <Product />
                    </Link>
                    <Link to="/cart">
                        <Product />
                    </Link>
                    <Link to="/cart">
                        <Product />
                    </Link>
                    <Link to="/cart">
                        <Product />
                    </Link>
                    <Link to="/cart">
                        <Product />
                    </Link>
                    <Link to="/cart">
                        <Product />
                    </Link>
                    <Link to="/cart">
                        <Product />
                    </Link>
                </div>
            </Layout>
        </>
    );
};

export default Home;
