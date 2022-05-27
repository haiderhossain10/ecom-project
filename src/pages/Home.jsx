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
                            <Link
                                key={item.product_master_Id}
                                to={`cart/${item.product_master_Id}`}
                            >
                                <Product
                                    img={item.product_Thumbnail_Image_Url}
                                    title={item.product_Title}
                                    price={item.product_Selling_Price}
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
