module.exports = (query) => {
    let objectSearch = {
        
    }
  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const re = new RegExp(keyword, "i");
    find.title = re;
  }
};
