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
  title: "Pelegrinus | Learn Latin. Complete your education.",
  description:
    "A classical education for curious adults. Learn Latin systematically and discover the literature, history and ideas of the classical world.",
  openGraph: {
    title: "Pelegrinus | Learn Latin. Complete your education.",
    description:
      "A classical education for curious adults. Learn Latin systematically and discover the literature, history and ideas of the classical world.",
    siteName: "Pelegrinus",
    type: "website",
  },
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
