function productCart(req, res) {
  res.render('./products/productCart');
}

function productDetail(req, res) {
  res.render('./products/productDetail');
}
module.exports = {
  productCart,
  productDetail,
};
