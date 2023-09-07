module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };
  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    const re = new RegExp(objectSearchkeyword, "i");
    objectSearch.regex = re;
  }
  return objectSearch;
};
