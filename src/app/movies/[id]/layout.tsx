import { Autocomplete } from "~/app/components/Autocomplete";

export default function MovieLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {


  return (
    <article className="h-full grid grid-cols-1 grid-rows-4">
      <nav className="place-self-center w-1/2">
			  <Autocomplete />
      </nav>
			<section className="row-span-3 place-self-center w-5/6">
        <div className="m-10 p-5 bg-base-200 rounded flex">
      	  {children}
        </div>
			</section>
    </article>
  );
}