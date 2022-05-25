import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Product from "../components/product/Product";
import { checkEmpty, run_axios_api } from "../helper/utility";
import { setProduct } from "../store/features/productSlice";

const Home = () => {
    const productData = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const data = await run_axios_api(
                "",
                `${process.env.REACT_APP_URL}/product/getallproductbystore`,
                "POST",
                {
                    usrid: "U2FsdGVkX1/PlHsj03OnUxMYGWLWBNdupe0ErG/EI8o1lTgSXeTBgwqOPyZz4wlE",
                },
                {
                    product_list_type: "ALL",
                    skip: 5,
                    shop_master_Id: "1",
                    store_Login_Id: "",
                    take: 5,
                }
            );
            if (!checkEmpty(data.data)) {
                dispatch(setProduct(data.data));
            }
        };
        fetchData();
    }, []);
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
