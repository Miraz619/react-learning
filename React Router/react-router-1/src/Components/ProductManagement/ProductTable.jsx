import React from "react";

const ProductTable = ({ product }) => {
  return (
    <div>
      <h3>{product.length}</h3>
      <table>
        <thead>
          <th>No</th>
          <th>Name </th>
          <th>Price</th>
          <th>Quantity</th>
        </thead>

        <tbody>
          {product.map((p,index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
