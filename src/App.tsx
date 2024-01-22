// import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    // <Suspense fallback={<Fallback />}>
    <RouterProvider
      router={routes}
      fallbackElement={<h1>Something went wrong</h1>}
    />
    // </Suspense>
  );
}

export default App;
