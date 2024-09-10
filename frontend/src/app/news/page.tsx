import NewsList from "@/components/component/NewsList";
import TitlePage from "@/components/component/TitlePage";

export default async function NewsPage() {
  const showArchivedNews = false;

  return (
    <>
      <TitlePage title="Noticias" description="Las últimas noticias para ti" />
      <div className="py-4">
        <NewsList isArchived={showArchivedNews} />
      </div>
    </>
  );
}
