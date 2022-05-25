import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageRoute from "./routes/PageRoute";
import { updateLocalstoreCart } from "./store/features/productSlice";

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
            }
        }
    }, [dispatch, productData]);
    return (
        <>
            <PageRoute />
        </>
    );
};

export default App;
