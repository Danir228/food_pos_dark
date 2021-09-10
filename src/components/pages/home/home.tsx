import FoodMenu from "./components/main_content/components/food-menu/food-menu";
import HomeHeader from "./components/main_content/components/home-header/home-header";
import Orders from "./components/orders/orders";

import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <HomeHeader />
                <FoodMenu />
            </div>
            <Orders
                title="Orders №-"
            />
        </div>
    );
};

export default Home;