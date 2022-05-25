import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Product from "../components/product/Product";

const Home = () => {
    const productData = useSelector((state) => state.product.products);
    return (
        <>
            <Layout>
                <div className="product-box">
                    {productData.map((item) => {
                        return (
                            <Link key={item.id} to={`cart/${item.id}`}>
                                <Product
                                    img={item.image}
                                    title={item.name}
                                    price={item.price}
                                />
                            </Link>
                        );
                    })}
                </div>
            </Layout>
        </>
    );
};

export default Home;
