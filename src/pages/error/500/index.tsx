import { Title, Text, Button, Container, Group } from "@mantine/core";

const ServerError = () => {
  return (
    <div className="h-screen bg-background pb-32 pt-20">
      <Container>
        <div className="text-center text-[120px] font-black text-text sm:text-[220px]">
          500
        </div>

        <Title className="text-center text-3xl font-black sm:text-4xl">
          Something bad just happened...
        </Title>

        <Text size="lg" ta="center" className="m-auto !my-4">
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>

        <Group justify="center">
          <Button size="md" onClick={() => window.location.reload()}>
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default ServerError;
