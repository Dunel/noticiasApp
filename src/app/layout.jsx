import "./global.css";

export const metadata = {
  title: {
    default: 'Web de Noticias',
    template: "Web de noticias - %s",
  },
  description: 'Artículos de noticias',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <header>header1</header>
        <main>{children}</main>
        <footer>
          footer1
        </footer>
        </body>
    </html>
  )
}
