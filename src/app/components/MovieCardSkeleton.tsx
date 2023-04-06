import { rem, Skeleton } from "@mantine/core";
import { type ForwardedRef, forwardRef } from "react";

const MovieCardSkeleton = forwardRef(function MovieCardSkeleton(props, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <Skeleton
      p="xl"
      mt="lg"
      radius="md"
      height={rem(300)}
      width={rem(200)}
      ref={ref}
      className="ais-InfiniteHits-sentinel cursor-pointer"
    />
  );
})

export default MovieCardSkeleton
