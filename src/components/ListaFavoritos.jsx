import { Grid, Title, Text, Center, SimpleGrid, Stack } from "@mantine/core";
import { useFavStore } from "../store/favoritosStore";
import { CardClima } from "./CardClima";

export const ListaFavoritos = () => {
  const { favorites } = useFavStore();

  if (favorites.length === 0) {
    return (
      <Center mt="md">
        <Text c="gray">Aun no tienes favoritos</Text>
      </Center>
    );
  }
  return (
    <Stack gap="md" mt="md">
      <Title order={4}>Tus Favoritos</Title>
      <SimpleGrid cols={2}>
        {favorites.map((ciudad) => (
          <CardClima ciudad={ciudad} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
