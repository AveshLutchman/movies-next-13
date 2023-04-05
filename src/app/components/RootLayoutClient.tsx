"use client";

import { type ReactNode } from "react";
import AlgoliaWrapper from "./AlgoliaWrapper";

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <AlgoliaWrapper>
      {children}
    </AlgoliaWrapper>
  );
}
