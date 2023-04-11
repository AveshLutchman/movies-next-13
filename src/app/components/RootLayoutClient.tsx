"use client";

import { type ReactNode } from "react";
import AlgoliaWrapper from "./AlgoliaWrapper";
import { MantineProvider } from "@mantine/core";

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MantineProvider
      theme={{colorScheme:'dark'}}
    >
      <AlgoliaWrapper>{children}</AlgoliaWrapper>
    </MantineProvider>
  );
}
