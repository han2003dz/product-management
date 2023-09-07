module.exports = (query) => {
  let objectSearch = {
    keyword: "",
  };
  if (query.keyword) {
    objectSearch.keyword = query.keyword;
    const re = new RegExp(objectSearch.keyword, "i");
    objectSearch.regex = re;
  } else {
    objectSearch.keyword = "không tìm thấy sản phẩm";
  }
  return objectSearch;
};
