import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./Components/Context/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
  <ContextProvider >
      <App />
    </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
