import ColLeft from "@/app/@components/ColLeft";
import ContainerWeb from "@/app/@components/ContainerWeb";
import GridNew from "@/app/@components/gridNew";
import Header from "@/app/@components/header";
import ColRight from "../@components/ColRight";

export default function News() {
  return (
    <>
      <Header title={`Informacion`} />
      <ContainerWeb>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ColLeft>
            <GridNew>
              <h1>
                <strong>Funcionalidades del Blog</strong>
              </h1>
              <p>
                <strong></strong>
              </p>
              <div>
                <span>
                  <strong>Autenticaci&oacute;n de Usuarios:</strong> El blog{" "}
                </span>
                <span>
                  cuenta con un sistema de autenticaci&oacute;n completamente
                  funcional que{" "}
                </span>
                <span>
                  permite a los usuarios registrarse, iniciar sesi&oacute;n y
                  cerrar sesi&oacute;n{" "}
                </span>
                <span>de manera segura.</span>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <span>
                  <strong>Gesti&oacute;n de Noticias:</strong> Los usuarios
                  pueden crear,{" "}
                </span>
                <span>
                  editar y eliminar noticias desde un panel de control
                  intuitivo.
                </span>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <span>
                  <strong>Dashboard Personalizado:</strong> Se ha implementado
                  un dashboard p
                </span>
                <span>
                  ersonalizado que proporciona a los usuarios acceso
                  r&aacute;pido a las{" "}
                </span>
                <span>
                  funciones de edici&oacute;n de noticias y otros recursos
                  relacionados con{" "}
                </span>
                <span>la administraci&oacute;n del blog.</span>
              </div>
              <div>
                <span></span>
              </div>
              <div>
                <span>
                  <strong>Seguridad:</strong> La seguridad de los datos y{" "}
                </span>
                <span>
                  la privacidad de los usuarios son prioritarias, por lo que se
                  han{" "}
                </span>
                <span>
                  implementado medidas de seguridad robustas, como la
                  autenticaci&oacute;n{" "}
                </span>
                basada en tokens JWT y la validaci&oacute;n de datos en el
                servidor.
              </div>
              <div>
                <span>
                  <strong>Interfaz de Usuario Intuitiva:</strong> El blog cuenta
                  con una interfaz de{" "}
                </span>
                <span>
                  usuario limpia y f&aacute;cil de usar que garantiza una
                  experiencia de{" "}
                </span>
                navegaci&oacute;n fluida para los visitantes y los
                administradores.
              </div>
            </GridNew>
          </ColLeft>

          {/* Grid Derecho */}
          <ColRight></ColRight>
        </div>
      </ContainerWeb>
    </>
  );
}
