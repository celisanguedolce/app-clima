/// ACA GENERO EL BOTON PARA BUSCAR EL CLIMA DE LAS DIFERENTES CIUDADES ///

import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const BuscadorClima = () => {
  return <TextInput size="lg" radius="xl" label="Busque su ciudad aquí" placeholder="Input placeholder" rightSection={<IconSearch />} />;
};
