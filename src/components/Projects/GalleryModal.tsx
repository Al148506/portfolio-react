import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/navigation.css";
import "../../../node_modules/swiper/modules/pagination.css";
import "./GalleryModal.css";

interface Props {
  images: string[];
  onClose: () => void;
}

export const GalleryModal = ({ images, onClose }: Props) => {
  return (
    <div className="gallery-modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="gallery-modal__backdrop" />

      <button className="gallery-close" onClick={onClose} aria-label="Cerrar galería">
        <span className="gallery-close__line" />
        <span className="gallery-close__line" />
      </button>

      <div className="gallery-counter">
        <span className="gallery-counter__label">GALERÍA</span>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".gallery-nav--prev",
          nextEl: ".gallery-nav--next",
        }}
        pagination={{ clickable: true, el: ".gallery-pagination" }}
        spaceBetween={0}
        loop={images.length > 1}
        className="gallery-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <div className="gallery-slide__frame">
              <img src={img} alt={`screenshot ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <>
          <button className="gallery-nav gallery-nav--prev" aria-label="Anterior">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 3L6 10L13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="gallery-nav gallery-nav--next" aria-label="Siguiente">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="gallery-pagination" />
        </>
      )}
    </div>
  );
};