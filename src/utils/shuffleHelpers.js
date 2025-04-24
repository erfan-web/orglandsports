export const getShuffledItems = ({
    items = [],
    excludeId = null,
    hasPrice = false,
    limit = 12,
  }) => {
    let result = [...items]

    if(excludeId!==null)
        result = result.filter((item) => item.id !== excludeId);

    if (hasPrice) {
        result = result.filter((item) => item.price);
      }
    
      return result.sort(() => Math.random() - 0.5).slice(0, limit);
  }
