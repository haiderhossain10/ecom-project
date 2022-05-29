import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { removeStoreHandler } from "../../helper/helperStore";
import { checkAuth } from "../../store/features/authSlice";

const Header = ({ headerStyle }) => {
    const authData = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        removeStoreHandler("userInfo");
        removeStoreHandler("logged");
        dispatch(checkAuth(false));
        return <Navigate to="/" />;
    };
    return (
        <div className="header-box" style={headerStyle}>
            <div className="container">
                <div className="header-content">
                    <div className="header-nav">
                        {authData ? (
                            <>
                                <button
                                    onClick={logoutHandler}
                                    className="btn-logout"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
