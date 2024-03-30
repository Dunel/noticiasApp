import Link from "next/link";
import Header from "./@components/header";
import ContainerWeb from "./@components/ContainerWeb";
import ColLeft from "./@components/ColLeft";
import GridNew from "./@components/gridNew";
import ColRight from "./@components/ColRight";

export const generateMetadata = ({ params }) => {
  return {
    title: {
      absolute: "Error: 404",
    },
  };
};

export default function Notfound() {
  return (
    <>
      <Header title={"Error"} />
      <ContainerWeb>
      <div className="grid grid-cols-3 gap-8">
        <ColLeft>
        <GridNew>
          <h1 className="text-3xl font-bold mb-5">
            Error 404: Pagina no encontrada.
          </h1>
          <Link href="/" className="underline">
            Volver a la pagina principal
          </Link>
          </GridNew>
        </ColLeft>
        <ColRight></ColRight>
        </div>
      </ContainerWeb>
    </>
  );
}
