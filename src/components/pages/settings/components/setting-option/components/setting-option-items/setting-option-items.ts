import appereance from "../../images/appereance.svg";
import restaurant from "../../images/restaurant.svg";
import discount from "../../images/discount.svg";
import notification from "../../images/notification.svg";
import security from "../../images/security.svg";
import about_us from "../../images/about-us.svg";

export const SettingOptionItems = [
    {
        id: 1,
        image: `${appereance}`,
        title: "Appereance",
        text: "Dark and Light mode, Font size",
        url: "/settings/appereance",
        url2: ""
    },
    {
        id: 2,
        image: `${restaurant}`,
        title: "Your Restaurant",
        text: "Dark and Light mode, Font size",
        url: "/settings/restaurant",
        url2: ""
    },
    {
        id: 3,
        image: `${discount}`,
        title: "Products Management",
        text: "Manage your product, pricing, etc",
        url: "/settings/management",
        url2: "/hot-dishes"
    },
    {
        id: 4,
        image: `${notification}`,
        title: "Notifications",
        text: "Customize your notifications",
        url: "/settings/s-notifications",
        url2: ""
    },
    {
        id: 5,
        image: `${security}`,
        title: "Security",
        text: "Configure Password, PIN, etc",
        url: "/settings/security",
        url2: ""
    },
    {
        id: 6,
        image: `${about_us}`,
        title: "About Us",
        text: "Find out more about Posly",
        url: "/settings/about_us",
        url2: ""
    },
];