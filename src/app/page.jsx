import Header from "./@components/header";
import ColLeft from "./@components/ColLeft";
import RenderNews from "./@components/renderNews";
import ContainerWeb from "./@components/ContainerWeb";
import ColRight from "./@components/ColRight";

export default function Page() {
  return (
    <>
      <Header title={"Noticias Principales"} />
      <ContainerWeb>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ColLeft>
            <RenderNews />
          </ColLeft>

          {/* Grid Derecho */}
          <ColRight>
          
          </ColRight>
        </div>
      </ContainerWeb>
    </>
  );
}
