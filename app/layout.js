
import "./globals.css";
import { Source_Serif_4, Inter } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Pelegrinus — Classical Learning",
  description:
    "Classical languages, Jewish intellectual traditions and the humanities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
