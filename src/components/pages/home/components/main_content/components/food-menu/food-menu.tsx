import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import { fetchProducts } from "../../../../../redux/action-creators/products-action";
import { useTypedSelector } from "../../../../../redux/hooks/useTypedSelector";
import FoodMenuHeader from "./components/food-menu-header/food-menu-header";
import FoodMenuItem from "./components/food-menu-item/food-menu-item";

import "./food-menu.scss";

const FoodMenu = () => {
    const { products, loading, error } = useTypedSelector(state => state.products);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/home/hot-dishes") {
            dispatch(fetchProducts("hot-dishes"));
        }
    },        []);

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    } else if (error) {
        return <h1>{error}</h1>;
    }

    const foodItem = () => {
        return (
            <>
                {products.map(item =>
                    <FoodMenuItem
                        key={`${Math.floor(Math.random() * (1 - 10000000 + 1)) + 100}`}
                        product={item}
                    />
                )}
            </>
        );
    };

    const foodMenuHeader = () => {
        return <FoodMenuHeader title={location.pathname.replace("/home/", "")} />;
    };

    return (
        <div className="food-menu">
            <Route path="/home/:id" component={foodMenuHeader} />
            <div className="food-menu__items">
                <Route path="/:id" component={foodItem} />
            </div>
        </div>
    );
};

export default FoodMenu;