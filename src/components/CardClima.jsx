// CREO LA CARD QUE VA A CONTENER EL CLIMA DE MI CIUDAD QUE TRAIGA LA APPI//

import { Card, CardSection, Text, Button, Image } from "@mantine/core";

export const CardClima = ({ infoClima }) => {
  console.log(infoClima);
  return (
    <Card shadow="xl" withBorder>
      <CardSection>
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" height={160} alt="Norway" />
      </CardSection>
      <Text fw={500}>{infoClima.name}</Text>
      <Button color="blue" fullWidth mt="md" radius="md">
        AÑADIR A FAVORITOS{" "}
      </Button>
    </Card>
  );
};
