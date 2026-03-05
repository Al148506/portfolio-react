export function importProjectImages(path: string) {
  const images = import.meta.glob<{ default: string }>(
    "/src/images/**/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );

  return Object.entries(images)
    .filter(([key]) => key.includes(path))
    .map(([, value]) => value.default);
}