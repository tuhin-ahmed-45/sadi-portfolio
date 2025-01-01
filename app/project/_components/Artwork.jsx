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

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  };

  return (
    <div>
      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects?.map((project) => (
          <div
            key={project?.id}
            onClick={() => handleCardClick(project)}
            className="cursor-pointer"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          onClick={handleOutsideClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="relative bg-secondary p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row gap-6">
            {/* Modal Content */}
            {selectedProject?.image && (
              <div className="w-full md:w-1/2">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority={false} // Lazy load
                />
              </div>
            )}
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
      )}
    </div>
  );
};

export default Artwork;
