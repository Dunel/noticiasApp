import "./global.css";
import Navbar from "./@components/navbar";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import Footer from "./@components/Footer";

export const metadata = {
  title: {
    default: "Web de Noticias",
    template: "Web de noticias - %s",
  },
  description: "Artículos de noticias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <main>
          <SessionAuthProvider>
          <Navbar />
            {children}
            </SessionAuthProvider>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
