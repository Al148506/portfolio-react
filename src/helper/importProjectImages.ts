import type { GalleryImage } from "../components/Projects/types";

export function importProjectImages(path: string): GalleryImage[] {
  const images = import.meta.glob<{ default: string }>(
    "/src/images/**/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );

  return Object.entries(images)
    .filter(([key]) => key.includes(path))

    // 1️⃣ ordenar por número inicial
    .sort(([a], [b]) => {
      const getNumber = (name: string) =>
        parseInt(name.match(/\d+/)?.[0] || "0", 10);

      return getNumber(a) - getNumber(b);
    })

    // 2️⃣ mapear a GalleryImage
    .map(([key, value]) => {
      const filename =
        key.split("/").pop()?.replace(/\.[^/.]+$/, "") ?? "";

      // 3️⃣ quitar número inicial (01, 02, etc.)
      const cleanName = filename.replace(/^\d+/, "");

      // 4️⃣ separar CamelCase
      const caption = cleanName
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .trim();

      return {
        src: value.default,
        caption
      };
    });
}