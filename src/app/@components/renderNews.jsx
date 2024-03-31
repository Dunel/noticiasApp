"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import GridNew from "./gridNew";
import Link from "next/link";
import Pagination from "../dashboard/@components/Pagination";

export default function RenderNews() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10; 

  const onPageChange = (page) => {
    setCurrentPage(page);
    //console.log("page", page);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = news.slice(indexOfFirstResult, indexOfLastResult);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("/api/news");
        setNews(res.data.reverse());
        //console.log(res.data)
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      {currentResults.map((e) => (
        <GridNew key={e.id}>
          <Link href={`/noticias/${e.id}`}>
            <h2 className="text-2xl font-bold mb-2">{e.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: e.body.length > 200 ? `${e.body.substring(0, 700)}...` : e.body }}></div>
          <div className="flex justify-between items-center mt-4">
            <Link href={`/noticias/${e.id}`} className="underline">
              Leer más
            </Link>
            <p className="text-sm text-gray-500 ml-auto">{e.author}</p>
          </div>
        </GridNew>
      ))}
      <Pagination
        totalResults={news.length}
        resultsPerPage={resultsPerPage}
        onPageChange={onPageChange}
      />
    </>
  );
}
