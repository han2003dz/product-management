const Product = require("../../models/product.model");
const productsHelper = require("../../helpers/products");
const ProductCategory = require("../../models/product-category.model");
const productsCategoryHelper = require("../../helpers/products-category");
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
// [GET] /detail/:slugCategory
module.exports.detail = async (req, res) => {
  try {
    const find = {
      deleted: false,
      slug: req.params.slugCategory,
      status: "active",
    };

    const product = await Product.findOne(find);
    console.log(product);
    if (product.product_category_id) {
      const category = await ProductCategory.findOne({
        _id: product.product_category_id,
        status: "active",
        deleted: false,
      });

      product.category = category;
    }

    

    product.priceNew = productsHelper.priceNewProduct(product);
    res.render("client/pages/products/detail", {
      pageTitle: product.title,
      product: product,
    });
  } catch (error) {
    res.redirect(`/products`);
  }
};

// [GET]/products/:slugCategory
module.exports.category = async (req, res) => {
  const category = await ProductCategory.findOne({
    slug: req.params.slugCategory,
    status: "active",
    deleted: false,
  });

  // lấy ra 1 list category con trong category cha
  const listSubCategory = await productsCategoryHelper.getSubCategory(
    category.id
  );
  // lấy ra id của từng con
  const listSubCategoryId = listSubCategory.map((item) => item.id);

  const products = await Product.find({
    // lấy ra id trong mảng id
    product_category_id: { $in: [category.id, ...listSubCategoryId] },
    deleted: false,
  });

  const newProducts = productsHelper.priceNewProducts(products);

  res.render("client/pages/products/index", {
    pageTitle: category.title,
    products: newProducts,
  });
};
