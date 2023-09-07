// [GET/admin/product]
const Product = require("../../models")

module.exports.index = async (req, res) => {
    res.render("admin/pages/product/index", {
        pageTitle: "Trang Sản phẩm"
    })
}