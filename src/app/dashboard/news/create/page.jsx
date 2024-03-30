"use client";
import ContainerWeb from "@/app/@components/ContainerWeb";
import GridNew from "@/app/@components/gridNew";
import Header from "@/app/@components/header";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactQuillEditor from "../../@components/ReactQuillEditor";

export default function CreateNews() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  const [createnew, setCreateNew] = useState({
    title: "",
    body: "",
  });

  const handleEditorChange = (newContent) => {
    setCreateNew((prevState) => ({
      ...prevState,
      body: newContent,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateNew((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(createnew);
    try {
      const res = await axios.post(
        "/api/news",
        { ...createnew, authorId: session.user.author },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/dashboard/news");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  //console.log(JSON.stringify(session))
  return (
    <>
      <Header title={`Dashboard - Nueva noticia`} />
      <ContainerWeb>
        <div className="col-span-2 grid grid-cols-1 gap-4">
          <GridNew>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  value={createnew.title}
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Titulo"
                />
              </div>
            </div>
            <div className="mt-2">
            <ReactQuillEditor text={createnew.body} onContent={handleEditorChange}/>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </GridNew>
        </div>

        <div className="col-span-1 grid grid-cols-1 gap-4">
          <div className="p-4 rounded">
            {status == "loading" ? "..." : session.user.email}
          </div>
        </div>
      </ContainerWeb>
    </>
  );
}
