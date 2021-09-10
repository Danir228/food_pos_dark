import { orderCardItemArray } from "./components/order-card-item-array/order-card-item-array";
import OrderCardItem from "./components/order-card-item/order-card-item";

import "./order-card.scss";

const OrderCard = () => {
    return (
        <div className="order-card">
            {orderCardItemArray.map(item =>
                <OrderCardItem key={item.id} cardItem={item} />
            )}
        </div>
    );
};

export default OrderCard;