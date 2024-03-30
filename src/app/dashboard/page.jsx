"use client";
import Link from "next/link";
import ContainerWeb from "../@components/ContainerWeb";
import GridNew from "../@components/gridNew";
import Header from "../@components/header";
import { useSession } from "next-auth/react";
import ColLeft from "../@components/ColLeft";
import ColRight from "../@components/ColRight";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const stats = [
    { id: 1, name: "Usuarios registrados hoy", value: "500" },
    { id: 2, name: "Usuarios registrados", value: "25.000" },
    { id: 3, name: "Noticias publicadas", value: "700" },
    { id: 4, name: "Noticias publicadas este mes", value: "10" },
  ];

  return (
    <>
      <Header
        title={`Dashboard: ${status == "loading" ? "..." : session.user.email}`}
      />
      <ContainerWeb>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ColLeft>
            <GridNew>
              <div className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-3 lg:px-4">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 text-center lg:grid-cols-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="mx-auto flex max-w-xs flex-col gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.name}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <Link href="/dashboard/news">
                <div className="block bg-white rounded-lg shadow-md p-6 w-full mb-6">
                  <h2 className="text-xl font-semibold mb-2">
                    Editar noticias
                  </h2>
                </div>
              </Link>
              <Link href="/users">
                <div className="block bg-white rounded-lg shadow-md p-6 w-full mb-6">
                  <h2 className="text-xl font-semibold mb-2">
                    Editar usuarios
                  </h2>
                </div>
              </Link>
              <Link href="#">
                <div className="block bg-white rounded-lg shadow-md p-6 w-full mb-6">
                  <h2 className="text-xl font-semibold mb-2">Editar algo</h2>
                </div>
              </Link>
            </GridNew>
          </ColLeft>
          <ColRight></ColRight>
        </div>
      </ContainerWeb>
    </>
  );
}
