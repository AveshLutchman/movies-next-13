import { Autocomplete } from "~/app/components/Autocomplete";
import { prisma } from "~/server/db";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const movie = await prisma.movie.findFirst({ where: { id } });

  return { title: movie?.title };
}

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="grid h-full grid-cols-1 grid-rows-4">
      <nav className="w-1/2 place-self-center">
        <Autocomplete />
      </nav>
      <section className="row-span-3 w-5/6 place-self-center">
        <div className="m-10 flex rounded bg-base-200 p-5">{children}</div>
      </section>
    </article>
  );
}
