import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ViewCart from "../pages/ViewCart";

const PageRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/cart/:id" element={<Cart />} />
                <Route path="/view-cart" element={<ViewCart />} />
            </Routes>
        </>
    );
};

export default PageRoute;
