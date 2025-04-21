import { Merienda, Kdam_Thmor_Pro } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const merienda = Merienda({
  subsets: ["latin"],
  weights: ["300", "500, 700"],
});
const kdam = Kdam_Thmor_Pro({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Literatura e Inspiración",
  description: "Blog para recomendar literatura, leer o subir reseñas de libros, unirse al club de lectura y brindar inspiración para escribir.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merienda.className} ${kdam.className} antialiased`}>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
