const Product = require("../../models/product.model");
const filterStatusHelpers = require("../../helpers/filterStatus");
const searchHelpers = require("../../helpers/search");

// [GET]/admin/products
module.exports.index = async (req, res) => {
  // console.log(req.query.status);
  const filterStatus = filterStatusHelpers(req.query);
  const objectSearch = searchHelpers(req.query);

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  // pagination
  let objectPagination = {
    currentPage: 1,
    limitItemProduct: 4,
  };

  if (req.query.page) {
    objectPagination.currentPage = parseInt(req.query.page);
  }

  objectPagination.skip =
    (objectPagination.currentPage - 1) * objectPagination.limitItemProduct;
  const countProducts = await Product.count(find);
  const totalPages = Math.ceil(
    countProducts / objectPagination.limitItemProduct
  );

  objectPagination.totalPages = totalPages;
  // end pagination

  const products = await Product.find(find)
    .sort({ position: "desc" })
    .limit(objectPagination.limitItemProduct)
    .skip(objectPagination.skip);
  // desc - giảm dần, asc-tăng dần

  // console.log(products);

  res.render("admin/pages/product/index", {
    pageTitle: "Danh sách sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};

// [PATCH]/admin/product/change-status/status/id
/**
 *  params chứa các router động truyền lên từ client
 * ví dụ như status, id
 */
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const id = req.params.id;

  await Product.updateOne({ _id: id }, { status: status });

  req.flash("success", "Cập nhật trạng thái thành công!");
  res.redirect("back");
};

// [PATCH]/admin/product/change-multi

module.exports.changeMulti = async (req, res) => {
  const type = req.body.type;

  // converse các id về 1 mảng
  const ids = req.body.ids.split(",");
  switch (type) {
    case "active":
      await Product.updateMany({ _id: { $in: ids } }, { status: "active" });
      break;
    case "inactive":
      await Product.updateMany({ _id: { $in: ids } }, { status: "inactive" });
      break;
    case "deleted-all":
      await Product.updateMany(
        { _id: { $in: ids } },
        { deleted: true, deletedAt: new Date() }
      );
      req.flash("success", "Đã xóa thành công ${ids} sản phẩm!")
      break;
    case "change-position":
      // be nhận được 1 mảng ids[id-position]
      for (const item of ids) {
        // tách id và position
        let [id, position] = item.split("-");
        position = parseInt(position);
        await Product.updateOne({ _id: id }, { position: position });
      }
      break;
    default:
      break;
  }
  res.redirect("back");
};

module.exports.deleteItem = async (req, res) => {
  const id = req.params.id;

  // await Product.deleteOne({ _id: id }); xóa vĩnh viễn
  // xóa mềm
  await Product.updateOne(
    { _id: id },
    {
      deleted: true,
      deletedAt: new Date(),
    }
  );

  res.redirect("back");
};
