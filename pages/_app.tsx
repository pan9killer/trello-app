import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </Provider>
  );
}

export default MyApp;
