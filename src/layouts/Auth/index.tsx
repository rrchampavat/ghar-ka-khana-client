import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useDarkMode from "use-dark-mode";

const AuthLayout = () => {
  const isAuthenticated = !!Cookies.get("accessToken");
  const { value: isDarkMode } = useDarkMode(false);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <main
      className={`${isDarkMode ? "dark" : ""} bg-background text-foreground`}
    >
      <Outlet />
    </main>
  );
};

export default AuthLayout;
