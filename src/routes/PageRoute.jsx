import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Verify from "../pages/Verify";
import ViewCart from "../pages/ViewCart";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const PageRoute = () => {
    const authData = useSelector((state) => state.auth.isAuth);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart/:id" element={<Cart />} />
                <Route path="/view-cart" element={<ViewCart />} />
                {/* <Route element={<PrivateRoute isLogged={authData} />}></Route> */}
                <Route element={<PublicRoute isLogged={authData} />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/verify" element={<Verify />} />
                </Route>
            </Routes>
        </>
    );
};

export default PageRoute;
