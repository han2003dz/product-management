module.exports = (objectPagination, query, countProducts) => {
  if(query.page) {
    objectPagination.currentPage = parseInt(query.page);
  }

  objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItemProduct;

  const totalPage = Math.ceil(countProducts/objectPagination.limitItemProduct);
  objectPagination.totalPage = totalPage;

  if (query.page) {
    objectPagination.currentPage = parseInt(query.page);
  }

  objectPagination.skip =
    (objectPagination.currentPage - 1) * objectPagination.limitItemProduct;
  const countProducts = await Product.count(find);
  const totalPages = Math.ceil(
    countProducts / objectPagination.limitItemProduct
  );

  objectPagination.totalPages = totalPages;

  return objectPagination;
}