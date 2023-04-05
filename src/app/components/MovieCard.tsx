import { createStyles, Paper, Text, Title, rem, clsx } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(300),
    width: rem(200),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    mixBlendMode: 'difference',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',

    '&:hover': {
      transform: 'scale(1.02)',
    },

    '&:hover::before': {
      filter: 'grayscale(50%) opacity(1)',
      backgroundSize: '150%',
    },

    '&:hover .title': {
      color: 'transparent'
    },

    '&::before':{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      filter: 'grayscale(100%) opacity(0.5)',
      backgroundSize: '125%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'filter 300ms ease, backgroundSize 300ms ease',
    }
  },
  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily || ''}`,
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
    textTransform: 'uppercase',
  },

}));

interface MovieCardImageProps {
  id: string;
  image: string;
  title: string;
  category: string;
}

export function MovieCard({ id, image, title, category }: MovieCardImageProps) {
  const { classes } = useStyles();

  return (
    <Link href={`/movies/${id}`} >
      <Paper
        shadow="md"
        p="xl"
        mt="lg"
        radius="md"
        sx={{
          "::before":{
            backgroundImage: `url(${image})`,
          }
        }}
        className={clsx(classes.card, 'group/card')}
      >
        <div>
          <Text className={clsx(classes.category, 'group-hover/card:invisible')} size="xs">
            {category}
          </Text>
          <Title order={3} className={clsx(classes.title, 'group-hover/card:invisible')}>
            {title}
          </Title>
        </div>
      </Paper>
    </Link>
  );
}