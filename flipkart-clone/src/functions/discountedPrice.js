export const discountedPrice = (price, discount) => {
  let newPrice = price * 100;
  let newDiscount = discount * price;

  const finalPrice = newPrice - newDiscount;
  return finalPrice;
};
