import { createTheme, MantineProvider } from "@mantine/core"; /*importo el proovedor de la libreria Mantine*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css"; /*importo los estilos de la libreria Mantine*/
import "@mantine/notifications/styles.css";

const THEME = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryShade: 6,
  primaryColor: "cyan",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={THEME}>
      <Notifications />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
