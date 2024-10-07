import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "300", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Fantasy Work",
  description: "Tasks Management for Engineers - Created by Oliver Nguyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar></NavBar>

        <main>{children}</main>
      </body>
    </html>
  );
}
