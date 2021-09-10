import { Product } from "../../../../../../../redux/types/products";
import FoodMenuItem from "../food-menu-item/food-menu-item";

const hotDishes = (products: Product[]) => {
    return (
        <>
            {products.map(item =>
                <FoodMenuItem
                    key={`${Math.floor(Math.random() * (1 - 10000000 + 1)) + 100}`}
                    product={item}
                />
            )}
        </>
    );
};

export default hotDishes;