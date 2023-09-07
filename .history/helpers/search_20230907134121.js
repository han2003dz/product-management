module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };
  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    const re = new RegExp(obkeyword, "i");
    objectSearch.regex = re;
  }
  return objectSearch;
};
