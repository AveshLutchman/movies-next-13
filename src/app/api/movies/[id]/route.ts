import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "~/server/db";

type ParamsType = {
  params: {
    id: string;
  };
};

export async function GET(_request: NextRequest, { params }: ParamsType) {
  const { id } = params;

  console.log(params)

  const movie = await prisma.movie.findFirst({ where: { id } });

  return NextResponse.json(movie);
}
