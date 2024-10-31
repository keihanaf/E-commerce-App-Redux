import {TbChecklist} from "react-icons/tb";
import {FaHashtag} from "react-icons/fa6";
import {BsPatchCheck} from "react-icons/bs";
import styles from "./BasketSidebar.module.css";
import {useDispatch} from "react-redux";
import {checkOut} from "../features/cart/cartSlice.js";

function BasketSidebar({state}) {
    const dispatch = useDispatch()
    return (
        <div className={styles.sidebar}>
            <div>
                <TbChecklist/>
                <p>Total:</p>
                <span>{state.total} $</span>
            </div>
            <div>
                <FaHashtag/>
                <p>Quantity:</p>
                <span>{state.itemsCounter}</span>
            </div>
            <div>
                <BsPatchCheck/>
                <p>Status:</p>
                <span>{!state.checkOut && "Pending..."}</span>
            </div>
            <button onClick={() => dispatch(checkOut())}>Checkout</button>
        </div>
    )
}

export default BasketSidebar;
