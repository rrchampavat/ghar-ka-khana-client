import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "./ui/components/toast/toaster";
import useDarkMode from "use-dark-mode";

const RootComponent = () => {
  const { value: isDarkMode } = useDarkMode(false);

  return (
    // <React.StrictMode>
    <NextUIProvider>
      <main
        className={`${isDarkMode ? "dark" : ""} bg-background text-foreground`}
      >
        <Toaster />
        <App />
      </main>
    </NextUIProvider>
    // </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<RootComponent />);
