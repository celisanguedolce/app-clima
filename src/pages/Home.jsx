import { Loader } from "@mantine/core";
import { BuscadorClima } from "../components/BuscadorClima";
import { CardClima } from "../components/CardClima";
import { useCurrentCity } from "../hooks/useCurrentCity";
import { useClima } from "../services/useClima";

export const Home = () => {
  const { ciudad, error: errorCity } = useCurrentCity();

  const { data, isLoading, error: errorClima } = useClima(ciudad);

  return (
    <>
      {isLoading && <Loader />}
      {data && <CardClima infoClima={data} />}
      <BuscadorClima />
    </>
  );
};
