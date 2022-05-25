/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { BsFacebook, BsWhatsapp, BsTwitter, BsPinterest } from "react-icons/bs";

const Cart = () => {
    const [getQuan, setQuan] = useState(1);
    const quanHandler = (e) => {
        setQuan(e.target.value);
    };
    return (
        <>
            <Layout>
                <div className="cart-box">
                    <div className="container">
                        <div className="cart-content">
                            <div className="cart-left">
                                <img
                                    src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="product"
                                />
                            </div>
                            <div className="cart-right">
                                <h4>I phone 13 pro max</h4>
                                <h2>$ 1200</h2>
                                <div className="cart-info">
                                    <p>Meterial - Phone</p>
                                    <p>Color - Black</p>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters
                                </p>
                                <div className="cart-quantity">
                                    <p>Quantity</p>
                                    <input
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={getQuan}
                                        onChange={quanHandler}
                                    />
                                </div>
                                <div className="cart-btn">
                                    <button>Add To Cart</button>
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
