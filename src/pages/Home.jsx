import { Divider } from "@mantine/core";
import { BuscadorClima } from "../components/BuscadorClima";
import { CardClima } from "../components/CardClima";
import { ListaFavoritos } from "../components/ListaFavoritos";
import { useCurrentCity } from "../hooks/useCurrentCity";

export const Home = () => {
  const { ciudad, error: errorCity } = useCurrentCity();

  return (
    <>
      <CardClima ciudad={ciudad} />
      <BuscadorClima />
      <Divider />
      <ListaFavoritos />
    </>
  );
};
