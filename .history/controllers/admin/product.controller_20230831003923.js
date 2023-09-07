// [GET/admin/product]


module.exports.index = async (req, res) => {
    res.render("admin/pages/product/index", {
        pageTitle: "Trang Sản phẩm"
    })
}