import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { helperStore } from "../helper/helperStore";
import { checkEmpty, run_axios_api } from "../helper/utility";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        // console.log(formData);
        const formAllData = {
            f_name: formData.firstName,
            l_name: formData.lastName,
            reg_Type: "USERAPP",
            country_code: formData.countryCode,
            mobile: formData.number,
            email: formData.email,
            store_name: formData.storeName,
            refer_code: formData.referCode,
            password: formData.password,
        };
        const data = await run_axios_api(
            "",
            `${process.env.REACT_APP_URL}/user/registration`,
            "POST",
            {},
            formAllData
        );

        if (!checkEmpty(data)) {
            const store = new Object();
            store.data = data;
            store.mobile = formData.number;
            helperStore("userInfo", store);
            return navigate("/verify");
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
                        <h2>Signup Page</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("firstName", {
                                        required: "First name is required!",
                                    })}
                                    placeholder="First Name"
                                />
                                <span>{errors.firstName?.message}</span>
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("lastName", {
                                        required: "Last name is required!",
                                    })}
                                    placeholder="Last Name"
                                />
                                <span>{errors.lastName?.message}</span>
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("countryCode")}
                                    value="+99"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="number"
                                    {...register("number", {
                                        required: "Phone is required!",
                                    })}
                                    placeholder="Mobile"
                                />
                                <span>{errors.number?.message}</span>
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required!",
                                    })}
                                    placeholder="Enter Email"
                                />
                                <span>{errors.email?.message}</span>
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("storeName", {
                                        required: "Store Name is required!",
                                    })}
                                    placeholder="Store Name"
                                />
                                <span>{errors.storeName?.message}</span>
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    {...register("referCode")}
                                    placeholder="Refer Code"
                                />
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
                            <button>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
