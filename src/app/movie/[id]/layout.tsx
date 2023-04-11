import Link from "next/link";
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
    <>
      <Link href={'/'} className="group/btn btn btn-ghost gap-2 hover:bg-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"/></svg>
        Home
      </Link>
      <article className="grid h-full grid-cols-1 grid-rows-4">
        <nav className="w-1/2 place-self-center">
          <Autocomplete />
        </nav>
        <section className="row-span-3 w-5/6 place-self-center">
          <div className="m-10 flex rounded bg-base-200 p-5">{children}</div>
        </section>
      </article>
    </>
  );
}
