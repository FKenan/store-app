import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./context/CartContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Provider>
  </StrictMode>
);
// strictMode kullanırsak componentler iki kez render edilir.hata ayıklaması içinn
