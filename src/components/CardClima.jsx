// CREO LA CARD QUE VA A CONTENER EL CLIMA DE MI CIUDAD QUE TRAIGA LA APPI//

import { ActionIcon, Card, Group, Image, Loader, Stack, Text, Title, Center } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useFavStore } from "../store/favoritosStore";
import { useClima } from "../services/useClima";
import { notifications } from "@mantine/notifications";

export const CardClima = ({ ciudad }) => {
  const { agregarFav, eliminarFav, isFavorite } = useFavStore();

  const { data: infoClima, isLoading, error } = useClima(ciudad);

  if (error) {
    notifications.show({
      title: "Error al buscar la ciudad",
      variant: "light",
      color: "red",
    });
  }

  if (isLoading)
    return (
      <Center>
        <Loader />
      </Center>
    );

  if (!infoClima) return null;

  const weather = infoClima.weather[0];

  // agregarFav(ciudad)
  const onFavClick = (ciudad) => {
    // revisar si es favorito
    if (isFavorite(ciudad)) {
      eliminarFav(ciudad);
    } else {
      agregarFav(ciudad);
    }
  };

  return (
    <Card shadow="xl" withBorder>
      <Group wrap="nowrap" justify="space-between">
        <Group>
          <Stack gap={0}>
            <Title order={2}>
              {infoClima.name}, {infoClima.sys.country}
            </Title>
            <Text tt="capitalize">{weather.description}</Text>
          </Stack>
          <Image src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Icono del clima" h="90" w="auto" />
        </Group>
        <ActionIcon onClick={() => onFavClick(infoClima.name)} color="yellow" variant="outline">
          {isFavorite(infoClima.name) ? <IconHeartFilled /> : <IconHeart />}
        </ActionIcon>
      </Group>
      <Title order={3}>Temperatura: {infoClima.main.temp}ºC</Title>
      <Text> Maxima: {infoClima.main.temp_max}ºC</Text>
      <Text> Mínima: {infoClima.main.temp_min}ºC</Text>
    </Card>
  );
};
