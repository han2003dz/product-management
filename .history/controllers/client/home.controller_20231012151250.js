const Product = require("../../models/product.model");
const productsHelper = require("../../helpers/products");

// [GET/client/]
module.exports.index = async (req, res) => {
  // lấy ra sản phẩm nổi bật
  const productsFeatured = await Product.find({
    featured: "1",
    deleted: false,
    status: "active",
  }).limit(6);
  console.log(productsFeatured);
  res.render("client/pages/home/index", {
    pageTitle: "Trang chủ",
    productsFeatured: productsFeatured,
  });
};
