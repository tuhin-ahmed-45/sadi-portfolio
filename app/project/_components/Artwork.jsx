'use client'

import ProjectCard from "@/components/reusable/ProjectCard";
import { projects } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const Artwork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {projects?.map((project) => (
          <div key={project?.id} onClick={() => handleCardClick(project)}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Landscape View Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-secondary p-6 rounded-lg shadow-lg max-w-4xl w-full flex">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-primary"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Section - Image */}
              {selectedProject?.image && (
                <div className="w-full md:w-1/2">
                 <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    width={600} // Adjust width as needed
                    height={400} // Adjust height as needed
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
              {/* Right Section - Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {selectedProject?.name}
                  </h2>
                  <p className="mt-4">{selectedProject?.description}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm">
                    Artwork by <span className="font-semibold text-primary">Fauzan Sadi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artwork;
