"use client";
import { useState } from "react";
import ContainerWeb from "../@components/ContainerWeb";
import GridNew from "../@components/gridNew";
import Header from "../@components/header";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <Header title={"REGISTRO"} />
      <ContainerWeb>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <GridNew>
              {error.length > 0 && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2"
                  role="alert"
                >
                  <ul className="list-disc list-inside mb-0">
                    <li className="mt-1">{error}</li>
                  </ul>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="sm:col-span-4">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=" Usuario"
                    />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=" Correo"
                      />
                    </div>
                    <div className="mt-6">
                      <input
                        id="email2"
                        name="email2"
                        type="email2"
                        autoComplete="email2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=" Confirmar Correo"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=" Nombre"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=" Apellido"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=" Contraseña"
                      />
                    </div>
                    <div className="mt-6">
                      <input
                        id="password2"
                        name="pasword2"
                        type="password"
                        autoComplete="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=" Confirmar Contraseña"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-4 space-y-10">
                    <fieldset>
                      <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="text-sm leading-6">
                            <label
                              htmlFor="comments"
                              className="font-medium text-gray-400"
                            >
                              Aceptas los terminos y condiciones del servicio?
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </GridNew>
          </div>
        </div>
      </ContainerWeb>
    </>
  );
}
