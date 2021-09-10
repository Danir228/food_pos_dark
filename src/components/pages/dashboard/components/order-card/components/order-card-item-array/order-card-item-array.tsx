import arrow_up from "../../../../images/arrow-up.svg";
import arrow_down from "../../../../images/arrow-down.svg";
import coin from "../../../../images/coin.svg";
import order from "../../../../images/order.svg";
import customer from "../../../../images/customer.svg";

export const orderCardItemArray = [
    {
        id: 1,
        icon: `${coin}`,
        percent: "+32.40",
        arrow_img: `${arrow_up}`,
        number: "$10,243.00",
        text: "Total Revenue",
        color: "#50D1AA"
    },
    {
        id: 2,
        icon: `${order}`,
        percent: "-12.40",
        arrow_img: `${arrow_down}`,
        number: "23,456",
        text: "Total Dish Ordered",
        color: "#FF7CA3"
    },
    {
        id: 3,
        icon: `${customer}`,
        percent: "+2.40",
        arrow_img: `${arrow_up}`,
        number: "1,234",
        text: "Total Customer",
        color: "#50D1AA"
    },
];