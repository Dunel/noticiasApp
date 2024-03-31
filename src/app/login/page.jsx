"use client";
import { useEffect, useState } from "react";
import Header from "../@components/header";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import ContainerWeb from "../@components/ContainerWeb";

export default function Login({ searchParams }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    setError([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });

    if (responseNextAuth?.error) {
      return setError(responseNextAuth.error.split(","));
    }
  };

  useEffect(() => {
    if (searchParams.error) {
      setError(searchParams.error);
    }
  }, [searchParams]);

  return (
    <>
      <Header title={"Login"} />
      <ContainerWeb>
        <div className="flex items-center justify-center">
          <div className="bg-white p-6 md:p-10 rounded">
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
              <img className="mx-auto w-auto" src="" alt="" />
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Iniciar Sesión
              </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleClick}
                >
                  Iniciar Sesión
                </button>
              </div>

              <div className="text-sm mt-6">
                <a
                  href="#"
                  className="font-semibold text-gray-500 hover:text-gray-500"
                >
                  Olvidaste la contraseña?
                </a>
              </div>

              {error.length > 0 && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  <ul className="list-disc list-inside mb-0">
                    {error?
                      <li className="mt-1">
                        {error}
                      </li>
                    :""}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </ContainerWeb>
    </>
  );
}
