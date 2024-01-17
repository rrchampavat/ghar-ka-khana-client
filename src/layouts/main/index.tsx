import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { AppShell } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";

const MainLayout = () => {
  const isAuthenticated = !!Cookies.get("accessToken");
  // TODO Try to integrate with redux
  const [isMobileOpen, { open, close, toggle: toggleMobile }] =
    useDisclosure(false);
  const [isDesktopOpen, { toggle: toggleDesktop }] = useDisclosure(true);
  const isPinned = useHeadroom({ fixedAt: 120 });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppShell
      layout="alt"
      header={{ height: { base: 60 }, collapsed: !isPinned, offset: true }}
      navbar={{
        breakpoint: "sm",
        collapsed: { mobile: !isMobileOpen, desktop: !isDesktopOpen },
        width: { base: 250 }
      }}
      padding="xl"
    >
      <AppShell.Header style={{ borderBottom: "none" }}>
        <Header
          open={open}
          close={close}
          toggleMobile={toggleMobile}
          toggleDesktop={toggleDesktop}
          isMobileOpen={isMobileOpen}
          isDesktopOpen={isDesktopOpen}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
