module.exports = (objectPagination, query, countProducts) => {
  if(query.page) {
    objectPagination.currentPage = parseInt(query.page);
  }

  objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItemProduct;

  const totalPage = Math.ceil(countProducts/objectPagination.limitItemProduct);
  objectPagination.totalPage = totalPage;

  const totalPage = Math.ceil(countProducts/objectPagination.limitItemProduct);


  return objectPagination;
}