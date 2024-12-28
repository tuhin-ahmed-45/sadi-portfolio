import Image from "next/image"

const ProjectCard = ({project}) => {
    return (
        <div key={project?.id} className="rounded-sm bg-secondary p-4 max-w-sm">
            <Image src={project?.image} alt="Project 1" width={350} height={300} />
            <h2 className="font-semibold text-secondary-foreground text-2xl mt-4">{project?.name}</h2>
            <p className="text-secondary-foreground">{project?.description}</p>
        </div>
    )
}

export default ProjectCard