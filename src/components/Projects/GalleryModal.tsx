import { useState, useEffect, useCallback } from "react";
import "./GalleryModal.css";
import { createPortal } from "react-dom";
import type { GalleryImage } from "./types";

interface Props {
  images: GalleryImage[];
  onClose: () => void;
  projectTitle: string;
}

export const GalleryModal = ({ images, onClose, projectTitle }: Props) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      setDirection(dir);
      setAnimKey((k) => k + 1);
      setCurrent((i) =>
        dir === "next"
          ? (i + 1) % images.length
          : (i - 1 + images.length) % images.length,
      );
    },
    [images.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, onClose]);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  const caption = images[current]?.caption;

  return createPortal(
    <div className="gm" role="dialog" aria-modal="true">

      {/* Fondo desenfocado dinámico */}
      <div
        className="gm__bg"
        style={{ backgroundImage: `url(${images[current].src})` }}
      />
      <div className="gm__vignette" />

      {/* Header */}
      <header className="gm__header">
        <div className="gm__header-left">
          <span className="gm__project-title">{projectTitle}</span>
          <span className="gm__counter">
            <b>{String(current + 1).padStart(2, "0")}</b>
            <span className="gm__counter-sep">/</span>
            <span>{String(images.length).padStart(2, "0")}</span>
          </span>
        </div>

        <button className="gm__close" onClick={onClose} aria-label="Cerrar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.5 1.5L14.5 14.5M14.5 1.5L1.5 14.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* Imagen + flechas dentro del stage */}
      <main className="gm__stage">
        {images.length > 1 && (
          <button
            className="gm__nav gm__nav--prev"
            onClick={() => navigate("prev")}
            aria-label="Anterior"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 3L6 10L13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        <img
          key={animKey}
          src={images[current].src}
          alt={caption || `Imagen ${current + 1}`}
          className={`gm__image gm__image--${direction}`}
          draggable={false}
        />

        {images.length > 1 && (
          <button
            className="gm__nav gm__nav--next"
            onClick={() => navigate("next")}
            aria-label="Siguiente"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </main>

      {/* Footer: caption + dots */}
      <footer className="gm__footer">
        <p className={`gm__caption${caption ? " gm__caption--visible" : ""}`}>
          {caption ?? ""}
        </p>

        {images.length > 1 && (
          <div className="gm__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`gm__dot${i === current ? " gm__dot--active" : ""}`}
                onClick={() => {
                  setDirection(i > current ? "next" : "prev");
                  setAnimKey((k) => k + 1);
                  setCurrent(i);
                }}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
        )}
      </footer>
    </div>,
    document.body,
  );
};