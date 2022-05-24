import Layout from "../components/layout/Layout";
import Product from "../components/product/Product";

const Home = () => {
    return (
        <div>
            <Layout>
                <div className="product-box">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </Layout>
        </div>
    );
};

export default Home;
