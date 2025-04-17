export const generateSlug = (name) => {
    return encodeURIComponent(name.replace(/\s+/g, "-").toLowerCase());
  };
  