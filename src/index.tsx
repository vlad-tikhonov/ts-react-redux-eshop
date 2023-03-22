import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./app/App";
import { ApiTokenHandler } from "components";
import { YMaps } from "@pbe/react-yandex-maps";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <YMaps>
      <App />
      <ApiTokenHandler />
    </YMaps>
  </Provider>
);
