import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchProducts } from "../../../../../redux/action-creators/products-action";
import { ArrayMenu } from "./components/array-menu";

import "./menu.scss";

interface MenuProps {
    textreplace: string;
    arrayMenu: ArrayMenu[];
}

const Menu = ({ textreplace, arrayMenu }: MenuProps) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const fetchMenu = (url: string) => {
        const res = url.replace(textreplace, "");
        dispatch(fetchProducts(res));
    };
    return (
        <div className="menu">
            <ul className="menu__list">
                {arrayMenu.map(item =>
                    <li
                        key={`${Math.floor(Math.random() * (1 - 10000000 + 1)) + 100}`}
                        className={location.pathname !== `${item.url}` ? "menu__list_item" : "menu__list_item menu__active"}
                        onClick={() => fetchMenu(item.url)}
                    >
                        <Link
                            to={`${item.url}`}
                            className="menu__list_href"
                        >
                            {item.text}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Menu;