const Product = require("../../models/product.model");
const productsHelper = require("../../helpers/products");
const ProductCategory = require("../../models/product-category.model");
const productsCategoryHelper
// [GET/client/product]
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  }).sort({ position: "desc" });
  //desc - descending (từ lớn tới bé)

  const newProducts = productsHelper.priceNewProducts(products);

  res.render("client/pages/products/index", {
    pageTitle: "Danh sách sản phẩm",
    products: newProducts,
  });
};
// [GET] /products/detail/:slug
module.exports.detail = async (req, res) => {
  try {
    const find = {
      deleted: false,
      slug: req.params.slug,
      status: "active",
    };

    const products = await Product.findOne(find);

    res.render("client/pages/products/detail", {
      pageTitle: products.title,
      products: products,
    });
  } catch (error) {
    res.redirect(`/products`);
  }
};
