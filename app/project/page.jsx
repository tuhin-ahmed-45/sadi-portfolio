import ProjectCard from "@/components/reusable/ProjectCard"
import { projects } from "@/constants"

function ProjectPage() {
  return (
    <main className="container space-y-28 mx-auto py-8 px-4 md:px-8">
      <h1 className="font-semibold text-secondary-foreground text-4xl text-center">My Projects</h1>
      <div className="flex items-center justify-center space-x-8">
        {projects?.map((project) => (
          <ProjectCard key={project?.id} project={project}/>
        ))}
      </div>
    </main>
  )
}

export default ProjectPage