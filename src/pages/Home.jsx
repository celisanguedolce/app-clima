import { Center, Divider, Loader } from "@mantine/core";
import { BuscadorClima } from "../components/BuscadorClima";
import { CardClima } from "../components/CardClima";
import { ListaFavoritos } from "../components/ListaFavoritos";
import { useCurrentCity } from "../hooks/useCurrentCity";
import { notifications } from "@mantine/notifications";

export const Home = () => {
  const { ciudad, isLoading, error: errorCity } = useCurrentCity();

  if (errorCity) {
    notifications.show({
      title: errorCity,
      variant: "light",
      color: "red",
    });
  }

  return (
    <>
      {isLoading && (
        <Center>
          <Loader />
        </Center>
      )}
      <CardClima ciudad={ciudad} />
      <BuscadorClima />
      <Divider />
      <ListaFavoritos />
    </>
  );
};
