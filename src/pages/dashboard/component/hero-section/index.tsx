import Button from "@/components/ui/buttons/button";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import { Container, Overlay } from "@mantine/core";

const HeroSection = () => {
  return (
    <section
      className="relative rounded-md bg-cover bg-center px-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
      }}
    >
      {/* // !Overlay.exe stopped working */}
      <Overlay
      // gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
      // opacity={1}
      // zIndex={0}
      // blur={15}
      />
      <Container className="relative z-[1] flex flex-col items-start justify-end pb-96 lg:h-[500px] lg:pb-48">
        <Title className="text-5xl font-extrabold leading-tight text-white md:text-4xl md:leading-relaxed">
          A fully featured React components library
        </Title>

        <Text className="text-white sm:max-w-full sm:text-sm">
          Build fully functional accessible web applications faster than ever -
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text>

        <Button className="mt-12">Get started</Button>
      </Container>
    </section>
  );
};

export default HeroSection;
