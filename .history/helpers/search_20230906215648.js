module.exports = (query) => {
  let keyword = "";
  if (query.keyword) {
    keyword = query.keyword;
    const re = new RegExp(keyword, "i");
    find.title = re;
  }
};
