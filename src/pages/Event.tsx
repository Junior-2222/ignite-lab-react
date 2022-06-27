import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {

  const { slug } = useParams<{ slug: string }>();

  document.title = slug as string;  

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-[0.5]" />}
        <Sidebar />
      </main>
    </div>
  );
}
