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
};

export const metadata: Metadata = {
  title: "Movies",
  description: "Learning some Next13",
  viewport: "width=device-width, initial-scale=1",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }: Props) {

  return (
    <html lang="en">
      <body id="app" className={oswald.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
