import { videoProject } from "@/constants";
import { Brush, Youtube } from "lucide-react";
import Artwork from "./_components/Artwork";

function ProjectPage() {
  return (
    <main className="container space-y-9 md:space-y-28 mx-auto px-4 md:px-8">
      <h1 className="font-semibold text-secondary-foreground text-2xl md:text-4xl text-center">
        My Projects
      </h1>

      {/* Video Section */}
      <section>
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Youtube className="text-primary" />
          Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videoProject?.length > 0 ? (
            videoProject.map((video) => (
              <div
                key={video?.id}
                className="bg-secondary rounded-md p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded"
                    src={video?.url}
                    title={video?.title || "YouTube video player"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    aria-label={`YouTube video: ${video?.title}`}
                  ></iframe>
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="text-lg font-semibold">{video?.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No videos available at the moment.</p>
          )}
        </div>
      </section>

      {/* Artwork Section */}
      <section>
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Brush className="text-primary" />
          Artwork
        </h2>
        <Artwork />
      </section>
    </main>
  );
}

export default ProjectPage;
