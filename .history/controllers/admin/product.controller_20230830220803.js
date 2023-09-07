// [GET/admin/pro]
module.exports.index = (req, res) => {
    res.render("admin/pages/product/index", {
        pageTitle: "Trang Sản phẩm"
    })
}