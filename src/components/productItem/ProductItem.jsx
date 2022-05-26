import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteCartItem,
    updateFinalQty,
} from "../../store/features/productSlice";

const ProductItem = ({ img, title, price, quantity, id }) => {
    const productData = useSelector((state) => state.product.addedCart);
    const dispatch = useDispatch();

    const [productQty, setProductQty] = useState(quantity);

    // delete item from cart
    const cartItemDelete = (e) => {
        const deleteItem = productData.filter(
            (item) => item.product_master_Id !== id
        );
        dispatch(deleteCartItem(deleteItem));
    };

    // qty increase
    const qtyUpHandler = (e) => {
        setProductQty(productQty + 1);
        dispatch(updateFinalQty({ id: e, quan: parseInt(productQty) + 1 }));
    };

    // qty dicrease
    const qtyDownHandler = (e) => {
        if (productQty > 1) {
            setProductQty(productQty - 1);
            dispatch(updateFinalQty({ id: e, quan: parseInt(productQty) - 1 }));
        }
    };
    return (
        <div className="product-item">
            <div className="product-img">
                <img src={img} alt="product" />
                <div className="product-info">
                    <h4>{title}</h4>
                    <p>&#8377; {price}</p>
                </div>
            </div>
            <div className="product-option">
                <div className="product-quantity">
                    <button
                        onClick={() => {
                            qtyDownHandler(id);
                        }}
                    >
                        -
                    </button>
                    <span>{productQty}</span>
                    <button
                        onClick={() => {
                            qtyUpHandler(id);
                        }}
                    >
                        +
                    </button>
                </div>
                <p>&#8377; {price * productQty}</p>
                <button
                    onClick={() => {
                        cartItemDelete(id);
                    }}
                >
                    <ImCross />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
