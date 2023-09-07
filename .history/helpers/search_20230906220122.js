module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };
  if (req.query.keyword) {
    objectSearch.keyword = req.query.keyword;
    const re = new RegExp(keyword, "i");
    objectSearch.regex = re;
  }
  return 
};
