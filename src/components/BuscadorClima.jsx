/// ACA GENERO EL BOTON PARA BUSCAR EL CLIMA DE LAS DIFERENTES CIUDADES ///

import { TextInput, Loader } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useClima } from "../services/useClima";
import { CardClima } from "./CardClima";

export const BuscadorClima = () => {
  const [valorEscrito, setValorEscrito] = useState("");
  // Crear un nuevo STATE que va a ser la ciudadABuscar
  const [ciudadABuscar, setCiudadABuscar] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setCiudadABuscar(valorEscrito);
    }
  };

  return (
    <>
      <TextInput
        value={valorEscrito}
        onChange={(event) => setValorEscrito(event.currentTarget.value)}
        onKeyDown={handleKeyDown}
        size="lg"
        radius="xl"
        label="Busque su ciudad aquí"
        placeholder="Ej: Córdoba, Argentina"
        rightSection={<IconSearch />}
        py="md"
      />
      <CardClima ciudad={ciudadABuscar}></CardClima>
    </>
  );
};
