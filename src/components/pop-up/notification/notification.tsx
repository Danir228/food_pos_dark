import "./notification.scss";

interface OrdersNotificationProps {
    active: boolean;
}

export const OrdersNotification = ({ active }: OrdersNotificationProps) => {
    return (
        <div
            className={`${active ? "orders-notification orders-notification__active" : "orders-notification"}`}
        >
            The list of orders is empty
        </div>
    );
};