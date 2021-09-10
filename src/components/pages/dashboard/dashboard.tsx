import Header from "../components/header/header";
import MostOrdered from "./components/most-ordered/most-ordered";
import MostTypeOfOrder from "./components/most-type-of-order/most-type-of-order";
import OrderCard from "./components/order-card/order-card";
import OrderReport from "./components/order-report/order-report";

import "./dashboard.scss";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__column_1">
                <Header headerClass="dashboard__header" title="Dasboard" forms={false} />
                <OrderCard />
                <OrderReport />
            </div>
            <div className="dashboard__column_2">
                <MostOrdered />
                <MostTypeOfOrder />
            </div>
        </div>
    );
};

export default Dashboard;