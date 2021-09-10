import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchProducts } from "../../../../../../../redux/action-creators/products-action";
import { productManagementArray } from "../../../product-management-array/product-management-array";

const ProductManagementMenu = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const fetchProduct = (url: string) => {
        const res = url.replace("/settings/management/", "");
        dispatch(fetchProducts(res));
    };

    return (
        <div className="menu">
            <ul className="menu__list">
                {productManagementArray.map(item =>
                    <li
                        key={`${Math.floor(Math.random() * (1 - 10000000 + 1)) + 100}`}
                        className={location.pathname !== `${item.url}` ? "menu__list_item" : "menu__list_item menu__active"}
                        onClick={() => fetchProduct(item.url)}
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

export default ProductManagementMenu;