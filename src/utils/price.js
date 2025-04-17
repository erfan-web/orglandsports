export const getDiscountedPrice = (product) => {
    let { price, discount, id } = product;
    // console.log(price);
    if (!discount) return price.toLocaleString();
  
    let { type, discountedPrice, Percent, startDate, endDate , spetial } = discount;
    const now = new Date();
  
    // بررسی زمان تخفیف
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (now < start || now > end) {
        spetial=false;
        return price.toLocaleString() 
      }; // خارج از زمان تخفیف
    }
  
    if (type === "dynamic") {
      Percent = Math.ceil((((price - discountedPrice) / price) * 100) / 5) * 5;
      discountedPrice = discountedPrice.toLocaleString();
      return { discountedPrice, Percent };
    }
  
    return price;
  };
  