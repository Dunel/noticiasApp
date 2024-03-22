export const generateMetadata = ({ params }) => {
    return {
        title: `Noticia: ${params.newId}`,
    }
}

export default function News({ params }) {
    return (<h1>Noticia {params.articleId}</h1>);
}