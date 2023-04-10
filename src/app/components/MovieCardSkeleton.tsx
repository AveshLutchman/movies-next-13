import { Skeleton } from "@mantine/core";
import { type ForwardedRef, forwardRef } from "react";

const MovieCardSkeleton = forwardRef(function MovieCardSkeleton(props, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <Skeleton ref={ref}  className="card w-72 mt-10 aspect-[4/5]">
    </Skeleton>
  );
})

export default MovieCardSkeleton
