import formatNumber from "../../services/format-number-service";

export const ProductItems = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <tr key={product.name}>
          <td>{product.name}</td>
          <td>{formatNumber(product.sold * product.unitPrice)}</td>
        </tr>
      ))}
    </>
  );
};
