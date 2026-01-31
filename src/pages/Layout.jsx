import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router";

import LayoutModules from "./Layout.module.css";

export const Layout = () => {
  return (
    <AppShell padding="md" header={{ height: 60 }} classNames={LayoutModules}>
      <AppShell.Header bg="cyan.4">APLICACION DEL CLIMA</AppShell.Header>
      <AppShell.Main bg="gray.1">
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
