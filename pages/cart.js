import React, { useState } from "react";
import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/components/PageBanner";

// Sample data to simulate cart items
const sampleCartItems = [
  {
    id: 1,
    name: "Delicious Vegetables Italian Pizza",
    image: " assets/images/product/product-1.png",
    quantity: 2,
    price: 253.59,
  },
  {
    id: 2,
    name: "Baked Chicken Wings Asian Tomatoes",
    image: "assets/images/product/product-3.png",
    quantity: 1,
    price: 240.59,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(sampleCartItems);

  const handleQuantityChange = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const shippingCost = 5.0; // Example fixed shipping cost

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + shippingCost).toFixed(2);
  };

  return (
    <Layout>
      <PageBanner pageName={"Your Cart"} title="Cart" />{" "}
      <div className="container my-5">
        <div className="cart-table">
          <div className="row mb-3">
            <div className="col-lg-6 fw-bold">Product</div>
            <div className="col-lg-3 fw-bold">Quantity</div>
            <div className="col-lg-1 fw-bold">Price</div>
            <div className="col-lg-1 fw-bold">Total</div>
            <div className="col-lg-1 fw-bold"></div>
          </div>
          {cartItems.map((item) => (
            <div className="row mb-3 " key={item.id}>
              <div className="col-lg-1">
                {" "}
                <img src={item.image} alt="product Image" />
              </div>
              <div className="col-lg-5 ">{item.name}</div>
              <div className="col-lg-3">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className="form-control"
                  min="1"
                />
              </div>
              <div className="col-lg-1">${item.price.toFixed(2)}</div>
              <div className="col-lg-1">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="col-lg-1">
                <button
                  className="main-btn btn-black"
                  style={{
                    padding: "20px 20px",
                  }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i
                    class="far fa-trash"
                    style={{ position: "relative", right: 6 }}
                  />
                </button>
              </div>
            </div>
          ))}

          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="cart-total">
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>${calculateSubtotal()}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Estimated shipping:</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
                <div className="cart-actions d-flex justify-content-end">
                  <Link href="/shop" className="main-btn btn-black mx-4">
                    Continue Shopping
                  </Link>
                  <Link href="/checkout" className="main-btn btn-red">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
