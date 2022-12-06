import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { StyleProvider, ContextProvider } from "./providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <StyleProvider>
          <App />
        </StyleProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
