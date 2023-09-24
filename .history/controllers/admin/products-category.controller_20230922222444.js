module.exports.index = async (req, res) => {
  res.render("admin/pages/products-category/index", {
    pageTitle: "Danh mục sản phẩm",
    
  });
}

module.exports.create = async (req, res) => {
  res.render("admin/pages/products-category/create", {
    pageTitle: "Tạo danh mục sản phẩm",
  });
}

//[POST]/admin/products/createPost
module.exports.createPost = async (req, res) => {
  // ép sang int của giá , gía cũ, số lượng
  req.body.price = parseInt(req.body.price);
  req.body.discountPercentage = parseInt(req.body.discountPercentage);
  req.body.stock = parseInt(req.body.stock);

  // check vị trí
  if (req.body.position == "") {
    const countProducts = await Product.count();
    req.body.position = countProducts + 1;
  } else {
    req.body.position = parseInt(req.body.position);
  }
  console.log(req.file);

  const product = new Product(req.body);
  await product.save();

  res.redirect(`${systemConfig.prefixAdmin}/products`);
};