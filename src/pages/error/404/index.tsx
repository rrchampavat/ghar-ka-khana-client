import Button from "@/ui/components/buttons/button";
import Image from "@/ui/components/image";
import Text from "@/ui/components/text";
import Title from "@/ui/components/title";
import Container from "@/ui/wrappers/container";
import SimpleGrid from "@/ui/wrappers/simple-grid";
import { useNavigate } from "react-router-dom";

const NotFoundImage = () => {
  const navigate = useNavigate();

  return (
    <Container className="flex h-screen items-center !px-10 py-20">
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src="/svgs/404.svg" className="!md:hidden !block" />
        <div>
          <Title className="!sm:text-4xl !text-3xl !font-black">
            Something is not right...
          </Title>

          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>

          <Button
            variant="outline"
            size="md"
            mt="xl"
            className="w-full"
            onClick={() => navigate("/")}
          >
            Get back to home page
          </Button>
        </div>

        <Image src="/svgs/404.svg" className="!md:block !hidden" />
      </SimpleGrid>
    </Container>
  );
};

export default NotFoundImage;
