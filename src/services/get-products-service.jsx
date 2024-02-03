const alphabeticalSort = (array) => {
  return array.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
};

const flattenBranches = (branches) =>
  branches.map((branch) => branch.products).flat();

const mergeProducts = (merged, product) => {
  const existingProduct = merged[product.id];
  let sold = product.sold;
  if (existingProduct) {
    sold = product.sold + existingProduct.sold;
  }
  return { ...merged, [product.id]: { ...product, sold } };
};

export const getBranchData = async () => {
  const data = await Promise.all([
    fetch("api/branch1.json"),
    fetch("api/branch2.json"),
    fetch("api/branch3.json"),
  ])
    .then((results) => Promise.all(results.map((r) => r.json())))
    .then(flattenBranches)
    .then((products) => Object.values(products.reduce(mergeProducts, {})));
  alphabeticalSort(data);
  return data;
};
