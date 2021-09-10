import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import { fetchProducts } from "../../../../../redux/action-creators/products-action";
import { useTypedSelector } from "../../../../../redux/hooks/useTypedSelector";
import ProductManagementItem from "./components/product-management-item/product-management-item";

import "./product-management-items.scss";

const ProductManagementItems = () => {
    const { products, loading, error } = useTypedSelector(state => state.products);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/settings/management/hot-dishes") {
            dispatch(fetchProducts("hot-dishes"));
        }
    },        []);

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    } else if (error) {
        return <h1>{error}</h1>;
    }

    const ProductsItem = () => {
        return (
            <>
                {products.map(item => <ProductManagementItem key={item.id} product={item} />)}
            </>
        );
    };

    return (
        <div className="product-management-items">
            <Route path="/:id" component={ProductsItem} />
        </div>
    );
};

export default ProductManagementItems;