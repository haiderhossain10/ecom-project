import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductItem from "../components/productItem/ProductItem";
import { checkHelperStore } from "../helper/helperStore";

const ViewCart = () => {
    const productData = useSelector((state) => state.product.addedCart);
    const subTotal = useSelector((state) => state.product.subTotal);
    const shipping = useSelector((state) => state.product.shipping);

    const navigate = useNavigate();

    const buyHandler = () => {
        if (!checkHelperStore("logged")) {
            return navigate("/login");
        }
        var options = {
            key: process.env.REACT_APP_KEY,
            key_secret: process.env.REACT_APP_KEY_SECRET,
            amount: (subTotal + shipping) * 100,
            currency: "INR",
            name: "STARTUP_PROJECTS",
            description: "for testing purpose",
            handler: function (response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: "Haider Hosain",
                email: "haiderhossain11@gmail.com",
                contact: "+8801882930500",
            },
            notes: {
                address: "Razorpay Corporate office",
            },
            theme: {
                color: "#3399cc",
            },
        };
        var pay = new window.Razorpay(options);
        pay.open();
    };

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
                                                id={item.product_master_Id}
                                            />
                                        );
                                    })
                                ) : (
                                    <>
                                        <div className="product-empty">
                                            <h2>Your cart is empty!</h2>
                                            <Link to="/">
                                                <button>Back</button>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                            {subTotal !== 0 && (
                                <>
                                    <div className="view-cart-right">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td>{subTotal}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>{shipping}</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>
                                                        <p>Total</p>
                                                        <span>
                                                            Tax Included
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {subTotal + shipping}
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <button
                                            id="rzp-button1"
                                            onClick={buyHandler}
                                        >
                                            Check Out
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default ViewCart;
