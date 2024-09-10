"use client";

import NewCard, { NewSchema } from "@/components/component/NewCard";
import { useEffect, useState } from "react";

async function getData(): Promise<NewSchema[]> {
  // Fetch data from your API here.
  let data = await fetch("http://localhost:3000/api/news");
  let newsData = await data.json();
  console.log("🚀 ~ getData ~ newsData:", newsData);

  return [
    {
      id: "1",
      title: "Title",
      description: "Description",
      date: new Date(),
      content: "Content",
      author: "Author",
    },
    {
      id: "2",
      title: "Title 2",
      description: "Description",
      date: new Date(),
      content: "Content",
      author: "Author 2",
    },
  ];
}

async function getDataArchived(): Promise<NewSchema[]> {
  // Fetch data from your API here.
  let data = await fetch("http://localhost:3000/api/news");
  let newsData = await data.json();
  console.log("🚀 ~ getData ~ newsData:", newsData);

  return [
    {
      id: "3",
      title: "Title 3",
      description: "Description",
      date: new Date(),
      content: "Content",
      author: "Author 3",
      archiveDate: new Date(),
    },
  ];
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
      await fetch(`http://localhost:3000/api/news/${id}/archive`, {
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
      {news.map((newSchema) => (
        <NewCard
          key={newSchema.id}
          newSchema={newSchema}
          onAction={handleAction}
        />
      ))}
    </div>
  );
}
