import React from "react";

const CartList = ({ items }) => {
  return items.length > 0 ? (
    <div>
      {items.map((e) => (
        <p>{e}</p>
      ))}
    </div>
  ) : (
    <div>No items in cart</div>
  );
};

export default CartList;
