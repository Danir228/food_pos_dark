import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../../../../../button/button";
import { fetchOrder } from "../../../../../../../redux/action-creators/order-action";
import { useTypedSelector } from "../../../../../../../redux/hooks/useTypedSelector";
import { Order, OrderProduct } from "../../../../../../../redux/types/order";
import { Product } from "../../../../../../../redux/types/products";

import "./food-menu-item.scss";

interface FoodMenuItemProps {
    product: Product;
}

const FoodMenuItem = ({ product }: FoodMenuItemProps) => {
    const { order } = useTypedSelector(state => state.order);
    const [stateTitle, setStateTitle] = useState(false);
    const [maxItem, setMaxItem] = useState(false);
    const [blurImage, showBlurImage] = useState('5px');
    const dispatch = useDispatch();
    const add = () => {
        const orderItems: Order = { products: order.products, total: order.total, count: order.count };
        if (orderItems.products.filter(x => x.id === product.id).length === 1) {
            setMaxItem(true);
            setTimeout(() => {
                setMaxItem(false);
            },         3000);
        }
        if (
            orderItems.products &&
            orderItems.products !== null &&
            orderItems.products.filter(x => x.id === product.id).length === 0
        ) {
            const orderProduct: OrderProduct = { ...product, quantity: 1 };
            orderItems.products.push(orderProduct);
            orderItems.count += 1;
            orderItems.total += product.price;
            dispatch(fetchOrder(orderItems));
        }
    };

    const title = () => {
        setStateTitle(!stateTitle);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            showBlurImage('0px');
        }, 1000);
        return () => clearTimeout(timer);

    },        []);

    return (
        <div className="food-menu-item">
            <div className="food-menu-item__wrapper">
                <img style={{filter: `blur(${blurImage})`}} className="food-menu-item__image" src={product.image} alt="item" />
                <h3 className="food-menu-item__name" onMouseEnter={() => title()} onMouseLeave={() => title()} >{product.name}</h3>
                <strong className="food-menu-item__price">$ {product.price}</strong>
                <p className="food-menu-item__text">{product.text}</p>
                <Button text="Add To Order" clname="food-menu-item__button" but_function={add} />
            </div>
            <div className={`${stateTitle ? "food-menu-item__name_modal active_name_modal" : "food-menu-item__name_modal"}`}>{product.name}</div>
            <div className={`${maxItem ? "food-menu-item__notification food-menu-item__notification_active" : "food-menu-item__notification"}`}>This item is already in the orders</div>
        </div>
    );
};

export default FoodMenuItem;