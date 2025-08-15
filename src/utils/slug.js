export const generateSlug = (name) => {
    if (!name) return '';
    return encodeURIComponent(name.replace(/\s+/g, "-").toLowerCase());
  };
  