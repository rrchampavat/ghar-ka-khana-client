import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "./ui/components/toast/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <NextUIProvider>
    <Toaster />
    <App />
  </NextUIProvider>
  // </React.StrictMode>
);
