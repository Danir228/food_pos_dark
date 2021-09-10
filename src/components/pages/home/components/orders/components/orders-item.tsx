import { useDispatch } from "react-redux";
import { mathRound } from "../../../../provider/math-options";
import { fetchOrder } from "../../../../redux/action-creators/order-action";
import { useTypedSelector } from "../../../../redux/hooks/useTypedSelector";
import { Order, OrderProduct } from "../../../../redux/types/order";
import Button from "./images/Button.svg";

import "./orders-item.scss";

interface OrdersItemProps {
    product: OrderProduct;
}

const OrdersItem = ({ product }: OrdersItemProps) => {
    const { order } = useTypedSelector(state => state.order);
    const productTotal = order.products.filter(x => x.id === product.id)[0];
    const dispatch = useDispatch();

    const remove = () => {
        const orderItems: Order = { products: order.products, total: order.total, count: order.count };
        orderItems.products = orderItems.products.filter(x => x.id !== product.id);
        orderItems.total = order.total - (product.price * product.quantity);
        dispatch(fetchOrder(orderItems));
    };

    const quantityModify = (isincrease: boolean) => {
        if (product.quantity >= 1) {
            const orderItems: Order = { products: order.products, total: order.total, count: order.count };
            let price = 0;
            orderItems.products = orderItems.products.map(item => {
                if (item.id === product.id && (isincrease || !isincrease && item.quantity > 1)) {
                    item = {
                        ...item,
                        quantity: isincrease ? item.quantity + 1 : item.quantity - 1
                    };
                    price = item.price;
                } else {
                    item = {
                        ...item
                    };
                }
                return item;
            });
            if (price !== 0) {
                if (isincrease) {
                    orderItems.count += 1;
                    orderItems.total += price;
                } else {
                    orderItems.count -= 1;
                    orderItems.total -= price;
                }
            }
            dispatch(fetchOrder(orderItems));
        }
    };

    return (
        <div className="orders-item">
            <div className="orders-item__name">
                <div className="orders-item__food">
                    <img className="orders-item__food_image" src={product.image} alt="food" />
                    <article className="orders-item__food_information">
                        <div className="orders-item__food_title">
                            <h3 className="orders-item__food_subtitle">{product.name}</h3>
                            <strong className="orders-item__food_title_price">$ {product.price}</strong>
                        </div>
                        <div className="orders-item__buttons">
                            <div className="orders-item__add" onClick={() => quantityModify(true)} title="add more">
                                +
                            </div>
                            <div className="orders-item__remove" onClick={() => quantityModify(false)} title="remove">
                                -
                            </div>
                        </div>
                        <div className="orders-item__current">{productTotal.quantity}</div>
                        <span className="orders-item__food_price">$ {mathRound(productTotal.quantity * productTotal.price, 100)}</span>
                    </article>
                </div>
            </div>
            <form className="orders-item__note">
                <input className="orders-item__note_input" placeholder="Order Note..." />
                <img className="orders-item__note_button" src={Button} alt="button" onClick={() => remove()} />
            </form>
        </div>
    );
};

export default OrdersItem;