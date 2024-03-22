import Link from "next/link"

export const generateMetadata = ({ params }) => {
    return {
        title: {
            absolute: "Error: 404",
        }
    }
}

export default function Notfound() {
    return (
        <>
            <h1>Error 404: Pagina no encontrada.</h1>
            <Link href="/">Volver a la pagina principal</Link>
        </>
    )
}