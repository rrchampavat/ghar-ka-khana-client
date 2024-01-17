import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import Fallback from "./ui/components/fallback";

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={routes} fallbackElement={<Fallback />} />
    </Suspense>
  );
}

export default App;
