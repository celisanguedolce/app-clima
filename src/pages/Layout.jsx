import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router";

import LayoutModules from "./Layout.module.css";

export const Layout = () => {
  return (
    <AppShell padding="md" header={{ height: 60 }} classNames={LayoutModules}>
      <AppShell.Header bg="cyan.2">APLICACION DEL CLIMA</AppShell.Header>
      <AppShell.Main>
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
