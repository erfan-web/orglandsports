import { generateSlug } from "./slug";

export const generateCategoryRoute = (obj) => {
  const slug = generateSlug(obj.name);
  return `/category/${obj.id}/${slug}`;
};
export const generateProductDetailRoute = (id, name) => {
  const slug = generateSlug(name);
  return `/ProductDetail/${id}/${slug}`;
};
export const productBrandRoute = (brandName) => {
  const slug = generateSlug(brandName);
  return `/ProductBrands/${slug}`;
};
export const generateArticleDetailRoute = (id, name) => {
  const slug = generateSlug(name);
  return `/ArticleDetail/${id}/${slug}`;
};
