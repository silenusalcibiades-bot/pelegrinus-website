import "./globals.css";
import { Source_Serif_4, Inter } from "next/font/google";
import Script from "next/script";
import LanguageAttribute from "./components/LanguageAttribute";

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
    <html lang="nl">
      <body className={`${sourceSerif.variable} ${inter.variable}`}>
        <LanguageAttribute />
        {children}
        <Script id="crisp-chat" strategy="afterInteractive">{`window.$crisp = []; window.CRISP_WEBSITE_ID = "ccb5b4b7-9813-43db-ae84-4a35a35143b5"; (function () { var d = document; var s = d.createElement("script"); s.src = "https://client.crisp.chat/l.js"; s.async = 1; d.getElementsByTagName("head")[0].appendChild(s); })();`}</Script>
      </body>
    </html>
  );
}
