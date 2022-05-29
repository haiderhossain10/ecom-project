import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isLogged }) => {
    return isLogged ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
