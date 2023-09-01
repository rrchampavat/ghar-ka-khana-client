import Button from "@/components/ui/buttons/button";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import { createStyles, Container, Group, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(120)
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(120)
    }
  },

  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32)
    }
  },

  description: {
    maxWidth: rem(540),
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][1],
    height: "auto"
  }
}));

const ServerError = () => {
  const { classes } = useStyles();

  return (
    <div className={`${classes.root} h-screen`}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button
            variant="white"
            size="md"
            onClick={() => window.location.reload()}
          >
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default ServerError;
