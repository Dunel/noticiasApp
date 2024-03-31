import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import Pagination from "./Pagination";
import ButtonAction from "@/app/dashboard/@components/ButtonAction";

export default function ListNews() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [TargetDelete, setTargetDelete] = useState(0);
  const resultsPerPage = 10;
  const ButtonState = (e) => {
    setIsDialogOpen(true);
    setTargetDelete(e);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("/api/news");
        setNews(res.data.reverse());
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/new/${id}`);
      setNews(news.filter((item) => item.id !== id));
      console.log("Noticia eliminada:", res.data);
      setIsDialogOpen(false);
    } catch (error) {
      setIsDialogOpen(false);
      console.error("Error al eliminar la noticia:", error);
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log("Cambió a la página", page);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = news.slice(indexOfFirstResult, indexOfLastResult);

  return (
    <>
      <ul className="divide-y divide-gray-200">
        {currentResults.map((e) => (
          <ItemList
            key={e.id}
            title={e.title}
            author={e.author}
            createdAt={e.createdAt}
            newId={e.id}
            onDelete={() => ButtonState(e.id)}
          />
        ))}
      </ul>
      <ButtonAction
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        actionDel={() => handleDelete(TargetDelete)}
      />
      <Pagination
        totalResults={news.length}
        resultsPerPage={resultsPerPage}
        onPageChange={onPageChange}
      />
    </>
  );
}
