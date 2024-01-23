import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useDarkMode from "use-dark-mode";
import { useEffect } from "react";

const AuthLayout = () => {
  const isAuthenticated = !!Cookies.get("accessToken");
  const { value: isDarkMode } = useDarkMode(false);

  useEffect(() => {
    if (isDarkMode) {
      document
        .getElementsByTagName("div")[1]
        ?.classList.add("bg-background", "dark");

      return;
    }

    document.getElementsByTagName("div")[1]?.classList.remove("dark");
  }, [isDarkMode]);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <main
      className={`${
        isDarkMode ? "dark" : ""
      } container grid h-screen items-center bg-background text-foreground md:grid-cols-[2fr_2fr] lg:grid-cols-[3fr_2fr]`}
    >
      <Outlet />
    </main>
  );
};

export default AuthLayout;
