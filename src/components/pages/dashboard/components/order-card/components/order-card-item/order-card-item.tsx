import "./order-card-item.scss";

interface CardItem {
    icon: string;
    percent: string | number;
    arrow_img: string;
    number: string;
    text: string;
    color: string;
}

interface OrderCardItemProps {
    cardItem: CardItem;
}

const OrderCardItem = ({cardItem}: OrderCardItemProps) => {
    return (
        <div className="order-card-item">
            <div className="order-card-item__header">
                <span className="order-card-item__icon_wrapper">
                    <img className="order-card-item__icon" src={cardItem.icon} alt="card-item-icon" />
                </span>
                <strong className="order-card-item__percent" style={{color: `${cardItem.color}`}}>{cardItem.percent}%</strong>
                <img className="order-card-item__arrow" src={cardItem.arrow_img} alt="card-item-arrow" />
            </div>
            <article className="order-card-item__content">
                <strong className="order-card-item__number">{cardItem.number}</strong>
                <strong className="order-card-item__text">{cardItem.text}</strong>
            </article>
        </div>
    );
};

export default OrderCardItem;