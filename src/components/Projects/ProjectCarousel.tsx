import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/navigation.css";
import "./ProjectCarousel.css"
import { projects } from "./projects.data";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import type { Project } from "./types";
import { ProjectModal } from "./ProjectModal";

export const ProjectCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              project={project}
              onMoreDetails={() => setSelectedProject(project)}
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
