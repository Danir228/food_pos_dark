import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Home from "../pages/home/home";
import Logout from "../pages/logout/logout";
import Settings from "../pages/settings/settings";
import Sidebar from "../sidebar/sidebar";

import "./app.scss";
import "./reset.scss";

const App = () => {
    return (
        <div className="app">
            <div className="app__container">
                <Router>
                    <Sidebar />
                    <div className="app__content">
                        <Route path="/home" component={Home} />
                        <Redirect from="/home" to="/home/hot-dishes" />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/logout" component={Logout} />
                    </div>
                </Router>
            </div>
        </div>
    );
};

export default App;