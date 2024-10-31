import BasketCard from "../components/BasketCard.jsx";
import BasketSidebar from "../components/BasketSidebar.jsx";
import styles from "./CheckoutPage.module.css"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { MdRemoveShoppingCart } from 'react-icons/md';

function CheckoutPage() {
    const state = useSelector((store) => store.cart)
    const navigate = useNavigate();

    if (!state.itemsCounter) {
        return (
            <div className={styles.emptyCartContainer}>
                <div className={styles.emptyCartContent}>
                    <div className={styles.iconWrapper}>
                        <MdRemoveShoppingCart className={styles.emptyCartIcon} />
                    </div>
                    <h2 className={styles.emptyCartTitle}>Your cart is feeling lonely</h2>
                    <p className={styles.emptyCartMessage}>
                        It looks like you haven't added anything to your cart yet.
                        Let's change that!
                    </p>
                    <button className={styles.continueShopping} onClick={() => navigate('/')}>
                        <span className={styles.buttonText}>Discover Amazing Products</span>
                        <span className={styles.buttonIcon}>→</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <BasketSidebar state={state} />
            <div className={styles.products}>{state.selectedItems.map((product) => (
                <BasketCard key={product.id} product={product} />
            ))}</div>
        </div>
    )
}
export default CheckoutPage
