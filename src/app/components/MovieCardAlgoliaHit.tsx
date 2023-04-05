import { createStyles, Paper, Text, Title, rem, clsx } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(300),
    width: rem(200),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
    mixBlendMode: "difference",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease",

    "&:hover": {
      transform: "scale(1.02)",
    },

  },
  image: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    filter: "grayscale(100%) opacity(0.5)",
    backgroundSize: "125%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "filter 300ms ease, backgroundSize 300ms ease",

    "&:hover": {
      filter: "grayscale(50%) opacity(1)",
      backgroundSize: "150%",
    },
  },
  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily || ""}`,
    fontWeight: 900,
    color: theme.black[7],
    lineHeight: 1.2,
    fontSize: rem(20),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.black[2],
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

type hitProps = {
  hit: {
    _id: {
      $oid: string;
    };
    title: string;
    plot: string;
    genres: Array<string>;
    cast: Array<string>;
    writers: Array<string>;
    year: number;
    poster: string;
    objectID: string;
    __position: number;
  };
};

const imageNotFound = "/image-not-found.svg";

export function MovieCardAlgolia({ hit }: hitProps) {
  const { classes } = useStyles();

  return (
    <Link href={`/movies/[id]`} as={`/movies/${hit._id.$oid}`}>
      <Paper
        shadow="md"
        p="xl"
        mt="lg"
        radius="md"
        className={clsx(classes.card, "group/card")}
      >
        <Image src={hit.poster || imageNotFound} alt={hit.title} className={clsx(classes.image)} fill />
        <div>
          <Text
            className={clsx(classes.category, "group-hover/card:invisible")}
            size="xs"
          >
            {hit.genres}
          </Text>
          <Title
            order={3}
            className={clsx(classes.title, "group-hover/card:invisible")}
          >
            {hit.title}
          </Title>
        </div>
      </Paper>
    </Link>
  );
}
