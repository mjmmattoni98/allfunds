import NewsList from "@/components/component/NewsList";
import TitlePage from "@/components/component/TitlePage";

export default async function NewsArchivedPage() {
  const showArchivedNews = true;

  return (
    <>
      <TitlePage
        title="Noticias archivadas"
        description="Aquí tienes las noticias que has archivado"
      />
      <div className="py-4">
        <NewsList isArchived={showArchivedNews} />
      </div>
    </>
  );
}
