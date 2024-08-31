// CartDisplay.js
import React from "react";

const CartItemDisplay = ({ cartTotal }) => {
  return (
    <div>
      <i className="cart-number">{cartTotal}</i>
    </div>
  );
};

export default CartItemDisplay;
