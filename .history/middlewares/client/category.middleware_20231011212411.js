const ProductCategory = require("../../models/product-category.model");

const createTreeHelper = require("../../helpers/createTree");

module.exports.category = async (req, res, next) => {
  const productsCategory = await ProductCategory.find({
    deleted: false,
  });

  const newProductsCategory = createTreeHelper.tree(productsCategory);
  console.log(newProductsCategory);
  res.locals.layoutProductsCategory = newProductsCategory;

  next();
};