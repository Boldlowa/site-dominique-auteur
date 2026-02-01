import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LivresProvider } from "./utils/livresContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LivresProvider>
      <App />
    </LivresProvider>
  </BrowserRouter>
);