module.exports.priceNewProducts = (products) => {
  const price = products.map((item) => {
    item.priceNew = item.price * (100 - item.discountPercentage);
  });
};
