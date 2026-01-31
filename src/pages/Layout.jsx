import { AppShell, Container, Text, Title } from "@mantine/core";
import { Outlet } from "react-router";

import LayoutModules from "./Layout.module.css";

export const Layout = () => {
  return (
    <AppShell padding="md" header={{ height: 60 }} classNames={LayoutModules}>
      <AppShell.Header bg="cyan.4" ta="center">
        <Title order={1}>Clima App - Averigua el clima en todo el mundo! 🌍</Title>
      </AppShell.Header>
      <AppShell.Main bg="gray.1">
        <Container>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
