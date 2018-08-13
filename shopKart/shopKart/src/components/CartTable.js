import React from 'react';

const CartTable = props => {
  let tableBody,
    { cartItems } = props.tableData.cartDetails;

  if (!cartItems.length) {
    return (
      <p className="no-items-added col-5 l-text-align-center t-font-weight-bold">No Cart Items Added</p>
    );
  } else {
    tableBody = cartItems.map((element, index) => <tr key={index}><td>{element.title}</td><td>Rs {element.price}/-</td><td>{element.count}</td><td>Rs {element.amount}/-</td></tr>);
  }
  return (
    <table className="table col-5 l-text-align-center">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
};

export default CartTable;