"use client";
import ColLeft from "@/app/@components/ColLeft";
import ContainerWeb from "@/app/@components/ContainerWeb";
import GridNew from "@/app/@components/gridNew";
import Header from "@/app/@components/header";
import { useSession } from "next-auth/react";
import ListNews from "../@components/ListNews";
import Link from "next/link";
import ColRight from "@/app/@components/ColRight";

export default function Dashboard() {
  const { data: session, status } = useSession();
  return (
    <>
      <Header title={`Dashboard: Noticias`} />
      <ContainerWeb>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ColLeft>
            <GridNew>
              <ListNews />
            </GridNew>
          </ColLeft>

          <ColRight>
              <Link
                href={"/dashboard/news/create"}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Crear Noticia
              </Link>
              {/*status == "loading" ? "..." : session.user.email*/}
            </ColRight>
        </div>
      </ContainerWeb>
    </>
  );
}
