import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  MantineProvider,
} from "@mantine/core"; /*importo el proovedor de la libreria Mantine*/
import "@mantine/core/styles.css"; /*importo los estilos de la libreria Mantine*/
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

const THEME = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryShade: 6,
  primaryColor: "cyan",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider theme={THEME}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
