const ProductCategory = require("../models/product-category.model");

module.exports.getSubCategory = async (parentId) => {
  const getCategory = async (parentId) => {
    // lấy ra danh muc sản phẩm
    const subs = await ProductCategory.find({
      parent_id: parentId,
      status: "active",
      deleted: false,
    });

    


  };
};
