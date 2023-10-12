const ProductCategory = require("../models/product-category.model");

module.exports.getSubCategory = async (parentId) => {
  const getCategory = async (parentId) => {
    // lấy ra mảng danh muc sản phẩm
    const subs = await ProductCategory.find({
      parent_id: parentId,
      status: "active",
      deleted: false,
    });

    // sao chép mảng danh mục sản phẩm
    let allSub = [...subs];

    for (const sub of subs) {
      const childs = await getCa
    }
  };
};
