import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app/app";
import { store } from "./components/pages/redux/store/store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
