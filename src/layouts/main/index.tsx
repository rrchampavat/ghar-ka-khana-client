import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const MainLayout = () => {
  const isAuthenticated = !!Cookies.get("accessToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="grid grid-cols-8 grid-rows-[auto,1fr,auto]">
      <Navbar />

      <div className="col-span-7 flex min-h-screen w-full flex-col justify-between space-y-3 overflow-y-auto  ">
        <div className="p-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
