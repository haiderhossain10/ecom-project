import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { helperStore } from "../helper/helperStore";
import { checkEmpty, run_axios_api } from "../helper/utility";
import { checkAuth } from "../store/features/authSlice";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        // console.log(formData);
        const formAllData = {
            mobile: formData.number,
            login_type: "USERAPP",
            password: formData.password,
        };
        const data = await run_axios_api(
            "",
            `${process.env.REACT_APP_URL}/user/login`,
            "POST",
            {},
            formAllData
        );

        if (!checkEmpty(data)) {
            helperStore("logged", data);

            dispatch(checkAuth(true));
            return navigate("/");
        } else {
            console.log("no data");
        }
    };
    return (
        <>
            <Header
                headerStyle={{ backgroundColor: "#222", position: "unset" }}
            />
            <div className="form-box">
                <div className="container">
                    <div className="form-content">
                        <h2>Login Page</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <div className="form-control">
                                <input
                                    type="text"
                                    {...register("countryCode")}
                                    value="+99"
                                />
                            </div> */}
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("number", {
                                        required: "Phone is required!",
                                    })}
                                    placeholder="Mobile"
                                />
                                <span>{errors.number?.message}</span>
                            </div>
                            <div className="form-control">
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required!",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be at least 6 characters",
                                        },
                                    })}
                                    placeholder="Password"
                                />
                                <span>{errors.password?.message}</span>
                            </div>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
