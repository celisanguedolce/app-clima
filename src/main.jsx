import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core"; /*importo el proovedor de la libreria Mantine*/
import "@mantine/core/styles.css"; /*importo los estilos de la libreria Mantine*/
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
