import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkEmpty, run_axios_api } from "./helper/utility";
import PageRoute from "./routes/PageRoute";
import {
    setProduct,
    updateLocalstoreCart,
    updateTotalPrice,
} from "./store/features/productSlice";

import { updateSiteInfo } from "./store/features/siteInfoSlice";

const App = () => {
    const productData = useSelector((state) => state.product.addedCart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productData.length === 0) {
            if (localStorage.getItem("addedCartItem") !== null) {
                const localstoreData = JSON.parse(
                    window.localStorage.getItem("addedCartItem")
                );
                dispatch(updateLocalstoreCart(localstoreData));
            } else {
                updateLocalstoreCart([]);
            }
        }
    }, [dispatch, productData]);

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
                    skip: 0,
                    shop_master_Id: "1",
                    store_Login_Id: "",
                    take: 1000,
                }
            );
            if (!checkEmpty(data.data)) {
                dispatch(setProduct(data.data));
            }
        };
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        const updateCal = () => {
            let total = 0;
            for (const product of productData) {
                const productTotal =
                    parseInt(product.product_Selling_Price) *
                    parseInt(product.is_active);
                total = total + productTotal;
            }
            dispatch(updateTotalPrice(total));
        };
        updateCal();
    }, [dispatch, productData]);

    useEffect(() => {
        const siteInfo = async () => {
            const data = await run_axios_api(
                "",
                `${process.env.REACT_APP_URL}/store/getdetails`,
                "POST",
                {
                    usrid: "U2FsdGVkX1/PlHsj03OnUxMYGWLWBNdupe0ErG/EI8o1lTgSXeTBgwqOPyZz4wlE",
                },
                {
                    store_login_Id: "mti2g0",
                    store_master_Id: 1,
                }
            );
            if (!checkEmpty(data.data)) {
                dispatch(updateSiteInfo(data.data));
            }
        };

        siteInfo();
    }, [dispatch]);

    return (
        <>
            <PageRoute />
        </>
    );
};

export default App;
