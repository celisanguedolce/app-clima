import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";

import LayoutModules from "./Layout.module.css";

export const Layout = () => {
  return (
    <AppShell padding="md" header={{ height: 60 }} classNames={LayoutModules}>
      <AppShell.Header bg="cyan.2">ACA ESTA MI HEADER</AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
