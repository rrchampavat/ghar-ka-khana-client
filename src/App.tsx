// import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Suspense } from "react";
import Fallback from "./ui/layouts/fallback";

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={routes} fallbackElement={<Fallback />} />/
    </Suspense>
  );
}

export default App;
