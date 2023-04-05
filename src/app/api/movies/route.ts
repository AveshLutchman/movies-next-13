import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const movies = query
    ? await prisma.movie.findMany({
        where: {title:{ contains : query, mode: 'insensitive'}},
      })
    : await prisma.movie.findMany({ take: 10 });

  return NextResponse.json(movies);
}
