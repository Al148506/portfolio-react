import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/navigation.css";
import "./ProjectCarousel.css";
import { projects } from "../../data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { projectsModalData } from "../../data/projects.modal.data";
import type { ProjectModalData } from "../../data/projects.modal.data";

export const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectModalData | null>(null);

  const handleMoreDetails = (id: string) => {
    setSelectedProject(
      projectsModalData.find((p: ProjectModalData) => p.id === id) ?? null
    );
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        loop
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              project={project}
              onMoreDetails={() => handleMoreDetails(project.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};