import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Product from "../components/product/Product";
import { checkHelperStore, getHelperStore } from "../helper/helperStore";
import { checkEmpty, run_axios_api } from "../helper/utility";
import { updateUserInfo } from "../store/features/siteInfoSlice";

const Home = () => {
    const productData = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    // store user info
    useEffect(() => {
        const userInfo = async () => {
            if (checkHelperStore("logged")) {
                const storeUserInfo = getHelperStore("logged");

                const data = await run_axios_api(
                    "",
                    `${process.env.REACT_APP_URL}/user/basicdata`,
                    "GET",
                    {
                        usrid: storeUserInfo.user_id,
                    },
                    {}
                );
                if (!checkEmpty(data.data)) {
                    console.log(data.data);
                    dispatch(updateUserInfo(data.data));
                }
            }
        };
        userInfo();
    }, [dispatch]);

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
