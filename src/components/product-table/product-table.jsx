import { filterProducts } from "../../services/filter-service";
import formatNumber from "../../services/format-number-service";
import { ProductItems } from "../product-items/product-items";

export const ProductTable = ({ products, searchString }) => {
  const filteredProducts = filterProducts(products, searchString);
  var count = 0;
  filteredProducts.map(
    (product) => (count += product.sold * product.unitPrice)
  );
  const total = formatNumber(count);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        <ProductItems products={filteredProducts} />
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
      </tfoot>
    </table>
  );
};
