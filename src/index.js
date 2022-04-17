import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ThemeProvider from "@react_redux_course/context/ThemeProvider";
import { App } from "@react_redux_course/App";
import store from "@store/store";
import "@react_redux_course/styles/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
