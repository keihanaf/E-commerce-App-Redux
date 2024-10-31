// import {useProducts} from "../context/ProducContext.jsx";
import styles from "../pages/ProductsPage.module.css"
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchProducts} from "../features/product/productSlice.js";
import { filterProducts, searchProducts,getInitialQuery} from "../helpers/helper.js";
import {useSearchParams} from "react-router-dom";
import SearchBox from "../components/SearchBox.jsx";
import Sidebar from "../components/Sidebar.jsx";


function ProductsPage() {
    const dispatch = useDispatch()
    const {products,loading} = useSelector((store) => store.product)
    console.log(products)

    const [search, setSearch] = useState("");
    const [displayed, setDisplayed] = useState([]);
    const [query, setQuery] = useState({});

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    useEffect(() => {
        setDisplayed(products)

        setQuery(getInitialQuery(searchParams))
    }, [products])

    useEffect(() => {
        setSearchParams(query)
        setSearch(query.search || "")
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);

        setDisplayed(finalProducts)
    },[query])


    return (
        <>
            <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
            <div className={styles.container}>
                <div className={styles.products}>
                    {loading && <Loader id="loader" />}
                    {displayed.map((product) => (
                        <Card key={product.id} data={product} />
                    ))}
                </div>
                <Sidebar query={query} setQuery={setQuery} />
            </div>
        </>
    )
}
export default ProductsPage;