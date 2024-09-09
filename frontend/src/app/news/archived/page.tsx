import NewCard, { NewSchema } from "@/components/component/NewCard";
import TitlePage from "@/components/component/TitlePage";

async function getData(): Promise<NewSchema[]> {
  // Fetch data from your API here.
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

export default async function NewsArchivedPage() {
  const news = await getData();

  return (
    <>
      <TitlePage
        title="Noticias archivadas"
        description="Aquí tienes las noticias que has archivado"
      />
      <div className="py-4">
        <div className="flex flex-col gap-4">
          {news.map((newSchema) => (
            <NewCard key={newSchema.id} newSchema={newSchema} />
          ))}
        </div>
      </div>
    </>
  );
}
