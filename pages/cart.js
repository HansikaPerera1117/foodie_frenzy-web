import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/components/PageBanner";

const CartPage = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    document.title = "Cart | Foodie Frenzy Restaurant";
    setCartDetails(
      localStorage.getItem("CART_LIST")
        ? JSON.parse(localStorage.getItem("CART_LIST"))
        : []
    );
  }, []);

  useEffect(() => {
    const total = cartDetails.reduce((acc, item) => acc + item.total, 0);
    setCartSubTotal(total);
    setCartTotal(total + 250);
  }, [cartDetails]);

  const handleRemoveItem = (itemId) => {
    let cartDetails = localStorage.getItem("CART_LIST")
      ? JSON.parse(localStorage.getItem("CART_LIST"))
      : [];

    const itemIndex = cartDetails.findIndex((item) => item.id === itemId);

    if (itemIndex > -1) {
      cartDetails.splice(itemIndex, 1);
    }

    localStorage.setItem("CART_LIST", JSON.stringify(cartDetails));
    window.location.reload();
  };

  const shippingCost = 250; // Example fixed shipping cost

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
            <div className="col-lg-1 fw-bold text-end">Quantity</div>
            <div className="col-lg-2 fw-bold text-end">Price(LKR)</div>
            <div className="col-lg-2 fw-bold text-end">Total(LKR)</div>
            <div className="col-lg-1 fw-bold"></div>
          </div>
          {cartDetails.map((item) => (
            <div className="row mb-3 " key={item.id}>
              <div className="col-lg-1 d-flex align-items-center">
                {" "}
                <img src={item.filesUrl} alt="product Image" />
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <div className=" d-flex  flex-column">
                  <span className="fw-semibold">{item.name}</span>
                  <span> Category :{item.category?.name}</span>
                </div>
              </div>
              <div className="col-lg-1 d-flex align-items-center justify-content-end">
                <label>{item.qty}</label>
              </div>
              <div className="col-lg-2 d-flex align-items-center justify-content-end">
                {item.price.toFixed(2)}
              </div>
              <div className="col-lg-2 d-flex align-items-center justify-content-end">
                {(item.price * item.qty).toFixed(2)}
              </div>
              <div className="col-lg-1 d-flex align-items-center justify-content-end">
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

          <div className="row justify-content-end mt-5">
            <div className="col-lg-6">
              <div className="cart-total">
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>LKR{" " + cartSubTotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Estimated shipping:</span>
                    <span>LKR{shippingCost.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>Total:</span>
                    <span>LKR{" " + cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className="cart-actions d-flex justify-content-end">
                  <Link href="/products" className="main-btn btn-black mx-4">
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
