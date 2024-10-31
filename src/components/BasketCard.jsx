import {shortenText} from "../helpers/helper.js";
import {MdDeleteOutline} from "react-icons/md";
import styles from "./BasketCard.module.css";
import {useDispatch} from "react-redux";
import {decrease, increase, removeItem} from "../features/cart/cartSlice.js";


function BasketCard({product}) {
    const {image, title, quantity} = product
    const dispatch = useDispatch();

    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <p>{shortenText(product.title)}</p>
            <div className={styles.actions}>
                {quantity === 1 && (<button onClick={() => dispatch(removeItem(product))}><MdDeleteOutline/></button>)}
                {quantity > 1 && (<button onClick={() => dispatch(decrease(product))}> - </button>)}
                <span>{quantity}</span>
                <button onClick={() => dispatch(increase(product))}> + </button>
            </div>
        </div>
    )
}
export default BasketCard