/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { BsFacebook, BsWhatsapp, BsTwitter, BsPinterest } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../store/features/productSlice";
import { checkEmpty, run_axios_api } from "../helper/utility";

const Cart = () => {
    const param = useParams();

    const productData = useSelector((state) => state.product.products);
    const addedProduct = useSelector((state) => state.product.addedCart);
    const dispatch = useDispatch();

    const [getProductDetails, setProductDetails] = useState([]);
    const [getQuan, setQuan] = useState(1);

    const singleProduct = productData.filter((item) => {
        return parseInt(item.product_master_Id) === parseInt(param.id);
    });

    const quanHandler = (e) => {
        setQuan(e.target.value);
        dispatch(updateQuantity({ id: param.id, quan: parseInt(getQuan) + 1 }));
    };

    const addToCartHandler = () => {
        dispatch(addToCart(singleProduct[0]));
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await run_axios_api(
                "",
                `${process.env.REACT_APP_URL}/product/details`,
                "POST",
                {
                    usrid: "U2FsdGVkX1/PlHsj03OnUxMYGWLWBNdupe0ErG/EI8o1lTgSXeTBgwqOPyZz4wlE",
                },
                {
                    product_master_Id: param.id,
                    shop_master_Id: 1,
                }
            );
            if (!checkEmpty(data.data)) {
                setProductDetails(data.data);
                console.log(data.data);
            }
        };
        fetchData();
    }, [param.id]);

    console.log(getProductDetails);

    return (
        <>
            <Layout>
                <div className="view-cart-btn">
                    <Link to="/view-cart">
                        <button>View Cart ({addedProduct.length})</button>
                    </Link>
                </div>
                <div className="cart-box">
                    <div className="container">
                        <div className="cart-content">
                            <div className="cart-left">
                                <img
                                    src={
                                        getProductDetails.product_Thumbnail_Image_Url
                                    }
                                    alt="product"
                                />
                            </div>
                            <div className="cart-right">
                                <h4>{getProductDetails.product_Title}</h4>
                                <h2>
                                    &#8377;
                                    {(
                                        parseInt(
                                            getProductDetails.product_Selling_Price
                                        ) * getQuan
                                    ).toFixed(2)}
                                </h2>
                                <div className="cart-info">
                                    <p>Meterial - Phone</p>
                                    <p>Color - Black</p>
                                </div>
                                <p>
                                    {
                                        getProductDetails.product_Description_Short
                                    }
                                </p>
                                <div className="cart-quantity">
                                    <p>Quantity</p>
                                    <input
                                        type="number"
                                        min="1"
                                        value={getQuan}
                                        onChange={quanHandler}
                                    />
                                </div>
                                <div className="cart-btn">
                                    <button onClick={addToCartHandler}>
                                        Add To Cart
                                    </button>
                                    <button>Buy Now</button>
                                </div>
                                <div className="product-share">
                                    <a href="#">
                                        <BsFacebook />
                                    </a>
                                    <a href="#">
                                        <BsWhatsapp />
                                    </a>
                                    <a href="#">
                                        <BsTwitter />
                                    </a>
                                    <a href="#">
                                        <BsPinterest />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Cart;
