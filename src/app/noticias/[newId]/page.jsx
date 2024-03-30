"use client";
import ColLeft from "@/app/@components/ColLeft";
import ContainerWeb from "@/app/@components/ContainerWeb";
import GridNew from "@/app/@components/gridNew";
import Header from "@/app/@components/header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function News({ params }) {
  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`/api/new/${params.newId}`);
        setNews(res.data);
        //console.log(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);
  return (
    <>
      <Header title={`Noticia: ${news ? news.title : "..."}`} />
      <ContainerWeb>
        <div className="grid grid-cols-3 gap-8">
          <ColLeft>
            <GridNew>
            <div dangerouslySetInnerHTML={{ __html: news.body }}></div>
            </GridNew>
          </ColLeft>

          {/* Grid Derecho */}
          <div className="col-span-1 grid grid-cols-1 gap-3">
            <div className="p-4 rounded">
              <h3 className="text-xl font-bold">Autor:</h3>
              <p className="text-lg text-gray-500 ml-auto">{news.authorId}</p>
              <h3 className="text-xl font-bold mt-2">Fecha:</h3>
              <p className="text-lg text-gray-500 ml-auto">
                {new Date(news.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </ContainerWeb>
    </>
  );
}
