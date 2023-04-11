import "@algolia/autocomplete-theme-classic/dist/theme.css";
import "../styles/globals.css";

import RootLayoutClient from "./components/RootLayoutClient";
import { Oswald } from "next/font/google";
import { type ReactNode } from "react";
import { type Metadata } from "next";

const oswald = Oswald({
  subsets: ["latin"],
  display: 'swap',
});

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export const metadata: Metadata = {
  title: "Movies",
  description: "Learning some Algolia",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body id="app" className={oswald.className}>
        <RootLayoutClient>
          {modal}
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
