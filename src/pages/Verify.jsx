import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    checkHelperStore,
    getHelperStore,
    helperStore,
} from "../helper/helperStore";
import { checkEmpty, run_axios_api } from "../helper/utility";
import { checkAuth } from "../store/features/authSlice";

const Verify = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        if (checkHelperStore("userInfo")) {
            const storeData = getHelperStore("userInfo");
            console.log(storeData.data.encrypt_customer_id);
            // console.log(id);
            const data = await run_axios_api(
                "",
                `${process.env.REACT_APP_URL}/user/verifymobile`,
                "POST",
                {
                    usrid: storeData.data.encrypt_customer_id,
                },
                {
                    mobile: storeData.mobile,
                    otp: formData.otp,
                }
            );
            if (!checkEmpty(data)) {
                if (data.status === "success") {
                    helperStore("logged", data);
                    dispatch(checkAuth(true));
                    return navigate("/");
                } else {
                    alert(data.message);
                }
            }
        }
    };

    return (
        <div className="verify-box">
            <div className="container">
                <div className="verify-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input
                                type="text"
                                {...register("otp", {
                                    required: "OTP is required!",
                                })}
                                placeholder="OTP"
                            />
                            <span>{errors.otp?.message}</span>
                        </div>
                        <button>Verify</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Verify;
