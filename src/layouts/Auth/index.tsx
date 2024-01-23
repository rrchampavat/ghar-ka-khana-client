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
      className={`${
        isDarkMode ? "dark" : ""
      } grid h-screen items-center bg-background text-foreground md:grid-cols-4 lg:grid-cols-5`}
    >
      <Outlet />
    </main>
  );
};

export default AuthLayout;
