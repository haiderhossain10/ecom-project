import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Product from "../components/product/Product";

const Home = () => {
    const productData = useSelector((state) => state.product.products);
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("page"));

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
                <Link to="/?page=1">1</Link>
            </Layout>
        </>
    );
};

export default Home;
