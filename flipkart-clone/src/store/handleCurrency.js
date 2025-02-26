export const handleCurrency = (value) => {
  let currency = value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  currency = currency.split(".")[0];
  return currency;
};
