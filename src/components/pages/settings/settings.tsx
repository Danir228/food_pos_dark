import { Redirect, Route } from "react-router-dom";
import ProductManagement from "./components/product-management/product-management";
import SettingOption from "./components/setting-option/setting-option";
import "./settings.scss";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings__sidebar">
                <h2 className="settings__title">Settings</h2>
                {/* <Route path="/settings/:id" component={SettingOption} /> */}
                <SettingOption />
            </div>
            <div className="settings__content">
                <Route path="/settings/management" component={ProductManagement} />
                <Redirect from="/settings" to="/settings/management/hot-dishes" />
                {/* <ProductManagement /> */}
            </div>
        </div>
    );
};

export default Settings;