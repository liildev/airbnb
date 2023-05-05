import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar, ClientOnly } from "./components";
import ToasterProvider from "./providers/ToasterProvider";
import ModalsProvider from "./providers/ModalsProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <ModalsProvider />
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
