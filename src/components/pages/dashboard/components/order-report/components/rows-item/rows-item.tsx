import "./rows-item.scss";

interface RowsItem {
    id: number;
    image: string;
    name: string;
    text: string;
    total: number;
    status_text: string;
    status_color: string;
    status_background: string;
}

type RowsItemProps = {
    rows_item: RowsItem;
};

const RowsItem = ({ rows_item }: RowsItemProps) => {
    return (
        <div className="rows-item">
            <span className="rows-item__customer">
                <img src={rows_item.image} className="rows-item__customer_image" />
                <strong className="rows-item__customer_name">{rows_item.name}</strong>
            </span>
            <p className="rows-item__menu_text">{rows_item.text}</p>
            <strong className="rows-item__total_payment">${rows_item.total}</strong>
            <div
                className="rows-item__status_text"
                style={{ color: `${rows_item.status_color}`, background: `${rows_item.status_background}` }}
            >
                {rows_item.status_text}
            </div>
        </div>
    );
};

export default RowsItem;