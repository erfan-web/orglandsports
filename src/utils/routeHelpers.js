import { generateSlug } from "./slug";

export const generateCategoryRoute = (obj) => {
  const slug = generateSlug(obj.name);
  return `/category/${obj.id}/${slug}`;
};
export const generateProductDetailRoute=(id , name) =>{
  const slug = generateSlug(name);
  return `/ProductDetail/${id}/${slug}`;
}
