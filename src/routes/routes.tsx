import { createBrowserRouter } from "react-router-dom";
import { Login } from "./lazyLoading";
import AuthLayout from "@/layout/Auth/auth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/", element: <Login /> }]
  }
]);

export default routes;
