export const filterProducts = (products, searchString) => {
  if (searchString.length > 0) {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return filtered;
  }
  return products;
};
