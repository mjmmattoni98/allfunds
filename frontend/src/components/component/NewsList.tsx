"use client";

import NewCard, { NewSchema } from "@/components/component/NewCard";
import { useEffect, useState } from "react";
import EmptyItem from "./EmptyItem";

async function getData(): Promise<NewSchema[]> {
  let data = await fetch("http://localhost:3000/api/news");
  let newsData = await data.json();
  newsData = newsData.map((news: any) => {
    return {
      id: news._id,
      title: news.title,
      description: news.description,
      date: new Date(news.date),
      content: news.content,
      author: news.author,
    };
  });

  return newsData;
}

async function getDataArchived(): Promise<NewSchema[]> {
  let data = await fetch("http://localhost:3000/api/news/archived");
  let newsData = await data.json();
  newsData = newsData.map((news: any) => {
    return {
      id: news._id,
      title: news.title,
      description: news.description,
      date: new Date(news.date),
      content: news.content,
      author: news.author,
      archiveDate: new Date(news.archiveDate),
    };
  });

  return newsData;
}

type NewListProps = {
  isArchived: boolean;
};

export default async function NewsList({ isArchived }: Readonly<NewListProps>) {
  const [news, setNews] = useState<NewSchema[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (isArchived) {
        const newsData = await getDataArchived();
        setNews(newsData);
        return;
      }
      const newsData = await getData();
      setNews(newsData);
    }
    fetchData();
  }, []);

  const handleAction = async (id: string) => {
    if (isArchived) {
      // Remove the item from the archive
      await fetch(`http://localhost:3000/api/news/${id}`, {
        method: "DELETE",
      });

      // Fetch the updated list
      const updatedNews = await getDataArchived();
      setNews(updatedNews);
    } else {
      // Archive the item
      await fetch(`http://localhost:3000/api/news/${id}/archive`, {
        method: "PUT",
      });

      // Fetch the updated list
      const updatedNews = await getData();
      setNews(updatedNews);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {news.length === 0 ? (
        isArchived ? (
          <EmptyItem
            title="No hay noticias archivadas"
            description="Parece que no tienes noticias archivadas."
          />
        ) : (
          <EmptyItem
            title="No hay noticias"
            description="No hay noticias en este momento."
          />
        )
      ) : (
        news.map((newSchema) => (
          <NewCard
            key={newSchema.id}
            newSchema={newSchema}
            onAction={handleAction}
          />
        ))
      )}
    </div>
  );
}
