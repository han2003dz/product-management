module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const re = new RegExp(keyword, "i");
    find.title = re;
  }
};
