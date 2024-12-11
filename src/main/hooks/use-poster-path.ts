export const usePosterPath = (path: string) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return `${imageUrl}/w185${path}`;
};
