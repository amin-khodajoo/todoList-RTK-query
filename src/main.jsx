import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App/App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
