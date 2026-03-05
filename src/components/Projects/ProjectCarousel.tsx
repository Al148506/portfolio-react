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

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        loop
        breakpoints={{
          0:   { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024:{ slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              project={project}
              onMoreDetails={() =>
                setSelectedProject(
                  projectsModalData.find(
                    (p: ProjectModalData) => p.id === project.id,
                  ) || null,
                )
              }
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