import Image from "next/image";

const ProjectCard = ({ project }) => {
    return (
        <div
            key={project?.id}
            className="rounded-lg bg-secondary shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm 
            overflow-hidden"
        >
            <div className="relative h-80 w-full">
                <Image
                    src={project?.image}
                    alt={project?.name || "Project Image"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-6 space-y-4">
                <h2 className="font-semibold text-secondary-foreground text-xl">
                    {project?.name || "Project Name"}
                </h2>
                <p className="text-secondary-foreground text-sm">
                    {project?.description || "No description available."}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
