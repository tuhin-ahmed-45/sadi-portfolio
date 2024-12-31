import { videoProject } from "@/constants";
import { Brush, Youtube } from "lucide-react";
import Artwork from "./_components/Artwork";

function ProjectPage() {
  return (
    <main className="container space-y-28 mx-auto py-8 px-4 md:px-8">
      <h1 className="font-semibold text-secondary-foreground text-4xl text-center">My Projects</h1>
      <section>
        <h2 className="flex items-center gap-2 text-lg">
          <Youtube />
          Videos
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {videoProject?.map((video) => (
            <div key={video?.id} className="bg-secondary rounded-md p-4" >
              <div className="relative aspect-w-16 aspect-h-9" >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video?.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web- 
                  share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-2 mt-4">
                <h3 className="text-lg font-semibold">{video?.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="">
        <h2 className="flex items-center gap-2 text-lg">
          <Brush />
          Artwork
        </h2>
        <Artwork />
      </section>
    </main >
  );
}

export default ProjectPage;
