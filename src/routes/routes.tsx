import { createBrowserRouter } from "react-router-dom";
import { Login, NotFound, ServerError, SignUp } from "./lazyLoading";
import AuthLayout from "@/layout/Auth/auth";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ServerError />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default routes;
