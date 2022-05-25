import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductItem from "../components/productItem/ProductItem";

const ViewCart = () => {
    const productData = useSelector((state) => state.product.addedCart);

    return (
        <div>
            <Layout>
                <div className="view-cart">
                    <div className="container">
                        <div className="view-cart-content">
                            <div className="view-cart-left">
                                {productData.length !== 0 ? (
                                    productData.map((item, index) => {
                                        return (
                                            <ProductItem
                                                key={index}
                                                img={
                                                    item.product_Thumbnail_Image_Url
                                                }
                                                title={item.product_Title}
                                                price={
                                                    item.product_Selling_Price
                                                }
                                                quantity={item.is_active}
                                            />
                                        );
                                    })
                                ) : (
                                    <>
                                        <div className="product-empty">
                                            <h2>
                                                Total cart :(0), Cart is Empty!
                                            </h2>
                                            <Link to="/">
                                                <button>Back</button>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="view-cart-right"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ViewCart;
