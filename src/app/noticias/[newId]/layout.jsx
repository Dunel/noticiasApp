export const generateMetadata = ({ params }) => {
    return {
      title: `Noticia: ${params.newId}`,
    };
  };

export default function NoticiaLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}