import { lazy } from "react";

// AUTH
export const Login = lazy(() => import("../pages/login"));
export const SignUp = lazy(() => import("../pages/register"));

// ERROR
export const NotFound = lazy(() => import("../pages/error/404"));
export const ServerError = lazy(() => import("../pages/error/500"));
