import { checkEmpty, run_axios_api } from "./utility";

const payStore = async (paymentId) => {
    const data = await run_axios_api(
        "",
        `${process.env.REACT_APP_URL}/payment/submitstatus`,
        "POST",
        {
            usrid: "",
        },
        {
            razorpay_checkout_Request_JSON: "",
            razorpay_payment_id: paymentId,
            razorpay_signature: "",
            razorpay_payment_Error_JSON: "",
            razorpay_Order_Id: "",
            general_customer_Id: "",
            general_customer_Name: "",
            store_Id: "",
        }
    );

    if (!checkEmpty(data)) {
        alert("Order Placed Successfully");
    } else {
        console.log("no data");
    }
};

export default payStore;
