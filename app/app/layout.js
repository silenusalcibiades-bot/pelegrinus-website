
import "./globals.css";

export const metadata = {
  title: "Pelegrinus | Classical Learning",
  description:
    "Classical languages, Jewish intellectual traditions and the humanities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
