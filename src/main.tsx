import ReactDOM from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import "@mantine/core/styles.css";
import { Toaster } from "./ui/components/toast/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <MantineProvider>
    <Toaster />
    <App />
  </MantineProvider>
  // </React.StrictMode>
);
