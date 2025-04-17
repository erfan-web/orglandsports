import { generateSlug } from "./slug";

export const generateCategoryRoute  = (obj) => {
  const slug = generateSlug(obj.name);
  return `/category/${obj.id}/${slug}`;
};