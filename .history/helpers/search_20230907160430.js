module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };
  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    const re = new RegExp(objectSearch.keyword, "i");
    objectSearch.regex = re;
  }else{
    objectSearch.
  }
  return objectSearch;
};
