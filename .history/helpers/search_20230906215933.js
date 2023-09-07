module.exports = (query) => {
  let objectSearch = {
    keyword: "",
    regex: ""
  };
  if (req.query.keyword) {
    objectSearch.keyword = req.query.keyword;
    const re = new RegExp(keyword, "i");
    find.title = re;
  }
};
