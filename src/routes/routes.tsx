import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, NotFound, ServerError, SignUp } from "./lazyLoading";
import AuthLayout from "@/layouts/Auth";
import MainLayout from "@/layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ServerError />,
    children: [{ path: "/", element: <Dashboard /> }]
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ServerError />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default routes;
